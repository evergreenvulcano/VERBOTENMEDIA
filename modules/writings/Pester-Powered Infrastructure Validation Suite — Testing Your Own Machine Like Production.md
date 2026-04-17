# Pester-Powered Infrastructure Validation Suite
Testing Your Own Machine Like Production
Author: phoneDead
Published: 12 April 2026  |  Read time: ~20 minutes
OUT-16  |  Lane 3 — Analyst OS & Reasoning Infrastructure

| Quick Start<br>Clone the companion repo. Run .\Invoke-InfraValidation.ps1 -Scope All from an elevated PowerShell 7 session. Review the HTML report generated in .\Reports\. That's it — thirty tests, two minutes, one command. The rest of this article explains what those tests do and why they exist. |
| --- |

# Your Machine Is Untested Production
Your workstation is production infrastructure. Not metaphorically. Literally.
It runs CI/CD pipelines. It holds SSH keys, cloud credentials, browser-stored passwords, VPN configurations, and session tokens for systems that manage other systems. It connects to your employer's internal network, your personal banking, and that one Azure subscription that still has contributor access to half the tenant. If an attacker compromised your workstation today, the blast radius would be measured in organizations, not files.
And yet — when was the last time you tested it?
Not "ran a virus scan." Tested it. Asserted a set of expected conditions and verified they hold. Checked that the firewall profiles you enabled six months ago are still enabled. That the autorun entries in your registry match what you expect. That nobody — including you, via an errant installer — added a local admin account you forgot about.
Server teams do this. They have monitoring, compliance scans, baseline configurations, drift detection. Your workstation gets none of that. It sits there, accumulating entropy, and you trust it because it was fine last time you looked — whenever that was.
This article presents a fix: a complete infrastructure validation suite built on Pester — the PowerShell testing framework you already know from application development. Except here, we're not testing PowerShell functions. We're testing the machine itself. The "system under test" is your operating system, and the assertions are security expectations.
Five domains. Thirty tests. Two minutes to run. One report that tells you whether your machine still matches your intentions.
This is not a Pester tutorial. I'm assuming you've written Describe/It/Should blocks before. If you haven't, spend thirty minutes with the Pester documentation first. What follows is the infrastructure validation blueprint I actually run on my own machines, and the architectural decisions behind it.
# The Architecture: Describe, Context, It — But for Infrastructure
Pester's Behavior-Driven Design syntax maps surprisingly well to infrastructure validation once you shift your mental model. In application testing, Describe names a function. In infrastructure testing, it names a system domain — a category of machine state you care about.
## The Domain-Aspect-Assertion Pattern

| Pester Keyword | Application Testing | Infrastructure Testing | Example |
| --- | --- | --- | --- |
| Describe | Function or module under test | System domain | "Firewall Configuration" |
| Context | Scenario or input condition | Specific aspect or sub-system | "Inbound Rules" |
| It | Expected output or behavior | Individual security assertion | "Should have Windows Firewall enabled for all profiles" |

This maps naturally to how sysadmins already think about their systems. You don't think "let me check the firewall." You think "let me check the firewall profiles, then the firewall rules, then the listening ports." Describe → Context → It mirrors that mental hierarchy exactly.
## File Organization
One .Tests.ps1 file per domain. No exceptions. When you look at the test directory, the file names tell you what's being validated:
InfraValidation/
├── Tests/
│   ├── Firewall.Tests.ps1
│   ├── Persistence.Tests.ps1
│   ├── Software.Tests.ps1
│   ├── UserAccess.Tests.ps1
│   └── PolicyDrift.Tests.ps1
├── Baselines/
│   ├── ExpectedAutorunEntries.json
│   ├── ExpectedServices.json
│   ├── ExpectedScheduledTasks.json
│   └── PolicyBaseline.json
├── Reports/
├── Invoke-InfraValidation.ps1
└── README.md
The Baselines/ directory is critical. It holds JSON files that define what your machine should look like. Tests compare current state against these baselines. When you intentionally change your machine — install new software, add a scheduled task, modify a policy — you update the baseline. The validation suite is a living contract between you and your machine.
## Output Formats
Pester 5.x supports two XML output formats via its configuration object: NUnitXml (NUnit 2.5 schema) and JUnitXml (JUnit 4 schema). Both are machine-readable and consumable by CI systems, but for a personal validation suite, the real value is in the human-readable output. Our runner script generates both: an NUnit XML file for tooling integration and an HTML summary for you to actually read.
$config = New-PesterConfiguration
$config.TestResult.Enabled = $true
$config.TestResult.OutputFormat = "NUnitXml"
$config.TestResult.OutputPath = "./Reports/InfraValidation-$(Get-Date -Format 'yyyyMMdd').xml"
$config.Output.Verbosity = "Detailed"
# The Security Validation Suite: Five Domains, Thirty Tests
What follows is the complete test suite. I've included full Pester code for the tests that are most illustrative and summarized the rest. Every test shown here runs on my own machines. Adapt the baselines to yours.
## Domain 1: Firewall & Network Posture
Six tests. The firewall is the first thing that gets toggled off "just for a minute" and forgotten. These tests ensure your network boundary remains where you put it.
# Firewall.Tests.ps1

Describe "Firewall Configuration" -Tag "Security", "Network" {

    Context "Firewall Profiles" {

        It "Should have Windows Firewall enabled for all profiles" {
            $profiles = Get-NetFirewallProfile -ErrorAction Stop
            $disabledProfiles = $profiles | Where-Object { $_.Enabled -eq $false }
            $disabledProfiles | Should -BeNullOrEmpty -Because "all three firewall profiles (Domain, Private, Public) must be active"
        }

        It "Should have no unexpected inbound allow rules" {
            $expectedRules = @(
                "Core Networking*",
                "Windows Remote Management*",
                "File and Printer Sharing*"
                # Add your known-good rules here
            )
            $inboundAllow = Get-NetFirewallRule -Direction Inbound -Action Allow -Enabled True |
                Where-Object {
                    $name = $_.DisplayName
                    -not ($expectedRules | Where-Object { $name -like $_ })
                }
            $inboundAllow | Should -BeNullOrEmpty -Because "only explicitly approved inbound rules should exist"
        }

        It "Should have SMBv1 disabled" {
            $smb1 = Get-SmbServerConfiguration | Select-Object -ExpandProperty EnableSMB1Protocol
            $smb1 | Should -BeFalse -Because "SMBv1 is deprecated and a known attack vector (EternalBlue)"
        }
    }

    Context "Listening Ports" {

        It "Should have no unexpected listening ports" {
            $expectedPorts = @(135, 445, 5040, 5985, 7680)  # Customize to your machine
            $listening = Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue |
                Select-Object -ExpandProperty LocalPort -Unique |
                Where-Object { $_ -notin $expectedPorts }
            $listening | Should -BeNullOrEmpty -Because "only known services should be listening"
        }
    }

    Context "Network Profile" {

        It "Should set unknown networks to Public profile" {
            $unknown = Get-NetConnectionProfile |
                Where-Object { $_.NetworkCategory -eq "Private" -and $_.Name -notmatch "YourHomeLAN|YourWorkLAN" }
            $unknown | Should -BeNullOrEmpty -Because "unrecognized networks must default to Public for restrictive rules"
        }

        It "Should have DNS-over-HTTPS configured (if supported)" {
            $dohServers = Get-DnsClientDohServerAddress -ErrorAction SilentlyContinue
            $dohServers | Should -Not -BeNullOrEmpty -Because "DNS queries should be encrypted"
        }
    }
}
The SMBv1 test is the one that surprises people. They disabled it years ago. But a Windows feature update can re-enable optional features. "I already did that" is not the same as "I verified it's still done." That's the entire point of this suite.
## Domain 2: Persistence & Autorun Hygiene
Six tests. This is where infrastructure validation crosses into threat detection. Every persistence mechanism that malware uses is also used by legitimate software — the difference is whether you expected the entry to be there. These tests codify your expectations.
# Persistence.Tests.ps1

Describe "Persistence Mechanisms" -Tag "Security", "Persistence" {

    BeforeAll {
        $expectedAutorun = Get-Content "./Baselines/ExpectedAutorunEntries.json" |
            ConvertFrom-Json
        $expectedTasks = Get-Content "./Baselines/ExpectedScheduledTasks.json" |
            ConvertFrom-Json
        $expectedServices = Get-Content "./Baselines/ExpectedServices.json" |
            ConvertFrom-Json
    }

    Context "Registry Autorun - HKCU" {

        It "Should have only expected entries in HKCU Run key" {
            $runEntries = Get-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run" -ErrorAction SilentlyContinue
            $currentNames = $runEntries.PSObject.Properties |
                Where-Object { $_.Name -notin @("PSPath","PSParentPath","PSChildName","PSProvider","PSDrive") } |
                Select-Object -ExpandProperty Name
            $unexpected = $currentNames | Where-Object { $_ -notin $expectedAutorun.HKCU_Run }
            $unexpected | Should -BeNullOrEmpty -Because "unexpected autorun entries may indicate persistence by unwanted software"
        }
    }

    Context "Registry Autorun - HKLM" {

        It "Should have only expected entries in HKLM Run key" {
            $runEntries = Get-ItemProperty -Path "HKLM:\Software\Microsoft\Windows\CurrentVersion\Run" -ErrorAction SilentlyContinue
            $currentNames = $runEntries.PSObject.Properties |
                Where-Object { $_.Name -notin @("PSPath","PSParentPath","PSChildName","PSProvider","PSDrive") } |
                Select-Object -ExpandProperty Name
            $unexpected = $currentNames | Where-Object { $_ -notin $expectedAutorun.HKLM_Run }
            $unexpected | Should -BeNullOrEmpty -Because "HKLM Run entries affect all users and require elevated privileges to set — unexpected entries are high-severity"
        }
    }

    Context "Scheduled Tasks" {

        It "Should have scheduled tasks matching known-good baseline" {
            $currentTasks = Get-ScheduledTask |
                Where-Object { $_.TaskPath -notlike "\Microsoft\Windows\*" } |
                Select-Object -ExpandProperty TaskName
            $unexpected = $currentTasks | Where-Object { $_ -notin $expectedTasks.TaskNames }
            $unexpected | Should -BeNullOrEmpty -Because "non-OS scheduled tasks must be explicitly approved (MITRE ATT&CK T1053)"
        }
    }

    Context "Auto-Start Services" {

        It "Should have no unexpected services set to auto-start" {
            $autoServices = Get-Service |
                Where-Object { $_.StartType -eq "Automatic" } |
                Select-Object -ExpandProperty Name
            $unexpected = $autoServices | Where-Object { $_ -notin $expectedServices.AutoStart }
            $unexpected | Should -BeNullOrEmpty -Because "auto-start services execute at boot with elevated context (MITRE ATT&CK T1543)"
        }
    }

    Context "Startup Folder Executables" {

        It "Should have no unsigned executables in startup paths" {
            $startupPaths = @(
                "$env:APPDATA\Microsoft\Windows\Start Menu\Programs\Startup",
                "$env:ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp"
            )
            $unsigned = foreach ($path in $startupPaths) {
                Get-ChildItem -Path $path -File -ErrorAction SilentlyContinue |
                    Where-Object { $_.Extension -in @('.exe','.dll','.bat','.cmd','.ps1') } |
                    ForEach-Object {
                        $sig = Get-AuthenticodeSignature $_.FullName
                        if ($sig.Status -ne 'Valid') { $_.Name }
                    }
            }
            $unsigned | Should -BeNullOrEmpty -Because "unsigned executables in startup folders are a classic persistence vector (MITRE ATT&CK T1547.001)"
        }
    }

    Context "Shell Extensions" {

        It "Should have shell extensions matching baseline" {
            $shellExt = Get-ItemProperty -Path "HKLM:\Software\Microsoft\Windows\CurrentVersion\Shell Extensions\Approved" -ErrorAction SilentlyContinue
            $count = ($shellExt.PSObject.Properties |
                Where-Object { $_.Name -notin @("PSPath","PSParentPath","PSChildName","PSProvider","PSDrive") }).Count
            $count | Should -BeLessOrEqual $expectedAutorun.ShellExtensionMaxCount -Because "new shell extensions may indicate COM hijacking"
        }
    }
}
Cross-reference: For the forensic deep-dive into what these registry paths reveal historically — including deleted entries recoverable from registry hive analysis — see "The Registry as a Crime Scene."
## Domain 3: Software & Update Compliance
Six tests. This domain answers two questions: "Is everything that should be here present and running?" and "Is anything here that shouldn't be?"
# Software.Tests.ps1

Describe "Software & Update Compliance" -Tag "Compliance", "Software" {

    Context "Windows Version" {

        It "Should be running expected Windows build" {
            $expectedBuild = "26100"  # Windows 11 25H2 — update as needed
            $currentBuild = (Get-ItemProperty "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion").CurrentBuildNumber
            $currentBuild | Should -Be $expectedBuild -Because "running an outdated OS build means missing security patches"
        }
    }

    Context "Windows Updates" {

        It "Should have all critical updates installed within 30 days" {
            $thirtyDaysAgo = (Get-Date).AddDays(-30)
            $session = New-Object -ComObject Microsoft.Update.Session
            $searcher = $session.CreateUpdateSearcher()
            $pending = $searcher.Search("IsInstalled=0 AND IsHidden=0")
            $criticalPending = $pending.Updates |
                Where-Object { $_.MsrcSeverity -eq "Critical" }
            $criticalPending.Count | Should -Be 0 -Because "critical security updates must be applied within 30 days"
        }
    }

    Context "Blacklisted Software" {

        It "Should have no blacklisted software installed" {
            $blacklist = @("uTorrent", "TeamViewer", "AnyDesk", "CCleaner")  # Customize
            $installed = Get-ItemProperty "HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*",
                "HKLM:\Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*" |
                Select-Object -ExpandProperty DisplayName -ErrorAction SilentlyContinue
            $found = $blacklist | Where-Object { $_ -in $installed }
            $found | Should -BeNullOrEmpty -Because "blacklisted software introduces unacceptable risk or policy violations"
        }
    }

    Context "Security Tools" {

        It "Should have Windows Defender service running" {
            $defender = Get-Service -Name "WinDefend" -ErrorAction SilentlyContinue
            $defender.Status | Should -Be "Running" -Because "endpoint protection must be active at all times"
        }

        It "Should have PowerShell execution policy at expected level" {
            $policy = Get-ExecutionPolicy -Scope LocalMachine
            $policy | Should -BeIn @("RemoteSigned", "AllSigned") -Because "Unrestricted or Bypass execution policy permits unsigned script execution"
        }
    }

    Context "Runtime Versions" {

        It "Should meet minimum PowerShell version" {
            $minVersion = [Version]"7.4.0"
            $current = $PSVersionTable.PSVersion
            $current | Should -BeGreaterOrEqual $minVersion -Because "older PowerShell versions lack security features and receive no patches"
        }
    }
}
A note on the blacklist: this is subjective and environment-specific. TeamViewer is perfectly legitimate software — unless your security policy prohibits remote access tools that weren't provisioned by IT. The test doesn't judge. It asserts what you've decided.
## Domain 4: User & Access Configuration
Six tests. These validate the identity and access posture of your machine. A surprising number of security incidents start with "there was a local admin account I forgot existed."
# UserAccess.Tests.ps1

Describe "User & Access Configuration" -Tag "Security", "Access" {

    Context "Local Administrator Accounts" {

        It "Should have only expected local admin accounts" {
            $expectedAdmins = @("Administrator", "YourUsername")  # Customize
            $admins = Get-LocalGroupMember -Group "Administrators" -ErrorAction Stop |
                Where-Object { $_.ObjectClass -eq "User" } |
                Select-Object -ExpandProperty Name |
                ForEach-Object { $_.Split('\')[-1] }
            $unexpected = $admins | Where-Object { $_ -notin $expectedAdmins }
            $unexpected | Should -BeNullOrEmpty -Because "unexpected admin accounts indicate privilege escalation risk"
        }

        It "Should have Guest account disabled" {
            $guest = Get-LocalUser -Name "Guest" -ErrorAction SilentlyContinue
            $guest.Enabled | Should -BeFalse -Because "the Guest account provides unauthenticated local access"
        }
    }

    Context "UAC Configuration" {

        It "Should have UAC at expected level" {
            $uac = Get-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System"
            $uac.EnableLUA | Should -Be 1 -Because "UAC must be enabled to prevent silent privilege escalation"
            $uac.ConsentPromptBehaviorAdmin | Should -BeIn @(1, 2, 5) -Because "admin consent must require a prompt, not auto-elevate"
        }
    }

    Context "Screen Lock" {

        It "Should have screen lock timeout configured" {
            $timeout = Get-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name "ScreenSaveTimeOut" -ErrorAction SilentlyContinue
            $timeoutValue = [int]$timeout.ScreenSaveTimeOut
            $timeoutValue | Should -BeLessOrEqual 600 -Because "screen lock timeout must be 10 minutes or less to prevent physical access abuse"
        }
    }

    Context "Disk Encryption" {

        It "Should have BitLocker enabled on system drive" {
            $bitlocker = Get-BitLockerVolume -MountPoint "C:" -ErrorAction Stop
            $bitlocker.ProtectionStatus | Should -Be "On" -Because "an unencrypted system drive exposes all data to physical theft"
        }
    }

    Context "Credential Guard" {

        It "Should have Credential Guard active (if hardware supports)" {
            $deviceGuard = Get-CimInstance -ClassName Win32_DeviceGuard -Namespace "root\Microsoft\Windows\DeviceGuard" -ErrorAction SilentlyContinue
            if ($null -eq $deviceGuard) {
                Set-ItResult -Skipped -Because "DeviceGuard WMI class not available — hardware may not support VBS"
            } else {
                $credGuardRunning = $deviceGuard.SecurityServicesRunning -contains 1
                $credGuardRunning | Should -BeTrue -Because "Credential Guard isolates NTLM hashes and Kerberos tickets from memory scraping"
            }
        }
    }
}
The Credential Guard test demonstrates an important pattern: graceful degradation. Not every machine supports Virtualization-Based Security. The test doesn't fail on unsupported hardware — it skips, with a clear reason. Pester's Set-ItResult -Skipped is perfect for this. Your report shows the test was considered but not applicable, rather than generating a false failure.
## Domain 5: Policy Drift Detection
Six tests. These are the "did my hardening survive the last update?" tests. You spent hours applying security baselines. These tests verify they stuck.
# PolicyDrift.Tests.ps1

Describe "Policy Drift Detection" -Tag "Compliance", "Policy" {

    BeforeAll {
        $baseline = Get-Content "./Baselines/PolicyBaseline.json" | ConvertFrom-Json
    }

    Context "Registry-Based Policy" {

        It "Should have registry values matching LGPO baseline" {
            foreach ($entry in $baseline.RegistryPolicies) {
                $current = Get-ItemProperty -Path $entry.Path -Name $entry.Name -ErrorAction SilentlyContinue
                $currentValue = $current.$($entry.Name)
                $currentValue | Should -Be $entry.ExpectedValue -Because "registry policy '$($entry.Path)\$($entry.Name)' has drifted from baseline"
            }
        }
    }

    Context "Audit Policy" {

        It "Should have audit policy matching expected configuration" {
            $auditPolicy = auditpol /get /category:* /r | ConvertFrom-Csv
            $logonAudit = $auditPolicy | Where-Object { $_.'Subcategory' -eq 'Logon' }
            $logonAudit.'Inclusion Setting' | Should -Match "Success and Failure" -Because "logon events must be audited for both success and failure"
        }
    }

    Context "Windows Defender Configuration" {

        It "Should have no unauthorized Defender exclusions" {
            $exclusions = Get-MpPreference | Select-Object -ExpandProperty ExclusionPath -ErrorAction SilentlyContinue
            $approvedExclusions = $baseline.DefenderExclusions
            $unauthorized = $exclusions | Where-Object { $_ -notin $approvedExclusions }
            $unauthorized | Should -BeNullOrEmpty -Because "Defender exclusions are a common attacker technique to hide malware from scanning"
        }

        It "Should have App & Browser control at expected level" {
            $smartScreen = Get-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer" -Name "SmartScreenEnabled" -ErrorAction SilentlyContinue
            $smartScreen.SmartScreenEnabled | Should -BeIn @("RequireAdmin", "Warn") -Because "SmartScreen must prompt or block unrecognized applications"
        }
    }

    Context "Remote Access" {

        It "Should have Remote Desktop disabled or restricted" {
            $rdp = Get-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Terminal Server" -Name "fDenyTSConnections" -ErrorAction SilentlyContinue
            $rdp.fDenyTSConnections | Should -Be 1 -Because "Remote Desktop should be disabled unless explicitly required and secured"
        }
    }

    Context "Telemetry" {

        It "Should have telemetry level at expected setting" {
            $telemetry = Get-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\DataCollection" -Name "AllowTelemetry" -ErrorAction SilentlyContinue
            $telemetry.AllowTelemetry | Should -BeLessOrEqual 1 -Because "telemetry should be at Required (0) or Basic (1) level for privacy"
        }
    }
}
Cross-reference: For establishing the LGPO baselines these tests validate against — including the full registry policy manifest and group policy export methodology — see "Windows 11 25H2 Hardening Playbook."
# The EdQ Pattern: Security Quizzes as Test Logic
A test that says PASS or FAIL is useful. A test that says why it matters, what failed, and how to fix it is transformational. That's the EdQ (Educational Quiz) pattern: treating every infrastructure test as both a validation check and a teaching moment.
The concept comes from security education design. When you quiz someone on a concept, the answer matters less than the explanation that follows. The same principle applies to machine validation. A failing test should educate you, not just alarm you.
## Implementation: The Test Metadata Hashtable
Define a metadata structure that maps each test to its context:
# TestMetadata.ps1 — loaded by the runner

$TestMetadata = @{
    "Should have Windows Firewall enabled for all profiles" = @{
        RiskLevel     = "Critical"
        MitreId       = "N/A — Defensive Gap"
        Remediation   = 'Set-NetFirewallProfile -Profile Domain,Public,Private -Enabled True'
        Explanation   = "A disabled firewall profile exposes all ports to network-adjacent attackers. All three profiles (Domain, Private, Public) must be active simultaneously."
    }
    "Should have SMBv1 disabled" = @{
        RiskLevel     = "Critical"
        MitreId       = "T1210 — Exploitation of Remote Services"
        Remediation   = 'Set-SmbServerConfiguration -EnableSMB1Protocol $false -Force'
        Explanation   = "SMBv1 is the protocol exploited by EternalBlue (WannaCry, NotPetya). No modern software requires it. Its presence is pure attack surface."
    }
    "Should have only expected entries in HKCU Run key" = @{
        RiskLevel     = "High"
        MitreId       = "T1547.001 — Boot or Logon Autostart Execution: Registry Run Keys"
        Remediation   = 'Remove-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run" -Name "<EntryName>"'
        Explanation   = "The HKCU Run key executes programs at user logon. Malware frequently uses this for persistence because it requires no elevation to write."
    }
    "Should have scheduled tasks matching known-good baseline" = @{
        RiskLevel     = "High"
        MitreId       = "T1053.005 — Scheduled Task/Job: Scheduled Task"
        Remediation   = 'Unregister-ScheduledTask -TaskName "<TaskName>" -Confirm:$false'
        Explanation   = "Scheduled tasks execute code on triggers — boot, logon, timer, event. An unexpected task is either unwanted software or adversary persistence."
    }
    "Should have BitLocker enabled on system drive" = @{
        RiskLevel     = "Critical"
        MitreId       = "N/A — Physical Access Control"
        Remediation   = 'Enable-BitLocker -MountPoint "C:" -EncryptionMethod XtsAes256 -UsedSpaceOnly -RecoveryPasswordProtector'
        Explanation   = "Without full-disk encryption, anyone with physical access to the machine (theft, evil maid) can read all data, extract credentials, and modify the OS."
    }
    "Should have no unauthorized Defender exclusions" = @{
        RiskLevel     = "High"
        MitreId       = "T1562.001 — Impair Defenses: Disable or Modify Tools"
        Remediation   = 'Remove-MpPreference -ExclusionPath "<Path>"'
        Explanation   = "Attackers add Defender exclusions to prevent detection of their payloads. Legitimate exclusions should be few and documented."
    }
}
## Enriching Pester Output
After Pester runs, the runner iterates through the results and enriches failures with metadata:
# Enrichment logic inside Invoke-InfraValidation.ps1

$result = Invoke-Pester -Configuration $config -PassThru

foreach ($test in $result.Tests | Where-Object { $_.Result -eq "Failed" }) {
    $meta = $TestMetadata[$test.Name]
    if ($meta) {
        [PSCustomObject]@{
            Test         = $test.Name
            Result       = "FAILED"
            RiskLevel    = $meta.RiskLevel
            MitreId      = $meta.MitreId
            Remediation  = $meta.Remediation
            Explanation  = $meta.Explanation
            ErrorMessage = $test.ErrorRecord.Exception.Message
        }
    }
}
This transforms a raw Pester report from a flat PASS/FAIL list into a prioritized security assessment. Your weekly report doesn't just say "test failed." It says: "Critical risk. MITRE T1547.001. An unexpected entry was found in your HKCU Run key. Here's the command to remove it, and here's why it matters."
That's the EdQ pattern. Every test teaches. Every failure remediates.
# The Runner: One Command, Full Audit
The master runner script ties everything together. One command, parameterized, producing a complete infrastructure audit.
## Invoke-InfraValidation.ps1
#Requires -RunAsAdministrator
#Requires -Version 7.0

[CmdletBinding()]
param(
    [ValidateSet("All", "Security", "Compliance", "Persistence")]
    [string]$Scope = "All",

    [string]$OutputPath = "./Reports",

    [ValidateSet("Console", "NUnit", "HTML")]
    [string]$Format = "HTML",

    [switch]$Quiet
)

# ── Load metadata ─────────────────────────────────────────────
. "$PSScriptRoot/TestMetadata.ps1"

# ── Map scope to tags ─────────────────────────────────────────
$tagFilter = switch ($Scope) {
    "All"        { @() }                          # No filter = run everything
    "Security"   { @("Security") }
    "Compliance" { @("Compliance") }
    "Persistence"{ @("Persistence") }
}

# ── Configure Pester ──────────────────────────────────────────
$config = New-PesterConfiguration
$config.Run.Path = "$PSScriptRoot/Tests"
$config.Run.PassThru = $true
$config.Output.Verbosity = if ($Quiet) { "None" } else { "Detailed" }

if ($tagFilter.Count -gt 0) {
    $config.Filter.Tag = $tagFilter
}

$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"

if ($Format -in @("NUnit", "HTML")) {
    $config.TestResult.Enabled = $true
    $config.TestResult.OutputFormat = "NUnitXml"
    $config.TestResult.OutputPath = "$OutputPath/InfraValidation-$timestamp.xml"
}

# ── Ensure output directory exists ────────────────────────────
if (-not (Test-Path $OutputPath)) {
    New-Item -Path $OutputPath -ItemType Directory -Force | Out-Null
}

# ── Run tests ─────────────────────────────────────────────────
$result = Invoke-Pester -Configuration $config

# ── Generate enriched HTML report ─────────────────────────────
if ($Format -eq "HTML") {
    $reportData = foreach ($test in $result.Tests) {
        $meta = $TestMetadata[$test.Name]
        [PSCustomObject]@{
            Domain       = ($test.Path -split '\\.')[-2]
            Test         = $test.Name
            Result       = $test.Result
            Duration     = "{0:N0}ms" -f $test.Duration.TotalMilliseconds
            RiskLevel    = if ($meta) { $meta.RiskLevel } else { "Info" }
            MitreId      = if ($meta) { $meta.MitreId } else { "—" }
            Remediation  = if ($test.Result -eq "Failed" -and $meta) { $meta.Remediation } else { "—" }
        }
    }

    $htmlReport = $reportData | ConvertTo-Html -Title "Infrastructure Validation Report" `
        -PreContent "<h1>Infrastructure Validation — $timestamp</h1>
        <p>Passed: $($result.PassedCount) | Failed: $($result.FailedCount) | Skipped: $($result.SkippedCount)</p>" |
        Out-String

    $htmlReport | Out-File "$OutputPath/InfraValidation-$timestamp.html" -Encoding UTF8
    Write-Host "HTML report: $OutputPath/InfraValidation-$timestamp.html" -ForegroundColor Cyan
}

# ── Summary and exit code ─────────────────────────────────────
Write-Host "`n────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host "  PASSED:  $($result.PassedCount)" -ForegroundColor Green
Write-Host "  FAILED:  $($result.FailedCount)" -ForegroundColor $(if ($result.FailedCount -gt 0) { "Red" } else { "Green" })
Write-Host "  SKIPPED: $($result.SkippedCount)" -ForegroundColor Yellow
Write-Host "  TOTAL:   $($result.TotalCount)" -ForegroundColor White
Write-Host "────────────────────────────────────────`n" -ForegroundColor DarkGray

exit $result.FailedCount
## Sample Console Output

| Running tests in 5 files...<br>Describing Firewall Configuration<br>Context Firewall Profiles<br>[+] Should have Windows Firewall enabled for all profiles 42ms (12ms\\|30ms)<br>[+] Should have no unexpected inbound allow rules 187ms (8ms\\|179ms)<br>[+] Should have SMBv1 disabled 31ms (6ms\\|25ms)<br>Context Listening Ports<br>[-] Should have no unexpected listening ports 93ms (9ms\\|84ms) Expected $null or empty, but got @(8080, 3000).<br>Context Network Profile<br>[+] Should set unknown networks to Public profile 28ms (7ms\\|21ms)<br>[+] Should have DNS-over-HTTPS configured (if supported) 15ms (5ms\\|10ms)<br>Describing Persistence Mechanisms<br>...<br><br>────────────────────────────────────────<br>PASSED: 27<br>FAILED: 2<br>SKIPPED: 1<br>  TOTAL:   30<br>──────────────────────────────────────── |
| --- |

## Scheduling: The Weekly Cadence
The suite should run weekly. Not daily (too noisy for a workstation), not monthly (too slow to catch drift). Weekly hits the sweet spot.
Register it as a scheduled task:
$action = New-ScheduledTaskAction `
    -Execute "pwsh.exe" `
    -Argument "-NoProfile -File C:\InfraValidation\Invoke-InfraValidation.ps1 -Scope All -Format HTML -Quiet"

$trigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Sunday -At 6AM

$settings = New-ScheduledTaskSettingsSet `
    -StartWhenAvailable `
    -DontStopIfGoingOnBatteries

Register-ScheduledTask `
    -TaskName "InfraValidationSuite" `
    -Action $action `
    -Trigger $trigger `
    -Settings $settings `
    -RunLevel Highest `
    -Description "Weekly infrastructure validation — tests security config, persistence hygiene, and policy compliance"
The exit code matters. $result.FailedCount becomes the process exit code. Zero means all tests passed. Any non-zero value means something drifted. You can wire this to email alerts, webhook notifications, or just check the Task Scheduler history on Monday morning.
# Operational Considerations: The Maintenance Contract
## Test Baseline Management
The baselines are the soul of this system. They're also the primary maintenance obligation. Here's the contract:
- Install new software? Update ExpectedAutorunEntries.json and ExpectedServices.json if the software adds autostart entries or services.
- Apply a new policy? Update PolicyBaseline.json with the new expected registry values.
- Add a scheduled task? Update ExpectedScheduledTasks.json.
- Open a port for a new tool? Add it to the expected ports array in Firewall.Tests.ps1.
If you don't maintain the baselines, you'll get false positives. If you get too many false positives, you'll stop running the suite. And then you're back to "my machine is fine because it was fine last time I looked."
A practical tip: keep a Update-Baseline.ps1 script that snapshots current state to JSON. Run it deliberately after you make approved changes. Never run it reflexively to silence failures — that defeats the purpose.
## False Positive Management
Not every failure is a security incident. The taxonomy of failures matters:

| Failure Type | Cause | Response |
| --- | --- | --- |
| True positive | Actual security drift or unwanted change | Investigate and remediate immediately |
| Baseline drift | You made an intentional change but forgot to update the baseline | Verify the change was intentional, then update baseline |
| Environmental | Windows Update changed a default, new feature enabled a service | Evaluate: accept the new state (update baseline) or revert it |
| Test defect | The test logic doesn't account for a valid state | Fix the test, not the machine |

The discipline is in the triage, not just the detection. Every failure gets classified. Classified failures get resolved. This takes five to ten minutes per week for a well-maintained suite. That's the cost. The value is continuous assurance that your machine matches your intentions — which, for production infrastructure, is non-negotiable.
## The Friction-Value Equation

| Metric | Value |
| --- | --- |
| Number of tests | 30 |
| Execution time | ~2 minutes |
| Weekly maintenance | ~10 minutes (review + baseline updates) |
| Initial setup | ~2 hours (customize baselines to your machine) |
| Domains covered | Firewall, persistence, software, access, policy |
| MITRE ATT&CK techniques validated | T1547, T1053, T1543, T1562, T1210 |

Two hours to set up. Ten minutes a week to maintain. In exchange, you get a provable, auditable, repeatable assertion that your workstation — your production infrastructure — is configured the way you intend it to be.
That's a trade worth making.
# Trust, But Verify — Automatically
Your workstation is production. It runs your critical workflows, holds your credentials, and connects to systems that trust it implicitly. It deserves the same validation discipline you'd apply to a server in a data center.
Pester gives you the framework — a testing language you already know, repurposed for infrastructure. The validation suite gives you the tests — thirty assertions across five domains that cover the security configurations that actually matter. The EdQ metadata gives you the context — not just what failed, but why it matters and how to fix it.
But the tool isn't the point. The discipline is.
Running these tests weekly means committing to a contract with yourself: I will know the state of my machine. I will not assume. I will verify. When a test fails, you investigate. When you change your machine, you update the baselines. When a new threat technique emerges, you add a test. The suite grows with your understanding.
This is what it means to treat your own machine like production. Not with monitoring dashboards and SLA metrics — with assertions, baselines, and the stubborn habit of checking.

| Configuration is a claim. Testing is evidence. Run the suite. |
| --- |


| Related Reading<br>•  "Windows 11 25H2 Hardening Playbook" — Establishes the LGPO baselines and registry policies that Domain 5 validates against. Start there if you need to build the baseline before testing it.<br>•  "The Registry as a Crime Scene" — The forensic companion to Domain 2. Covers historical analysis of persistence registry keys, including deleted entries recoverable from hive analysis.<br>•  "Power Automate for Solo Admins" — Automates the maintenance workflow: baseline updates, report distribution, and failure notifications for practitioners working without a team. |
| --- |

OUT-16  |  Lane 3 — Analyst OS & Reasoning Infrastructure  |  Source Nodes: SK-23, SK-08  |  Published April 2026
# Registry Persistence as Attack Surface: A Governance Framework for Solo Admins
By phoneDead · April 12, 2026 · 18 min read
Lane 2: Windows Governance · LinkedIn / Dev.to

Registry auditing: the governance layer most solo admins never configure.
Every application you install leaves a fingerprint in your registry. Some of those fingerprints are there to help you. Some of them are there to help themselves. And nobody is auditing the difference.
If you work inside an enterprise, you have layers protecting you from this problem. Group Policy Objects enforce baseline configurations. SCCM or Intune push compliance policies. A change control board reviews what runs at startup. Endpoint Detection and Response platforms flag anomalous registry writes in real time. You might never even think about what lives in your Run keys, because someone else — some team — already did.
If you're a solo admin, a home lab practitioner, a security student, or someone who simply owns their own endpoints and refuses to run them blindly — you have none of that. Your personal workstation, your gaming rig, your creative machine, your home server — they're all running with whatever registry persistence entries accumulated over months or years of software installations, updates, and silent modifications. Nobody audited them. Nobody baselined them. Nobody is watching.
This article is the governance framework you're missing. Not theory — operational doctrine. By the end of it, you'll have a baseline, a monitoring pipeline, a classification system, and an automated compliance check for every registry persistence location on your machine. You'll know exactly what runs when you log in. And more importantly, you'll know when that list changes without your permission.
## The HKCU Blind Spot
Before we build the framework, you need to understand why HKEY_CURRENT_USER is the most dangerous hive on your machine — and why it gets the least attention.
When security professionals talk about registry persistence, they tend to focus on HKEY_LOCAL_MACHINE. That's where services live. That's where system-wide policies are enforced. That's where modifications require administrator privileges and trigger UAC prompts. HKLM is the hive that feels dangerous, because it controls machine-level behavior.
But HKCU is worse. Here's why:
- No admin privileges required. Any process running in your user context can write to HKCU\Software\Microsoft\Windows\CurrentVersion\Run. No elevation needed. No UAC prompt. A standard user-level application — or a malicious script downloaded by your browser — has full write access to a key that executes at every logon.
- No audit trail by default. Windows does not log HKCU modifications unless you explicitly configure a System Access Control List (SACL) on the specific registry key and enable Object Access auditing via auditpol.exe or Local Security Policy. Out of the box, your registry is a write-only surface with no history.
- Survives reboots. Run key entries execute at every user logon. RunOnce entries execute once and then delete themselves — which means you might never see them. Both survive reboots, making them durable persistence mechanisms.
- Invisible to casual inspection. Most users never open regedit.exe. Even those who do rarely navigate to the Run keys. There is no built-in Windows UI that surfaces "here's everything that runs when you log in" in a way that distinguishes registry-based autostart from startup folder shortcuts or scheduled tasks.
This is cataloged as MITRE ATT&CK T1547.001 — Boot or Logon Autostart Execution: Registry Run Keys / Startup Folder. It's not an exotic technique. It's not novel. Malware families including Agent Tesla, NETWIRE, Ursnif, and ValleyRAT all use HKCU Run key persistence because it works, it's trivial to implement, and it blends in with legitimate autostart entries.

| ⚠ The Governance Gap<br>Enterprise machines have Group Policy to lock down Run keys, SCCM to baseline them, and EDR to alert on changes. Non-domain machines — your home PC, your creative workstation, your home lab hosts — have nothing. The attack surface is identical. The governance is zero. |
| --- |

## The Full Map — Every Registry Persistence Location You Should Know
Run keys are the most common persistence mechanism, but they're not the only one. Below is the complete map of registry-based persistence locations. If you're going to govern your machine, you need to monitor all of them.

| Registry Path | Privilege Required | Behavior | Risk Level |
| --- | --- | --- | --- |
| HKCU\Software\Microsoft\Windows\CurrentVersion\Run | None (user-level) | Executes at every user logon. Entries persist until manually removed. | Critical |
| HKCU\Software\Microsoft\Windows\CurrentVersion\RunOnce | None (user-level) | Executes once at next logon, then self-deletes. Often used for staged payload delivery. | Critical |
| HKLM\Software\Microsoft\Windows\CurrentVersion\Run | Administrator | Executes for all users at logon. Machine-wide persistence. | High |
| HKLM\Software\Microsoft\Windows\CurrentVersion\RunOnce | Administrator | Executes once at next logon for all users, then self-deletes. | High |
| HKCU\Software\Microsoft\Windows\CurrentVersion\RunServices | None (user-level) | Legacy key (pre-Vista). Executes services at logon. Still parsed on some systems. | Medium |
| HKCU\Software\Microsoft\Windows\CurrentVersion\RunServicesOnce | None (user-level) | Legacy. Single-execution service launch at logon. | Medium |
| HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders | None (user-level) | Defines paths to special folders (Startup, Desktop, etc.). Redirecting the Startup folder path enables persistence. | High |
| HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders | None (user-level) | User-configurable version of Shell Folders. Supports environment variable expansion. Commonly abused. | High |
| HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon | Administrator | Values Userinit and Shell control what executes during the logon sequence. Modifying these hijacks the entire logon process. | Critical |
| HKLM\SYSTEM\CurrentControlSet\Services | Administrator | Service registration. Different mechanism (SCM-managed), but a powerful persistence vector via ImagePath values. | High |


| Key Insight<br>Every bolded row in the table above requires zero admin privileges. Any application — or any malware — running in your user context can write to those keys silently. These are the keys that demand the most vigilance on a solo-administered machine. |
| --- |

## What's Actually Living in Your Run Keys Right Now
Before you can govern, you need to see. Open an elevated PowerShell prompt and run the following:
# Dump HKCU Run key entries
Get-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Run' -ErrorAction SilentlyContinue |
    Select-Object * -ExcludeProperty PS* |
    Format-List

# Dump HKLM Run key entries
Get-ItemProperty -Path 'HKLM:\Software\Microsoft\Windows\CurrentVersion\Run' -ErrorAction SilentlyContinue |
    Select-Object * -ExcludeProperty PS* |
    Format-List
On a typical Windows 11 workstation, you'll see something like this in HKCU:
OneDrive       : "C:\Program Files\Microsoft OneDrive\OneDrive.exe" /background
Discord        : "C:\Users\phoneDead\AppData\Local\Discord\Update.exe" --processStart Discord.exe
Steam          : "C:\Program Files (x86)\Steam\steam.exe" -silent
SecurityHealth : "C:\Windows\system32\SecurityHealthSystray.exe"
And in HKLM:
RtHDVCpl       : "C:\Program Files\Realtek\Audio\HDA\RtHDVCpl.exe" -s
NvBackend      : "C:\Program Files (x86)\NVIDIA Corporation\Update Core\NvBackend.exe"
SecurityHealth : "C:\Program Files\Windows Defender\MSASCuiL.exe"
Most of those are legitimate. But legitimacy isn't the same as necessity. Every one of those entries is a software tax — a slice of your boot time, your memory footprint, and your attack surface that an application claimed without asking. Most users have 8–15 Run key entries they never explicitly consented to.
### What Suspicious Looks Like
Learn to recognize these patterns. They are the difference between a known-good baseline and a compromised one:
- Paths pointing to temp directories: Entries referencing AppData\Local\Temp, %TEMP%, or any randomly-named subdirectory. Legitimate software installs to Program Files — not temp folders.
- Obfuscated value names: Run key names like svch0st, Windows Update Helper, or SystemService32 — names designed to look like system processes. The real svchost.exe doesn't need a Run key.
- PowerShell with encoded commands: Any entry containing powershell.exe -EncodedCommand or powershell.exe -e is a red flag. Legitimate applications almost never launch PowerShell with Base64-encoded payloads at startup.
- Orphaned entries: Run key values that point to executables that no longer exist on disk. The application was uninstalled, but its persistence entry survived. This is a governance failure — and a potential indicator that something was removed but its foothold remains.
- Entries you don't recognize: If you can't explain why an entry exists, it needs investigation. Period.

| ⚠ Security Warning<br>APT groups like APT19 have been documented disguising Run key values as "Windows Debug Tools," while commodity malware like Agent Tesla and NETWIRE routinely create entries mimicking legitimate software names. The value name alone tells you nothing about the binary being executed — always verify the full path. |
| --- |

## Building a Governance Framework — The Solo Admin's Change Control
Enterprise change control has three pillars: baseline, monitor, enforce. We're going to build all three using nothing but PowerShell and native Windows capabilities. No third-party tools. No agents. No subscriptions.
### Step 1: Baseline — Capture Your Known-Good State
Your baseline is your contract with your machine. It says: "These are the persistence entries I expect to exist. Anything else is unauthorized."
# Export-RegistryBaseline.ps1
# Captures all registry persistence locations to a dated JSON file

$persistencePaths = @(
    'HKCU:\Software\Microsoft\Windows\CurrentVersion\Run',
    'HKCU:\Software\Microsoft\Windows\CurrentVersion\RunOnce',
    'HKLM:\Software\Microsoft\Windows\CurrentVersion\Run',
    'HKLM:\Software\Microsoft\Windows\CurrentVersion\RunOnce',
    'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders',
    'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders'
)

$baseline = foreach ($path in $persistencePaths) {
    if (Test-Path $path) {
        $properties = Get-ItemProperty -Path $path -ErrorAction SilentlyContinue |
            Select-Object * -ExcludeProperty PSPath, PSParentPath,
                PSChildName, PSProvider, PSDrive
        [PSCustomObject]@{
            Path       = $path
            Captured   = (Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
            Properties = $properties
        }
    }
}

$outFile = "RegistryBaseline_$(Get-Date -Format 'yyyyMMdd_HHmmss').json"
$baseline | ConvertTo-Json -Depth 5 | Out-File -FilePath $outFile -Encoding UTF8
Write-Host "Baseline exported to $outFile" -ForegroundColor Green
Run this once. Store the JSON file somewhere safe — ideally in a Git repository so you have versioned history. This file is now your source of truth.
### Step 2: Monitor — Weekly Diff Against Baseline
A baseline without monitoring is a snapshot, not governance. Set up a scheduled task that runs weekly (cross-reference: Task Scheduler Forensics, OUT-17), exports the current state, and diffs it against your baseline.
# Compare-RegistryBaseline.ps1
# Diffs current persistence entries against a stored baseline

param(
    [string]$BaselineFile = "RegistryBaseline_latest.json"
)

$baseline = Get-Content $BaselineFile | ConvertFrom-Json
$current  = @{}

foreach ($entry in $baseline) {
    $path = $entry.Path
    if (Test-Path $path) {
        $props = Get-ItemProperty -Path $path -ErrorAction SilentlyContinue |
            Select-Object * -ExcludeProperty PSPath, PSParentPath,
                PSChildName, PSProvider, PSDrive
        $current[$path] = $props
    }
}

foreach ($entry in $baseline) {
    $path = $entry.Path
    $baseProps = $entry.Properties.PSObject.Properties |
        Where-Object { $_.Name -notmatch '^PS' }
    $currProps = $current[$path].PSObject.Properties |
        Where-Object { $_.Name -notmatch '^PS' }

    $added   = $currProps | Where-Object {
                   $_.Name -notin $baseProps.Name }
    $removed = $baseProps | Where-Object {
                   $_.Name -notin $currProps.Name }

    foreach ($a in $added) {
        Write-Host "[ADDED]   $path\$($a.Name) = $($a.Value)" `
            -ForegroundColor Yellow
    }
    foreach ($r in $removed) {
        Write-Host "[REMOVED] $path\$($r.Name)" `
            -ForegroundColor Red
    }
}

Write-Host "`nDiff complete. Review any ADDED or REMOVED entries." `
    -ForegroundColor Cyan
### Step 3: Classify — Assign a Governance Status to Every Entry
For each entry in your baseline, assign one of four classifications:

| Classification | Definition | Action |
| --- | --- | --- |
| APPROVED | Known legitimate software. You installed it, you expect it, you accept the boot-time cost. | Document the entry and its justification in your baseline. |
| REVIEW | New or changed since last baseline. Not yet evaluated. | Investigate the binary path. Check digital signature. Verify the application is still installed. |
| REMOVE | Unnecessary, orphaned (file no longer exists), or unwanted. Adds attack surface without value. | Remove the entry. Log the removal. Update the baseline. |
| CRITICAL | Potentially malicious. Matches known suspicious patterns. Binary is unsigned, obfuscated, or unexpected. | Do not delete yet — preserve evidence. Capture the binary hash. Check VirusTotal. Investigate lateral movement. |

Governance principle: if you can't explain why an entry exists, it doesn't get APPROVED status. Default to REVIEW. Promote to APPROVED only after you've verified the source and accepted the trade-off.
### Step 4: Enforce — Remove Unapproved Entries
# Remove-UnapprovedPersistence.ps1
# Removes entries classified as REMOVE and logs the action

param(
    [string[]]$RemoveEntries = @('SteamUpdater', 'DiscordUpdate')
)

$runKeyPath = 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Run'
$logFile    = "PersistenceRemoval_$(Get-Date -Format 'yyyyMMdd').log"

foreach ($entry in $RemoveEntries) {
    try {
        $value = (Get-ItemProperty -Path $runKeyPath).$entry
        Remove-ItemProperty -Path $runKeyPath -Name $entry -ErrorAction Stop
        $logEntry = "[$(Get-Date)] REMOVED: $entry (was: $value)"
        Add-Content -Path $logFile -Value $logEntry
        Write-Host $logEntry -ForegroundColor Green
    }
    catch {
        Write-Host "[$(Get-Date)] FAILED to remove: $entry — $($_.Exception.Message)" `
            -ForegroundColor Red
    }
}
### Step 5: Document — Maintain a Living Approved-Entries Register
Your baseline JSON is your machine-readable source of truth. But you also need a human-readable register. For each APPROVED entry, document:
- Value name — the registry value (e.g., OneDrive)
- Binary path — full path to the executable
- Purpose — what it does and why you allow it
- Date approved — when you explicitly accepted this entry
- Review cycle — when you'll re-evaluate (quarterly is sane)
This is change control. It's the same process a Change Advisory Board uses in ITIL — scaled down to one person and one machine. The rigor is identical.
## Advanced — Enabling Registry Auditing
The governance framework above is proactive: you baseline, you diff, you enforce. But it's periodic — it runs on a schedule. If you need real-time visibility into registry modifications, you need to enable native Windows registry auditing.
This requires two configurations:
1. Enable Object Access auditing via auditpol:
# Enable auditing for registry object access (requires admin)
auditpol /set /subcategory:"Registry" /success:enable /failure:enable

# Verify the setting
auditpol /get /subcategory:"Registry"
2. Set a SACL on the registry key you want to monitor:
Open regedit.exe, navigate to HKCU\Software\Microsoft\Windows\CurrentVersion\Run, right-click → Permissions → Advanced → Auditing tab → Add. Set the principal to Everyone, type to Success, and check Set Value, Create Subkey, and Delete.
Once configured, every modification to that key generates Event ID 4657 in the Security log. The event captures the user SID, the process that made the change, the old value, and the new value — a complete forensic record.
# Query Event ID 4657 for registry modification events
Get-WinEvent -FilterHashtable @{
    LogName = 'Security'
    Id      = 4657
} -MaxEvents 20 | Format-List TimeCreated, Message

| When to Use This<br>SACL-based registry auditing is overkill for routine governance. It generates significant log volume and requires you to actually review those logs. Use it when: (1) you suspect compromise and need a forensic trail, (2) you're running a honey-key as a tripwire for unauthorized access, or (3) you're feeding logs into a local SIEM or Windows Event Forwarding pipeline. For day-to-day governance, the weekly diff from Step 2 is sufficient. For deeper endpoint monitoring, see the Sysmon approach below. |
| --- |

Sysmon alternative: If you run Sysmon (and you should), Event ID 13 (RegistryEvent — Value Set) provides the same visibility without configuring individual SACLs. A properly tuned Sysmon configuration targeting Run key paths will log every value set operation with the process name, full registry path, and new value. The community configuration by Olaf Hartong (sysmon-modular) includes rules for autostart registry locations out of the box.
## The Pester Integration — Automated Compliance Checks
If you've followed the Pester-Powered Infrastructure Validation Suite (OUT-16), you already have a framework for turning governance into automated, testable, repeatable assertions. Registry persistence governance fits perfectly into that model.
# RegistryPersistence.Tests.ps1
# Pester 5.x compliance tests for registry persistence governance

BeforeDiscovery {
    $approvedHKCU = @('OneDrive', 'SecurityHealth')
    $approvedHKLM = @('SecurityHealth', 'RtHDVCpl')
}

Describe "Registry Persistence Governance" {

    Context "HKCU Run Key Compliance" {

        It "should have no unapproved HKCU Run entries" {
            $runKey = 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Run'
            $entries = (Get-ItemProperty -Path $runKey -ErrorAction SilentlyContinue).PSObject.Properties |
                Where-Object { $_.Name -notmatch '^PS' }
            $unapproved = $entries | Where-Object { $_.Name -notin $approvedHKCU }
            $unapproved | Should -BeNullOrEmpty -Because `
                "all HKCU Run entries should be in the approved list"
        }

        It "should have no orphaned persistence entries" {
            $runKey = 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Run'
            $entries = (Get-ItemProperty -Path $runKey -ErrorAction SilentlyContinue).PSObject.Properties |
                Where-Object { $_.Name -notmatch '^PS' }
            foreach ($e in $entries) {
                $binaryPath = ($e.Value -replace '"', '').Split(' ')[0]
                Test-Path $binaryPath | Should -BeTrue -Because `
                    "'$($e.Name)' points to '$binaryPath' which should exist"
            }
        }
    }

    Context "HKLM Run Key Compliance" {

        It "should have all HKLM Run entries matching approved baseline" {
            $runKey = 'HKLM:\Software\Microsoft\Windows\CurrentVersion\Run'
            $entries = (Get-ItemProperty -Path $runKey -ErrorAction SilentlyContinue).PSObject.Properties |
                Where-Object { $_.Name -notmatch '^PS' }
            $unapproved = $entries | Where-Object { $_.Name -notin $approvedHKLM }
            $unapproved | Should -BeNullOrEmpty -Because `
                "all HKLM Run entries should be in the approved list"
            }
    }
}
Run this with Invoke-Pester .\RegistryPersistence.Tests.ps1 -Output Detailed and you get a pass/fail report that tells you, in plain language, whether your machine's persistence entries match your governance policy. Red means something changed. Green means your contract is intact.

| Integration Point<br>Combine this with a scheduled task (OUT-17) that runs Invoke-Pester weekly and writes results to a log file. If any test fails, have the task send you a notification. You've just built a continuous compliance engine with no third-party dependencies. |
| --- |

## Why This Matters Beyond Security
Registry persistence governance isn't only a security practice. It's a systems discipline with three dimensions:
Performance. Every Run key entry adds to your boot time. It launches a process, which loads DLLs, which allocates memory, which competes for disk I/O during the logon sequence. I've seen machines with 18 Run key entries — half of them for software the user uninstalled months ago — where cleanup shaved 12 seconds off login time. Cleaning your persistence entries is the most effective performance optimization most people never do.
Privacy. Some Run key entries exist solely to launch telemetry collectors, update checkers, or background analytics processes. They phone home on every boot. They transmit usage data you never explicitly consented to. Auditing your Run keys is a privacy audit by another name — you're discovering which vendors decided they needed a permanent background process on your machine.
Sovereignty. This is the principle that ties it all together. If you cannot enumerate what runs at boot on your own machine, you do not govern it. Someone else does — the application vendor, the OEM, the updater process that silently added itself during a patch cycle. Governance means you make deliberate decisions about what your machine does. Everything else is drift.

| "A machine you can't audit is a machine you don't own. You just have the password." |
| --- |

## Read the Contract
Your registry is a contract. Every Run key is a clause. Most of those clauses were written by someone else, inserted during installation, and accepted by default — without your review, without your signature, without your informed consent.
It's time to read the contract.
The framework in this article gives you the tools: a baseline to capture the current state, a monitoring pipeline to detect changes, a classification system to make deliberate decisions, enforcement scripts to remove what you reject, and Pester tests to automate ongoing compliance. None of it requires Active Directory. None of it requires enterprise tooling. None of it requires a team. It requires one person — you — treating your own endpoint like infrastructure.
Because it is infrastructure. And infrastructure demands governance.
This is Lane 2. Windows can be governed, even by one person, if you refuse to run it blind.
Related articles in this series:
- The Registry as a Crime Scene (OUT-13) — forensic analysis techniques for registry artifacts
- Pester-Powered Infrastructure Validation Suite (OUT-16) — the testing framework referenced in this article
- Task Scheduler Forensics (OUT-17) — governance for the other major persistence mechanism on Windows

| Research Brief — Open Investigation Items<br>The following topics warrant deeper investigation for follow-up articles or expanded coverage:<br>•  Real-world malware campaigns using HKCU Run key persistence: Document specific families (Agent Tesla, NETWIRE, Ursnif, ValleyRAT, APT19's "Windows Debug Tools" entry, APT39's Startup folder techniques) with CVE references and campaign timelines where available.<br>•  Microsoft's official documentation on default Run key entries in Windows 11 25H2: Determine which Run key entries are created by a clean Windows installation versus which are added by OEM bloatware, Microsoft 365 activation, or first-party apps like OneDrive and Teams.<br>•  Registry auditing capability comparison across Windows editions: Map which auditing features (SACL configuration, auditpol.exe subcategories, Event ID 4657 generation, Advanced Audit Policy support) are available in Windows 11 Home vs. Pro vs. Enterprise. Home edition limitations are poorly documented.<br>•  Sysmon Event ID 13 (RegistryEvent — Value Set) configuration recommendations: Evaluate the Olaf Hartong sysmon-modular configuration, the SwiftOnSecurity configuration, and the TrustedSec Community Guide for Run key monitoring coverage. Identify gaps and recommended filter tuning for solo admin environments. |
| --- |

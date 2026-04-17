# The Registry as a Crime Scene:GPO Forensics for Non-Domain Machines
How to treat 10 megabytes of configuration data as forensic evidence — and why solo administrators can't afford not to.
By phoneDead  |  April 12, 2026  |  ~20 min read

## 10 Megabytes of Confession
Export your entire Windows 11 registry to a text file right now. Go ahead — open PowerShell, run reg export HKLM C:\temp\hklm.reg and reg export HKCU C:\temp\hkcu.reg, and watch the files land on disk. Together, they'll weigh in at roughly 10 megabytes. Maybe 12 if you've been busy.
That's it. Ten megabytes. You could fit it on a floppy disk — if anyone still made floppy disks. And inside those 10 megabytes is a complete forensic record of everything that was ever installed, configured, persisted, scheduled, and silently changed on your machine. Every application that registered a COM class. Every network you ever connected to. Every autorun entry that survived an uninstall. Every group policy that was applied, overridden, or quietly abandoned by a Windows Update.
Most administrators treat the Windows registry as a settings database. A place you visit when you need to flip a toggle that doesn't have a GUI, then leave as quickly as possible. This article proposes a different relationship with those 10 megabytes: treat the registry as a crime scene.
Not because a crime has necessarily been committed. But because the investigative methodology — preserve before you touch, document everything, establish a baseline, and treat every anomaly as a finding until proven otherwise — is exactly the methodology that turns a mystery box into a governed system.
This matters most for non-domain-joined machines. Home PCs. BYOD devices. Small business workstations. Home lab servers. Machines that belong to the vast population of Windows installations that have never seen a domain controller and never will. For these machines, there is no Active Directory logging your changes. No Group Policy Management Console tracking policy drift. No SIEM correlating registry modifications with user sessions. There is only the registry itself, and whatever you can extract from it.
If you've never treated a registry export as evidence, you're about to start.
## The Crime Scene Protocol — How to Export and Preserve
Every forensic investigation begins the same way: secure the scene, document its state, and establish a chain of custody. Registry forensics is no different. Before you interpret a single key, you need three artifacts on disk — and you need them preserved in a way that makes them trustworthy weeks or months from now.
### Step 1: The Full Export
The registry export is your primary evidence file. You want the text-based .reg format, not binary hive files, because text is searchable, diffable, and version-controllable. Run both exports from an elevated PowerShell session:
reg export HKLM C:\Baselines\HKLM_$(Get-Date -Format 'yyyyMMdd').reg /y
reg export HKCU C:\Baselines\HKCU_$(Get-Date -Format 'yyyyMMdd').reg /y
Two things matter here. First, the date stamp in the filename. You are creating a snapshot, not a living document. Every export represents the registry's state at a specific moment, and you will accumulate many of these over time. Second, the /y flag overwrites without prompting — useful when you script this into a scheduled task, which you will.
Why text format? Because six months from now, when you need to figure out what changed, you can run Compare-Object against two exports and get a clean diff. Try doing that with binary hive files.
### Step 2: The GPO Report
The registry tells you what is configured. The Group Policy Resultant Set tells you why. Even on non-domain machines, the local group policy engine is active, and gpresult can generate a complete report of applied policies:
gpresult /H C:\Baselines\GPReport_$(Get-Date -Format 'yyyyMMdd').html
Open the resulting HTML file and you'll find something most administrators have never seen for their standalone machines: a structured report showing which policies are applied, which are denied, what security group filtering is in effect, and — critically — the source of each policy setting. On a domain machine, the source would be a GPO name. On a standalone machine, the source is "Local Group Policy," and any setting that shows a different source is a finding worth investigating.
The GPO report captures information that raw registry exports don't: the distinction between a value that was set by policy and a value that was written directly to the registry. This distinction is the difference between "I configured this" and "something else configured this."
### Step 3: The Baseline Delta
A security template file (.inf format) captures your known-good configuration as a portable, re-applicable baseline. If you're using Microsoft's Local Group Policy Object (LGPO) tool — and if you manage non-domain machines, you should be — you can export your current local policy to a GPO backup:
LGPO.exe /b C:\Baselines\GPOBackup /n "Baseline_$(Get-Date -Format 'yyyyMMdd')"
This creates a complete GPO backup directory containing registry.pol files, security templates (GptTmpl.inf), and advanced auditing configuration. This is your forensic baseline — the state you intended. Any deviation from this directory's contents is a finding, whether that deviation was caused by you, by Windows Update, by an application installer, or by something less welcome.

| Preservation Protocol<br>Hash every export immediately after creation. Use Get-FileHash -Algorithm SHA256 on each file and log the hashes to a separate manifest. Store the exports and the manifest in a Git repository or other version-controlled location. If you ever need to prove what your system looked like at a specific point in time — to yourself, to an employer, to an incident response team — these files and their hashes are your evidence. |
| --- |

# Hash all baseline files and write manifest
Get-ChildItem C:\Baselines\*.reg, C:\Baselines\*.html |
    ForEach-Object {
        $hash = (Get-FileHash $_.FullName -Algorithm SHA256).Hash
        "$hash  $($_.Name)"
    } | Out-File C:\Baselines\manifest_$(Get-Date -Format 'yyyyMMdd').sha256
You now have three artifacts: the raw evidence (registry exports), the policy attribution report (GPO report), and the intended-state baseline (LGPO backup). Together, these form a forensic triangle. The registry tells you what is. The GPO report tells you what should be. The baseline tells you what was. Any gap between them is an investigation.
## The Investigation — Five Things Your Registry Tells You
With your evidence preserved, you can begin the investigation. The following five findings represent the most forensically significant categories of registry evidence on non-domain machines. Each one answers a different investigative question, and together they paint a complete picture of system behavior over time.
### Finding 1: Persistence Mechanisms
Investigative question: What runs when I'm not looking?
Persistence is the forensic term for "this thing arranged to survive a reboot." On a non-domain machine with no endpoint detection, the registry is the primary record of what has established persistence — and the primary place to discover things that shouldn't have. The MITRE ATT&CK framework catalogs this under technique T1547 (Boot or Logon Autostart Execution), and its subtechnique T1547.001 (Registry Run Keys / Startup Folder) remains one of the most commonly observed persistence mechanisms in real-world attacks through 2025 and into 2026.
The classic persistence locations, and the ones you should check first:

| Registry Path | Scope | Behavior |
| --- | --- | --- |
| HKCU\Software\Microsoft\Windows\CurrentVersion\Run | Current user | Runs at every logon |
| HKCU\Software\Microsoft\Windows\CurrentVersion\RunOnce | Current user | Runs once, then deleted |
| HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run | All users | Runs at every logon |
| HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce | All users | Runs once, then deleted |
| HKLM\SYSTEM\CurrentControlSet\Services | System | Windows services (Start type 2 = auto) |
| HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders | Current user | Startup folder path (can be redirected) |
| HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon | System | Shell and Userinit values — high-value targets |

The investigation technique is what I call the "I didn't install this" test. Enumerate every value in each Run key. For each entry, ask three questions: Do I recognize this program? Can I verify its digital signature? Does the file path point to a location I expect? Any "no" answer is a finding.
# Enumerate all Run key entries for current user
Get-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run" |
    Select-Object * -ExcludeProperty PS* |
    Format-List
Pay special attention to entries with paths containing %APPDATA%, %TEMP%, or deeply nested user profile directories. Legitimate software typically installs to Program Files. Persistence mechanisms that point elsewhere deserve scrutiny.
### Finding 2: Software Archaeology
Investigative question: What has this machine been?
The Uninstall registry key is less a record of what's currently installed and more a geological stratum of the machine's entire software history. Programs that were installed and removed leave traces — sometimes for years.
# List all software ever registered (including remnants)
Get-ItemProperty "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\*" |
    Select-Object DisplayName, DisplayVersion, Publisher, InstallDate |
    Sort-Object InstallDate -Descending |
    Format-Table -AutoSize
But the Uninstall key is only the beginning. Software leaves archaeological traces across the registry in predictable patterns:
- MUI Cache (HKCU\Software\Classes\Local Settings\Software\Microsoft\Windows\Shell\MuiCache) — Records the friendly names of every executable the user has launched. Survives uninstallation.
- File association remnants (HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts) — Records which programs were used to open which file types. Outlives the programs themselves.
- COM class registrations (HKLM\SOFTWARE\Classes\CLSID) — Applications that registered COM objects often leave those registrations behind when uninstalled. Orphaned CLSIDs are one of the most common forms of registry debris.
- App Paths (HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths) — Maps executable names to file paths. Frequently orphaned.
Why does software archaeology matter forensically? Because an attacker who installs a tool, uses it, and then uninstalls it still leaves these traces. And because a compliance auditor who needs to know whether a specific application was ever present on a machine can find the answer here long after the application itself is gone.
### Finding 3: Policy Drift
Investigative question: Has my configuration changed without my knowledge?
This is the most important finding for non-domain machines, and the most commonly overlooked. Policy drift occurs when the actual registry values diverge from the intended configuration — the configuration you set through group policy, security templates, or manual hardening.
On a domain-joined machine, the domain controller re-applies group policy every 90 minutes (plus a random offset), which limits drift. On a non-domain machine, there is no re-application. Local group policy is applied once. After that, anything can overwrite those registry values: Windows Update, application installers, feature updates, or — in the worst case — malware deliberately weakening your security configuration.
The detection method is a structured comparison between your GPO report and your registry export:
# Export current policy-controlled registry values
# Then compare against your baseline export
$current = Get-ItemProperty "HKLM:\SOFTWARE\Policies\Microsoft\Windows\*" -ErrorAction SilentlyContinue
$baseline = Import-Csv C:\Baselines\PolicyValues_baseline.csv

Compare-Object $baseline $current -Property Name, Value |
    Where-Object { $_.SideIndicator -eq "=>" } |
    Format-Table -AutoSize
Common drift scenarios on non-domain machines include:
- Windows Update overwriting security policies — Feature updates are notorious for resetting telemetry settings, Windows Defender configurations, and update delivery optimization policies to their defaults.
- Application installers modifying firewall rules — Many installers add firewall exceptions by writing directly to HKLM\SYSTEM\CurrentControlSet\Services\SharedAccess\Parameters\FirewallPolicy, bypassing local group policy entirely.
- Browser installers modifying default application handlers — Particularly aggressive installers modify HKCU\Software\Microsoft\Windows\Shell\Associations\UrlAssociations and related keys.
- Malware weakening security controls — The most dangerous drift: something deliberately disabling Windows Defender real-time protection by setting HKLM\SOFTWARE\Policies\Microsoft\Windows Defender\DisableAntiSpyware to 1, or disabling UAC by modifying HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System\EnableLUA.

| Critical Drift Indicator<br>If the GPO report shows a policy as "Applied" but the corresponding registry value doesn't match, something wrote to the registry after the policy was applied. On a non-domain machine, the policy engine will not automatically correct this. The drift persists until you detect it and re-apply your baseline. |
| --- |

### Finding 4: Network Fingerprints
Investigative question: Where has this machine been?
The Windows registry maintains a comprehensive history of every network the machine has connected to, complete with timestamps, network types, and connection metadata. For a machine you're investigating — whether it's your own or someone else's — this is gold.
The primary location is the NetworkList key:
HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Profiles
Each subkey under Profiles represents a unique network the machine has joined. Inside each profile, you'll find:

| Value Name | Data | Forensic Significance |
| --- | --- | --- |
| ProfileName | Network SSID or name | Identifies the network (e.g., "Starbucks WiFi," "CorpNet") |
| Description | Human-readable description | Often matches ProfileName; differs for wired connections |
| Category | 0 = Public, 1 = Private, 2 = Domain | Shows whether the machine treated the network as trusted |
| DateCreated | Binary timestamp | First connection time — places the machine at a location |
| DateLastConnected | Binary timestamp | Most recent connection — confirms ongoing use |
| NameType | 0x06 = Wired, 0x47 = Wireless | Distinguishes Ethernet from Wi-Fi connections |

Additionally, the Signatures subkey maps network profiles to their MAC addresses and DNS suffixes:
HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Signatures\Unmanaged
Each entry here records the DefaultGatewayMac, which ties the network profile to a specific physical router. This means the registry doesn't just tell you "this machine connected to a network called 'HomeNet'" — it tells you which specific router it connected to, allowing you to distinguish between networks with identical names.
For network interface details including IP configurations, DHCP lease information, and adapter metadata:
HKLM\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces\{GUID}
Each subkey here corresponds to a network adapter and contains the IP address, subnet mask, default gateway, DHCP server address, and lease timestamps. Cross-referencing the interface GUID with the NetworkList profiles produces a complete timeline of network activity.
### Finding 5: User Behavior Traces
Investigative question: What has the user actually been doing?
The registry is an unexpectedly thorough diary of user activity. These artifacts aren't security threats per se — they're behavioral evidence, and for self-auditing purposes, they reveal patterns you might not be consciously aware of.
- RecentDocs (HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\RecentDocs) — Records recently accessed documents by file extension. Each extension has its own subkey containing MRU (Most Recently Used) lists in binary format.
- TypedPaths (HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\TypedPaths) — Every path the user has manually typed into the File Explorer address bar. A direct record of intentional navigation.
- UserAssist (HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\UserAssist) — Program execution history, including launch count and last execution time. The key names are ROT13-encoded — a trivial obfuscation that makes them invisible to casual browsing but easily decoded. HRZR_PGYFRFFVBA decodes to UEME_CTLSESSION.
- WordWheelQuery (HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\WordWheelQuery) — A history of search terms entered in the File Explorer search box. Each entry is numbered in the MRU list.
- RunMRU (HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU) — Every command typed into the Win+R Run dialog, in order of use.

| A Note on Self-Auditing<br>These user behavior traces are not inherently concerning — they're the normal exhaust of using a computer. Their forensic value lies in two scenarios: when you're investigating someone else's machine, they help reconstruct user intent. When you're auditing your own, they provide an objective record of your own behavior that you can compare against your expectations. The gap between "what I think I do on this machine" and "what the registry says I do" is often illuminating. |
| --- |

## From Crime Scene to Controlled Environment
One-time forensics is a useful exercise. It shows you what your machine looks like right now, and it might surface findings that demand immediate action. But a single investigation is archaeology — you're studying the past. To actually govern a non-domain machine, you need a framework that detects change as it happens and preserves your ability to respond.
### The LGPO Approach
Microsoft's Local Group Policy Object (LGPO) tool, distributed as part of the Security Compliance Toolkit, is the foundational tool for policy management on non-domain machines. It's a command-line utility that can import, export, and apply policy settings in the same GPO backup format used by Active Directory — which means you can use the same baselines that enterprises deploy to their domain-joined fleets.
The governance workflow:
- Export your current local policy to a GPO backup using LGPO.exe /b.
- Document every setting in the backup — the registry.pol files, the security template, and the auditing configuration. Parse the registry.pol files to readable text: LGPO.exe /parse /m registry.pol.
- Version control the entire GPO backup directory. Commit it to a Git repository with a descriptive message.
- Re-apply after every major update. Windows feature updates frequently reset local group policy settings. After a feature update, compare your stored backup against the new state, then re-apply: LGPO.exe /g C:\Baselines\GPOBackup.
This cycle — export, document, version, re-apply — is the non-domain equivalent of the GPO refresh cycle that domain controllers perform automatically. The difference is that you're doing it manually, on your own schedule, with full visibility into every change.
### Automated Change Detection
A governance framework without monitoring is a suggestion, not a control. The following PowerShell script creates a minimal change-detection system that compares the current registry state against your last known-good baseline:
# Registry Drift Detector — schedule weekly via Task Scheduler
$timestamp = Get-Date -Format 'yyyyMMdd_HHmmss'
$baselineDir = "C:\Baselines"
$currentExport = "$baselineDir\HKLM_current.reg"
$lastBaseline = Get-ChildItem "$baselineDir\HKLM_2*.reg" |
    Sort-Object LastWriteTime -Descending | Select-Object -First 1

# Export current state
reg export HKLM $currentExport /y 2>$null

# Compare against baseline
if ($lastBaseline) {
    $diff = Compare-Object `
        (Get-Content $lastBaseline.FullName) `
        (Get-Content $currentExport) |
        Where-Object { $_.SideIndicator -eq "=>" }

    if ($diff.Count -gt 0) {
        $diff | Out-File "$baselineDir\drift_$timestamp.log"
        Write-EventLog -LogName Application -Source "RegistryAudit" `
            -EventId 1001 -EntryType Warning `
            -Message "$($diff.Count) registry changes detected since last baseline."
    }
}

# Clean up current export
Remove-Item $currentExport -ErrorAction SilentlyContinue
Schedule this script weekly using Task Scheduler. Any delta gets logged to both a file and the Windows Event Log, giving you a paper trail you can review at your convenience and a notification mechanism you can build alerting on top of.
### The Friction Budget
Every governance control adds friction. A solo administrator needs to balance "I want to know about every change" against "I need to actually get work done." Monitoring every registry key on a Windows 11 machine would generate thousands of change events per week — most of them meaningless.
The solution is a tiered approach:

| Tier | Monitoring Level | What's Covered | Review Cadence |
| --- | --- | --- | --- |
| Critical | Real-time alerting | Persistence keys (Run, RunOnce, Services), security policy keys (Windows Defender, UAC, firewall), Winlogon Shell/Userinit | Immediate notification |
| Important | Weekly diff | Local group policy keys under HKLM\SOFTWARE\Policies, installed software, network profiles, scheduled task registrations | Weekly review |
| Informational | Monthly snapshot | User behavior traces (RecentDocs, UserAssist), file associations, COM registrations, MUI cache | Monthly or on-demand |

The critical tier is small enough to monitor without drowning in noise. The informational tier is there for when you need it — for incident response, for compliance audits, or for satisfying your own curiosity about what your machine has been up to.
## Case Study — The Saturday Night Discovery
It's 9:47 PM on a Saturday. You're running your weekly registry diff — not because you have to, but because you automated it and the notification just appeared in your Event Log. The drift detector found 14 changes since last week's baseline. Fourteen. That's more than usual.
You open the drift log. Most of the changes are in HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Component Based Servicing — Windows Update doing its thing. Expected. You scan past them. Then three entries catch your eye, all in the same location:
HKCU\Software\Microsoft\Windows\CurrentVersion\Run
Three new values since last week. Three programs that have arranged to run every time you log in. You didn't install anything this week. At least, you don't think you did.
You enumerate the key:
Get-ItemProperty "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run" |
    Select-Object * -ExcludeProperty PS* | Format-List
The output shows three entries:
OneDrive         : "C:\Program Files\Microsoft OneDrive\OneDrive.exe" /background
SecurityHealth   : C:\Windows\system32\SecurityHealthSystray.exe
BrowserAssistant : "C:\Users\phoneDead\AppData\Local\BrowserAssist\helper.exe" --startup
Entry one: OneDrive. Path points to Program Files, which means the system-installed version, not the per-user version. You updated OneDrive this week — or rather, it updated itself. That explains why it re-registered its Run key. Legitimate. You verify: Get-AuthenticodeSignature "C:\Program Files\Microsoft OneDrive\OneDrive.exe" returns a valid Microsoft signature.
Entry two: SecurityHealth. This is the Windows Security notification icon — the shield in the system tray. It lives in system32, it's signed by Microsoft, and it's expected. But why is it new? You check last week's baseline. It was there — but the value data changed slightly. A Windows Update patched the binary and re-registered the entry. Legitimate, but worth noting: if this entry ever disappears, that's a red flag. Something removing the Security Health tray icon is trying to make you stop noticing it's there.
Entry three: BrowserAssistant. This one stops you. The path is AppData\Local\BrowserAssist\helper.exe. You don't recognize the name. The path is in a user-profile directory, not Program Files. You check the digital signature:
Get-AuthenticodeSignature "C:\Users\phoneDead\AppData\Local\BrowserAssist\helper.exe"
Result: NotSigned. No digital signature at all. Your pulse ticks up slightly. You check when the file was created:
(Get-Item "C:\Users\phoneDead\AppData\Local\BrowserAssist\helper.exe").CreationTime
Tuesday. Three days ago. You think back — Tuesday you uninstalled a browser extension that was acting sluggish. A coupon-finding extension you'd installed months ago and forgotten about. You check the Uninstall key for any reference to "BrowserAssist." Nothing in the Uninstall key — it was a browser extension, not a standalone application. But the browser extension's installer had dropped a native helper binary into AppData and registered it in your Run key. When you uninstalled the extension from the browser, the browser removed its own extension files — but it didn't clean up the native helper or its registry persistence.
Not malware. But not intentional, either. An unsigned executable, persisting across reboots, in a user-writable directory, left behind by software you explicitly removed. This is exactly the kind of finding that accumulates on unmanaged machines until the attack surface is significantly larger than anyone realizes.
You remove the entry:
Remove-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run" `
    -Name "BrowserAssistant"
Remove-Item -Recurse "C:\Users\phoneDead\AppData\Local\BrowserAssist"
Total investigation time: eleven minutes. Total risk if left undetected: low today, but compounding. The executable wasn't malicious, but it was unsigned, unnecessary, and running with your full user permissions at every logon. If that binary were ever compromised in a supply-chain attack, it would already have persistence on your machine.

| Most registry forensics findings aren't dramatic. They're the digital equivalent of finding someone left the back door unlocked. The danger isn't the specific finding — it's the accumulation of unmanaged changes over time. |
| --- |

## The Toolbox — What You Need
Registry forensics doesn't require expensive commercial software. The following tools form a complete investigative kit, and most of them are either built into Windows or freely available.

| Tool | Source | Purpose |
| --- | --- | --- |
| PowerShell (built-in) | Windows | Registry enumeration (Get-ItemProperty), diffing (Compare-Object), hashing (Get-FileHash), and scripting of automated audits |
| reg.exe (built-in) | Windows | Full registry export to searchable text format; fast and scriptable |
| gpresult (built-in) | Windows | Group Policy Resultant Set of Policy report — shows applied policies and their sources |
| LGPO.exe | Microsoft Security Compliance Toolkit | Export, import, and apply local group policy settings in GPO backup format. Essential for baseline management on non-domain machines |
| Autoruns | Sysinternals (Microsoft) | Comprehensive visualization of all persistence mechanisms — registry, scheduled tasks, services, drivers, Winsock providers, and more. Includes VirusTotal integration for hash checking |
| RECmd (v2.1.0) | Eric Zimmerman (SANS) | Advanced command-line registry parser supporting multi-hive search, batch processing with custom rule files, CSV/JSON output, Base64 detection, and plugin-based analysis. The --bn flag accepts batch files that define specific keys and values to extract — invaluable for repeatable forensic analysis |
| Registry Explorer (v2.1.0) | Eric Zimmerman (SANS) | GUI-based registry viewer with multi-hive support, searching, and forensic plugins. Handles locked hive files and parses transaction logs |
| The registry export itself | Your machine | The most underrated forensic tool. A timestamped, hashed, version-controlled text file containing the complete state of your system's configuration at a known point in time |


| Getting Started with RECmd Batch Files<br>Eric Zimmerman's RECmd ships with a community-maintained batch file (BatchExamples directory) that defines the most forensically significant registry keys to extract. To run a comprehensive forensic extraction against an offline hive:<br>RECmd.exe --bn BatchExamples\RECmd_Batch_MC.reb -d C:\Cases\Hives --csv C:\Cases\Output<br>This produces CSV files organized by artifact category — persistence, user activity, network history, application execution — ready for analysis in Excel or Timeline Explorer. |
| --- |

## Every Registry Key Is a Witness
The Windows registry is not a settings database. It is a forensic record — an unsentimental, comprehensive, plain-text account of everything your operating system has been asked to do and everything that has been done to it. For the hundreds of millions of Windows machines that will never join a domain, it is the primary forensic record. Often, it is the only one.
The difference between a managed machine and an unmanaged one isn't the presence of threats. Both machines face the same software supply chain, the same Windows Update cadence, the same accumulation of orphaned autorun entries and drifted policy settings. The difference is the ability to detect change. A managed machine knows what it looked like yesterday, last week, last month. An unmanaged machine is a mystery to itself.
The work described in this article — exporting, baselining, diffing, monitoring — is not glamorous. It produces no dashboards. It wins no conference talks. But it is the foundational discipline that makes every other security control meaningful. You can harden a machine with the most aggressive security template in existence, and six months of unmonitored drift will undo it silently.
Start with the three artifacts: registry export, GPO report, LGPO backup. Hash them. Store them. Schedule the diff. Then open your Run keys this weekend and see who's living there without paying rent.
Ten megabytes of testimony is waiting. All you have to do is read it.

Related reading: For the hardening policies that prevent these findings in the first place, see "Windows 11 25H2 Hardening Playbook." For the task scheduler analysis that complements this registry work, see "Task Scheduler Forensics — Auditing the Automations You Forgot You Made."

| Quick Reference — Five Registry Paths Every Administrator Should Monitor<br>#<br>Registry Path<br>What to Watch For<br>1<br>HKCU\Software\Microsoft\Windows\CurrentVersion\Run<br>New entries you didn't create. Unsigned executables. Paths pointing to<br>%APPDATA%<br>or<br>%TEMP%<br>.<br>2<br>HKLM\SOFTWARE\Policies\Microsoft\Windows Defender<br>Any value of<br>DisableAntiSpyware<br>or<br>DisableRealtimeMonitoring<br>set to 1. This should never happen on a healthy system.<br>3<br>HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Profiles<br>Unfamiliar network names. Unexpected "Domain" category networks on a non-domain machine.<br>4<br>HKLM\SYSTEM\CurrentControlSet\Services<br>Services with<br>Start<br>type 2 (auto) that you don't recognize. Check the<br>ImagePath<br>value for unsigned or unexpected binaries.<br>5<br>HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System<br>Changes to<br>EnableLUA<br>(UAC),<br>ConsentPromptBehaviorAdmin<br>, or<br>FilterAdministratorToken<br>. Any unauthorized change weakens your security posture. |
| --- |

WINDOWS AS A GOVERNED SYSTEM — PART 1 OF 4
# Windows 11 25H2 Hardening Playbook: A Solo Admin’s Field Guide
Everything Microsoft’s security baseline assumes you’ll do — plus the things it doesn’t mention. A practitioner playbook for non-domain-joined and small-fleet Windows 11 25H2 machines.
Author: [AUTHOR BIO]  |  Series: Windows as a Governed System  |  Draft: April 2026
Estimated read time: 25 minutes  |  Baseline version: Windows 11, version 25H2 (September 30, 2025)

# I. Why This Playbook Exists
On September 30, 2025, Microsoft published the security baseline package for Windows 11, version 25H2. If you work in enterprise IT, you probably imported the GPOs into your central store, ran a test ring, and moved on with your week. If you’re a solo admin — or something close to it — you probably downloaded the ZIP, opened the spreadsheet, and immediately noticed the gap between what the baseline assumes and what you actually have.
The baseline is excellent work. Let me say that clearly. The Microsoft Security Baselines team ships configurations that are researched, tested, and carefully scoped. But those configurations are written for environments with Active Directory domain services, Group Policy infrastructure replicated across domain controllers, System Center or Intune for policy delivery, and a security operations team that reads the Event Viewer because it’s literally in their job title. That describes maybe 20% of the machines I’ve managed in the last decade.
The rest? Standalone workstations. Small-office machines joined to Azure AD (sorry, “Microsoft Entra ID”) but managed by one person with a browser tab and a prayer. Lab machines. Personal rigs that double as production boxes because the budget says so. Developer workstations where the person writing the code is also the person patching the OS, rotating the local admin password, and deciding whether that scheduled task at 3 AM is legitimate or a persistence mechanism.
This playbook is the translation layer. It takes the 25H2 baseline, adds the hardening recommendations from ASD’s Hardening Microsoft Windows 11 Workstations guide (updated January 2026), and filters everything through the question a solo admin actually asks: “How do I implement this on a machine that isn’t domain-joined, using tools I already have?”
My perspective is simple. I treat every Windows machine as a potential incident scene. Every registry key is evidence. Every scheduled task is a suspect. If that sounds paranoid, you haven’t responded to an incident on a machine where the attacker used a default-enabled feature as their persistence mechanism. For the forensic registry perspective that complements this playbook, see the companion piece: Registry as a Crime Scene (OUT-13) in this series.
Let’s harden some machines.
# II. What Changed in 25H2 — The Baseline Delta
The 25H2 baseline introduces four new settings and removes four obsolete configurations that now reflect default Windows behavior. That’s a deceptively small diff. Every change either closes a real attack path or improves your forensic visibility — both things a solo admin needs desperately. Here’s what changed, why it matters, and what you actually need to do.

| Setting | Change | Why It Matters | Solo Admin Action |
| --- | --- | --- | --- |
| Printer: Impersonate a client after authentication | Added RESTRICTED SERVICES\PrintSpoolerService to the User Rights Assignment policy. | Supports the restricted Print Spooler service identity introduced with Windows Protected Print (WPP). Without this entry, print fails when WPP is enabled. This is forward-compatibility insurance. | Open secpol.msc → Local Policies → User Rights Assignment → “Impersonate a client after authentication.” Verify RESTRICTED SERVICES\PrintSpoolerService is listed. If you’re not using printers at all, consider disabling the Print Spooler service entirely: Set-Service -Name Spooler -StartupType Disabled |
| NTLM Auditing Enhancements | Enabled by default for improved visibility into NTLM usage. | NTLM is the protocol attackers abuse for relay attacks, pass-the-hash, and credential theft. You can’t restrict what you can’t see. Auditing is the prerequisite to restriction. | Verify via secpol.msc → Local Policies → Security Options → “Network security: Restrict NTLM” settings. Confirm auditing is active. Review Event ID 8001–8004 in the Microsoft-Windows-NTLM/Operational log. After 30 days of audit data, start restricting. |
| MDAV: ASR Rule — Block PSExec and WMI | Added ASR rule d1e49aac-8f56-4280-b9ba-993a6d77406c in Audit mode (value 2). | PSExec and WMI are the two most common lateral movement tools in post-exploitation. Audit mode logs without blocking — which is the correct starting point, even for solo admins. Jumping to Block mode before auditing will break remote management scripts. | Verify via PowerShell: Get-MpPreference \\| Select-Object -ExpandProperty AttackSurfaceReductionRules_Ids. If absent, add via: Add-MpPreference -AttackSurfaceReductionRules_Ids d1e49aac-8f56-4280-b9ba-993a6d77406c -AttackSurfaceReductionRules_Actions 2 |
| Network: Configure NetBIOS Settings | Disable NetBIOS name resolution on all network adapters. | NetBIOS is a broadcast protocol from 1987 that attackers use for name poisoning (LLMNR/NBT-NS attacks via Responder). There is no legitimate reason to have it enabled on a modern network. | Registry per adapter: HKLM\SYSTEM\CurrentControlSet\Services\NetBT\Parameters\Interfaces\Tcpip_{GUID} → set NetbiosOptions = 2 (Disabled). Or via adapter properties → TCP/IPv4 → Advanced → WINS tab → “Disable NetBIOS over TCP/IP.” Do this for every adapter, including VPN adapters. |
| Disable IE11 Launch Via COM Automation | Disabled to prevent legacy scripts from programmatically launching Internet Explorer 11 via COM interfaces. | IE11’s COM automation interface is an underappreciated attack vector. Malware can instantiate InternetExplorer.Application via COM to browse attacker-controlled URLs in a process with weaker security controls than Edge. | Group Policy: Computer Configuration → Administrative Templates → Windows Components → Internet Explorer → “Disable Internet Explorer 11 as a standalone browser” → Enabled, with “Never” selected. Registry: HKLM\SOFTWARE\Policies\Microsoft\Internet Explorer\Main → NotifyDisableIEOptions = 2 |
| Include command line in process creation events | Enabled to log full command-line arguments in Event ID 4688 (Process Creation). | Without command-line logging, a process creation event tells you that powershell.exe ran but not what it did. This is the single highest-value forensic setting in the entire baseline for incident response. | Group Policy: Computer Configuration → Administrative Templates → System → Audit Process Creation → “Include command line in process creation events” → Enabled. Registry: HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System\Audit → ProcessCreationIncludeCmdLine_Enabled = 1 |
| WDigest Authentication | Removed from baseline — the setting is obsolete. WDigest is disabled by default in modern Windows. | WDigest stored plaintext passwords in memory. It was the reason Mimikatz worked so well on older systems. On 25H2, it’s dead by default. Removing it from the baseline is cleanup, not a change in posture. | Verify it’s still disabled: HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\WDigest → UseLogonCredential should be 0 (or absent, which means disabled). If it’s set to 1, you have a problem. |
| Require IPPS for IPP Printers | New policies to enforce TLS-encrypted printing via IPPS and certificate validation for network printers. | Unencrypted print traffic can leak sensitive documents on shared networks. IPPS wraps the print protocol in TLS. For solo admins, this matters most on shared/public networks. | Group Policy: Computer Configuration → Administrative Templates → Printers → “Require IPPS for IPP printers” → Enabled. Warning: This will prevent installation of older printers that don’t support TLS. Test with your hardware first. |


| Solo Admin’s Take<br>The most important changes for a standalone machine are the command-line logging and NTLM auditing. If you do nothing else from this table, enable those two. They give you the forensic visibility to answer “what happened” after something goes wrong — and on a solo-administered machine, “after something goes wrong” is when you’ll actually look at the logs. |
| --- |

# III. The Hardening Checklist — Beyond the Baseline
The baseline is a floor, not a ceiling. What follows is a prioritized hardening checklist structured after the ASD/ACSC Hardening Microsoft Windows 11 Workstations guide (updated January 23, 2026). Each item includes the specific policy path or registry key, the recommended value, and the rationale in one line. Where the setting can break things, I’ll tell you.
## High Priority
### 1. Application Hardening
The ASD guidance puts it bluntly: “applications are often not pre-configured in a secure state.” This is the understatement of the decade. Every application ships with defaults optimized for convenience, not security. Your job is to reverse that assumption.
Microsoft Office Macro Lockdown:

| Setting | Path / Key | Value | Rationale |
| --- | --- | --- | --- |
| Block macros from the internet | HKCU\SOFTWARE\Policies\Microsoft\Office\16.0\{app}\Security → blockcontentexecutionfrominternet | 1 | Prevents execution of macros in files downloaded from the internet (Mark of the Web). This is the single most effective anti-phishing control for Office. |
| VBA macro notification settings | HKCU\SOFTWARE\Policies\Microsoft\Office\16.0\{app}\Security → vbawarnings | 4 (Disable all without notification) | Users cannot enable macros even if they want to. Use value 3 (Disable all except digitally signed) if your org uses signed macros. |
| Disable ActiveX in Office | HKCU\SOFTWARE\Policies\Microsoft\Office\Common\Security → disableallactivex | 1 | ActiveX in Office documents is an exploitation mechanism, not a feature. |

Replace {app} with word, excel, powerpoint, access as applicable.
Browser Hardening (Microsoft Edge):
- Enable SmartScreen: HKLM\SOFTWARE\Policies\Microsoft\Edge → SmartScreenEnabled = 1
- Block potentially unwanted applications: HKLM\SOFTWARE\Policies\Microsoft\Edge → SmartScreenPuaEnabled = 1
- Disable password manager (if using a dedicated manager): HKLM\SOFTWARE\Policies\Microsoft\Edge → PasswordManagerEnabled = 0
Adobe Reader Restrictions:
- Enable Protected Mode: Preferences → Security (Enhanced) → Enable Protected Mode at startup
- Disable JavaScript in PDFs: HKCU\SOFTWARE\Adobe\Acrobat Reader\DC\JSPrefs → bEnableJS = 0
- Block embedded attachments: Edit → Preferences → Trust Manager → uncheck “Allow opening of non-PDF file attachments”
[PLACEHOLDER: Insert PowerShell verification commands from SK-20/SK-21 validating Office macro settings across all installed apps]
### 2. Attack Surface Reduction Rules
The 25H2 baseline adds one ASR rule in Audit mode. That’s a start. Here are the rules a solo admin should deploy beyond the baseline, with recommended enforcement levels. Start every rule in Audit mode (2) for two weeks, then escalate to Block (1) after confirming no legitimate process is caught.

| Rule Name | GUID | Mode | Priority |
| --- | --- | --- | --- |
| Block executable content from email client and webmail | be9ba2d9-53ea-4cdc-84e5-9b1eeee46550 | Block | Critical |
| Block all Office applications from creating child processes | d4f940ab-401b-4efc-aadc-ad5f3c50688a | Block | Critical |
| Block Office applications from creating executable content | 3b576869-a4ec-4529-8536-b80a7769e899 | Block | Critical |
| Block Office applications from injecting code into other processes | 75668c1f-73b5-4cf0-bb93-3ecf5cb7cc84 | Block | Critical |
| Block JavaScript or VBScript from launching downloaded executable content | d3e037e1-3eb8-44c8-a917-57927947596d | Block | Critical |
| Block execution of potentially obfuscated scripts | 5beb7efe-fd9a-4556-801d-275e5ffc04cc | Audit | High |
| Block credential stealing from lsass.exe | 9e6c4e1f-7d60-472f-ba1a-a39ef669e4b2 | Block | Critical |
| Block process creations from PSExec and WMI commands | d1e49aac-8f56-4280-b9ba-993a6d77406c | Audit | High |
| Block Adobe Reader from creating child processes | 7674ba52-37eb-4a4f-a9a1-f0f9a1619a2c | Block | High |
| Block persistence through WMI event subscription | e6db77e5-3df2-4cf1-b95a-636979351e5b | Block | High |
| Block abuse of exploited vulnerable signed drivers | 56a863a9-875e-4185-98a7-b882c64b5ce5 | Block | High |

Deployment via PowerShell (for non-domain machines without Intune):
# Deploy all critical ASR rules in Block mode
$blockRules = @(
    "be9ba2d9-53ea-4cdc-84e5-9b1eeee46550",
    "d4f940ab-401b-4efc-aadc-ad5f3c50688a",
    "3b576869-a4ec-4529-8536-b80a7769e899",
    "75668c1f-73b5-4cf0-bb93-3ecf5cb7cc84",
    "d3e037e1-3eb8-44c8-a917-57927947596d",
    "9e6c4e1f-7d60-472f-ba1a-a39ef669e4b2"
)
foreach ($rule in $blockRules) {
    Add-MpPreference -AttackSurfaceReductionRules_Ids $rule `
        -AttackSurfaceReductionRules_Actions 1
}

| ⚠ Breaking Change Warning<br>“Block execution of potentially obfuscated scripts” (5beb7efe) can trigger on legitimate PowerShell scripts that use string concatenation or encoding. Start in Audit mode and review Microsoft-Windows-Windows Defender/Operational Event ID 1121 before moving to Block. If you write PowerShell daily, this rule will generate noise. |
| --- |

[PLACEHOLDER: Insert screenshot of ASR rule audit events in Event Viewer from SK-20]
### 3. Credential Protection
Credentials are the ultimate target. Every post-exploitation framework — Mimikatz, Rubeus, SharpDPAPI — exists to extract them. Layer your defenses:

| Setting | Path / Key | Value | Rationale |
| --- | --- | --- | --- |
| Enable Credential Guard | HKLM\SYSTEM\CurrentControlSet\Control\DeviceGuard → EnableVirtualizationBasedSecurity | 1 | Isolates LSASS credentials in a virtualization-based security container. Requires: UEFI Secure Boot, TPM 2.0, virtualization extensions. |
| Credential Guard Configuration | HKLM\SYSTEM\CurrentControlSet\Control\Lsa → LsaCfgFlags | 1 (Enabled with UEFI lock) | UEFI lock prevents remote disabling. Use 2 (without UEFI lock) if you need the option to disable remotely during troubleshooting. |
| LSA Protection (RunAsPPL) | HKLM\SYSTEM\CurrentControlSet\Control\Lsa → RunAsPPL | 1 | Runs LSASS as a Protected Process Light, preventing unsigned code from injecting into it. This blocks most credential-dumping tools. |
| Restrict NTLM: Audit incoming traffic | HKLM\SYSTEM\CurrentControlSet\Control\Lsa\MSV1_0 → AuditReceivingNTLMTraffic | 2 (Enable auditing for all accounts) | Prerequisite before restricting NTLM. Audit first, restrict after you understand the traffic. |
| Verify WDigest is disabled | HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\WDigest → UseLogonCredential | 0 | Should be default on 25H2, but verify. If this is set to 1, someone or something changed it — investigate immediately. |


| When You Can’t Use Credential Guard<br>Credential Guard requires hardware virtualization support (Intel VT-x / AMD-V), UEFI Secure Boot, and TPM 2.0. Older machines won’t qualify. In that case: enable LSA Protection (RunAsPPL), deploy the ASR rule blocking credential theft from LSASS (9e6c4e1f), and ensure WDigest is disabled. These three together aren’t as strong as Credential Guard, but they raise the cost of credential theft significantly. |
| --- |

### 4. Local Account Security
On non-domain-joined machines, local account management is your entire identity story. There’s no AD to fall back on.

| Setting | Path / Key | Value | Rationale |
| --- | --- | --- | --- |
| Rename built-in Administrator account | secpol.msc → Local Policies → Security Options → “Accounts: Rename administrator account” | Any non-obvious name | Prevents trivial brute-force targeting the well-known “Administrator” SID. Not security through obscurity — defense in depth. |
| Disable built-in Administrator account | secpol.msc → Local Policies → Security Options → “Accounts: Administrator account status” | Disabled | Use a separate admin account you created. The built-in account has a well-known SID (S-1-5-21-*-500) and may bypass lockout policies. |
| Prevent use of security questions for local accounts | HKLM\SOFTWARE\Policies\Microsoft\Windows\System → NoLocalPasswordResetQuestions | 1 | Security questions are social-engineering attack surface. Disable them. |
| UAC: Always notify | HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System → ConsentPromptBehaviorAdmin | 2 (Prompt for consent on secure desktop) | Default UAC is set to “notify only when apps try to make changes” — which can be bypassed. Set to maximum. |
| UAC: Run all administrators in Admin Approval Mode | HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System → EnableLUA | 1 | Never disable UAC. Ever. I don’t care what that Stack Overflow answer says. |


| LAPS Alternatives for Non-Domain Machines<br>Microsoft’s Local Administrator Password Solution (LAPS) requires Active Directory or Azure AD. For standalone machines, your options are: (1) Windows LAPS with Azure AD / Microsoft Entra ID join — if you have an Entra tenant, this is the best path; (2) manual password rotation on a documented schedule with passwords stored in a dedicated password manager (not a spreadsheet); (3) for multi-machine environments, scripted rotation via a scheduled task that generates a random password and stores the hash locally for emergency recovery. None of these are as clean as domain LAPS, but any of them beats a shared local admin password across five machines. |
| --- |

### 5. Network Hardening
The network stack on a default Windows install is generous. It announces itself via protocols invented before some of your users were born. Fix that.

| Setting | Path / Key | Value | Rationale |
| --- | --- | --- | --- |
| Disable NetBIOS (now in baseline) | Per-adapter: HKLM\SYSTEM\CurrentControlSet\Services\NetBT\Parameters\Interfaces\Tcpip_{GUID} → NetbiosOptions | 2 | NetBIOS name poisoning is the first step in LLMNR/NBT-NS relay attacks. Covered in the baseline now, but verify every adapter. |
| Disable LLMNR | HKLM\SOFTWARE\Policies\Microsoft\Windows NT\DNSClient → EnableMulticast | 0 | LLMNR is the other half of the name-resolution poisoning attack. Not in the baseline. Disable it yourself. |
| Disable mDNS | HKLM\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters → EnableMDNS | 0 | mDNS (multicast DNS) is another broadcast name resolution protocol that can be poisoned. |
| Remove SMBv1 client and server | Disable-WindowsOptionalFeature -Online -FeatureName SMB1Protocol -NoRestart | Removed | SMBv1 is the protocol that enabled WannaCry and NotPetya. It should not exist on any machine in 2026. |
| Enable Windows Firewall on all profiles | HKLM\SYSTEM\CurrentControlSet\Services\SharedAccess\Parameters\FirewallPolicy\{Profile} → EnableFirewall | 1 for Domain, Private, and Public profiles | Some applications disable the firewall during installation. Verify all three profiles are active. |
| Block inbound connections by default | HKLM\SYSTEM\CurrentControlSet\Services\SharedAccess\Parameters\FirewallPolicy\{Profile} → DefaultInboundAction | 1 (Block) | Default-deny inbound is a fundamental security posture. Whitelist only what you need. |

Unnecessary services to disable:
- RemoteRegistry — Remote registry editing. If you need this, you probably have bigger problems.
- lmhosts — TCP/IP NetBIOS Helper. Legacy. Disable alongside NetBIOS.
- Spooler — Print Spooler. Disable if no printers are used. PrintNightmare taught us this lesson.
- SSDPSRV — SSDP Discovery. Used for UPnP device discovery. Disable on machines that don’t need it.
[PLACEHOLDER: Insert PowerShell one-liner from SK-21 that audits all enabled services against the recommended-disabled list]
## Medium Priority
### 6. Logging and Auditing
The command-line-in-process-creation setting from the baseline is a start. But a start is not a finish. Here’s what else you need to actually reconstruct an incident:
Critical Audit Policy Settings (configure via auditpol.exe or secpol.msc):

| Category | Subcategory | Setting | Rationale |
| --- | --- | --- | --- |
| Account Logon | Credential Validation | Success, Failure | Tracks every authentication attempt. Essential for detecting brute force. |
| Logon/Logoff | Logon | Success, Failure | Event IDs 4624/4625. The foundation of logon forensics. |
| Logon/Logoff | Special Logon | Success | Event ID 4672. Logs when administrative privileges are assigned to a logon session. |
| Object Access | File System | Failure | Tracks failed file access attempts — potential reconnaissance or access violations. |
| Detailed Tracking | Process Creation | Success | Event ID 4688. Combined with command-line logging, this is your process forensics backbone. |
| Policy Change | Audit Policy Change | Success | Detects if someone modifies audit policies to cover their tracks. |
| Privilege Use | Sensitive Privilege Use | Success, Failure | Tracks use of powerful privileges like SeDebugPrivilege and SeTakeOwnershipPrivilege. |

Sysmon Deployment: Install Sysmon with a community-maintained configuration (SwiftOnSecurity’s config is the standard starting point). Sysmon gives you process creation with hashes, network connections, file creation timestamps, registry modifications, and WMI event subscriptions — none of which native Windows auditing provides at the same fidelity.
# Install Sysmon with a configuration file
sysmon64.exe -accepteula -i sysmonconfig-export.xml
Event Log Sizing: Default log sizes are absurdly small. Increase them:
# Set Security log to 1 GB
wevtutil sl Security /ms:1073741824

# Set PowerShell Operational log to 256 MB
wevtutil sl Microsoft-Windows-PowerShell/Operational /ms:268435456

| Windows Event Forwarding for Solo Admins<br>If you manage more than one machine, set up a basic Windows Event Forwarding (WEF) collector. Even forwarding to a single collector machine gives you centralized log storage that survives if the source machine is compromised or wiped. For a single machine, ensure log backups are part of your backup routine — attackers clear logs. |
| --- |

### 7. BitLocker and Data Protection
BitLocker is enabled by default on Windows 11 devices with TPM 2.0 and UEFI — but “enabled by default” does not mean “configured correctly.”

| Setting | Action | Rationale |
| --- | --- | --- |
| Verify encryption status | manage-bde -status C: | Confirm the OS volume is fully encrypted, not “encryption in progress” or “suspended.” |
| Require XTS-AES 256 | GPO: Computer Configuration → Administrative Templates → Windows Components → BitLocker → “Choose drive encryption method” → XTS-AES 256-bit | Default is 128-bit. 256-bit costs negligible performance and provides stronger protection. |
| Back up recovery key | manage-bde -protectors -get C: and store the recovery key in a secure, offline location | If you lose this key, you lose the drive. For solo admins, this is not theoretical — it’s a Tuesday. |
| Require additional authentication at startup | GPO: “Require additional authentication at startup” → Enabled, require TPM + PIN | TPM-only unlocking is vulnerable to cold boot and DMA attacks. A startup PIN stops both. |


| ⚠ Recovery Key Management<br>Do not store BitLocker recovery keys only in your Microsoft account. If your Microsoft account is compromised, the attacker gets your recovery key. Store a printed copy in a physical safe, or use a dedicated password manager with offline backup. For non-domain machines, you are the only person who can recover this — treat the key accordingly. |
| --- |

### 8. Windows Update Governance
Unmanaged updates are a risk. Missing updates are a bigger risk. Find the balance:

| Setting | Path / Key | Value | Rationale |
| --- | --- | --- | --- |
| Configure automatic updates | HKLM\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU → AUOptions | 4 (Auto download and schedule the install) | Don’t let updates install during work hours. Schedule for off-hours. |
| Defer feature updates | HKLM\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate → DeferFeatureUpdatesPeriodInDays | 90 | Let other people find the bugs. 90-day deferral gives the ecosystem time to identify breaking changes. |
| Defer quality updates | HKLM\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate → DeferQualityUpdatesPeriodInDays | 7 | One week deferral for security patches. Long enough to catch catastrophic regressions, short enough to stay patched. |
| Exclude drivers from updates | HKLM\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate → ExcludeWUDriversInQualityUpdate | 1 | Driver updates via Windows Update have caused more blue screens than malware on my machines. Manage drivers manually. |

## Lower Priority (But Don’t Skip)
### 9. Copilot and AI Controls
Windows 11 25H2 introduces 13 new Group Policy settings for Copilot and Recall. Most of these are relevant only to Copilot+ PCs with NPU hardware, but the policies apply to all 25H2 machines. For security-focused solo admins, the key decisions are:

| Setting | Path | Recommendation | Rationale |
| --- | --- | --- | --- |
| Allow Recall | Computer Configuration → Administrative Templates → Windows Components → Recall | Disabled | Recall takes periodic screenshots of your screen and stores them locally. On a machine that processes sensitive data, this is a forensic liability — if the machine is compromised, Recall’s snapshot database becomes a treasure trove for the attacker. |
| Disable saving snapshots | HKLM\SOFTWARE\Policies\Microsoft\Windows\WindowsCopilot → DisableRecall | 1 | Belt and suspenders. Disable via both GPO and registry. |
| Turn off Windows Copilot | User Configuration → Administrative Templates → Windows Components → Windows Copilot → “Turn off Windows Copilot” | Enabled (disable Copilot) | On machines handling sensitive or regulated data, an AI assistant that can access screen content, files, and context is a data-handling risk. Disable unless you have a specific, documented use case. |
| Copilot data access controls | Various policies under Windows Copilot GPO node | Restrict to minimum | If you choose to keep Copilot enabled, restrict its access to organizational data, browsing history, and application content using the available scoping policies. |


| The Pragmatic View on Recall<br>Recall is not inherently malicious. It’s a productivity feature with genuine utility. But from a hardening perspective, it creates a local database of everything that was displayed on screen, protected only by Windows Hello. If an attacker achieves local admin access, that database is accessible. For machines in a hardened posture, disable it. For personal productivity machines with lower threat models, it’s your call. |
| --- |

### 10. Legacy Component Removal
Every legacy component is an attack surface. Remove what you don’t need, verify what’s gone:

| Component | Removal Command | Verification |
| --- | --- | --- |
| SMBv1 | Disable-WindowsOptionalFeature -Online -FeatureName SMB1Protocol -NoRestart | Get-WindowsOptionalFeature -Online -FeatureName SMB1Protocol → State should be Disabled |
| PowerShell v2 | Disable-WindowsOptionalFeature -Online -FeatureName MicrosoftWindowsPowerShellV2Root -NoRestart | Get-WindowsOptionalFeature -Online -FeatureName MicrosoftWindowsPowerShellV2Root → Disabled |
| .NET Framework 2.0/3.5 | Disable-WindowsOptionalFeature -Online -FeatureName NetFx3 -NoRestart | Get-WindowsOptionalFeature -Online -FeatureName NetFx3 → Disabled. Warning: Some applications depend on .NET 3.5. Test before removing. |
| WMIC (WMI Command-line) | DISM /Online /Remove-Capability /CapabilityName:WMIC~~~~ | where wmic should return no result. Note: WMIC is deprecated but still present. The WMI PowerShell cmdlets (Get-CimInstance) are the replacement. |
| Internet Explorer 11 | Disabled via GPO (see baseline). Full removal: DISM /Online /Remove-Capability /CapabilityName:Browser.InternetExplorer~~~~0.0.11.0 | Get-WindowsCapability -Online \\| Where-Object Name -like *InternetExplorer* → State should be NotPresent |

# One-shot legacy removal script
$features = @("SMB1Protocol", "MicrosoftWindowsPowerShellV2Root")
foreach ($f in $features) {
    $state = (Get-WindowsOptionalFeature -Online -FeatureName $f).State
    if ($state -eq "Enabled") {
        Write-Host "Disabling $f..." -ForegroundColor Yellow
        Disable-WindowsOptionalFeature -Online -FeatureName $f -NoRestart
    } else {
        Write-Host "$f already disabled." -ForegroundColor Green
    }
}
[PLACEHOLDER: Insert full legacy component audit output from SK-21 showing clean removal verification]
# IV. The PowerShell Hardening Audit Script
Reading a playbook is one thing. Knowing whether your machine actually complies is another. The companion audit script checks the current machine against every recommendation in this playbook and outputs a color-coded HTML compliance report.
Script Architecture:

| Component | Description |
| --- | --- |
| Input | None. Runs against the local machine. Requires administrative privileges. |
| Output | Self-contained HTML report with pass/fail/warning status for each hardening check, saved to the user’s Desktop. |
| Categories | Mirrors the checklist structure: Application Hardening, ASR Rules, Credential Protection, Local Account Security, Network Hardening, Logging & Auditing, BitLocker, Update Governance, AI Controls, Legacy Components. |
| Scoring | Each check returns Pass (compliant), Fail (non-compliant), or Warning (partially compliant or unable to verify). Summary score shown as percentage. |

What the script checks (sample of key validations):
- Reads Get-MpPreference to verify all recommended ASR rules are present and set to the correct action level
- Queries the registry for Credential Guard, LSA Protection, and WDigest status
- Enumerates all network adapters and verifies NetBIOS is disabled on each one
- Checks auditpol /get /category:* output against the recommended audit policy matrix
- Verifies BitLocker encryption status and encryption method via manage-bde -status
- Checks for the presence of legacy components (SMBv1, PowerShell v2, .NET 3.5, WMIC)
- Validates Windows Firewall is enabled on all profiles with inbound default set to Block
- Reads Recall and Copilot policy keys to confirm AI features are governed
- Verifies command-line process creation logging is enabled
- Checks Sysmon installation status and configuration currency
The script is designed to be idempotent — it reads and reports, never modifies. Run it before hardening to establish a baseline, run it after to verify your changes, run it monthly to catch drift.

| Pester-Based Validation<br>For a more rigorous, test-framework approach, see OUT-16: Pester-Powered Validation Suite, which wraps these checks in Pester tests with Describe/It/Should blocks for integration into CI/CD pipelines or scheduled validation runs. The Pester approach is better for ongoing compliance; the standalone script is better for one-time assessments and quick checks. |
| --- |

[PLACEHOLDER: Link to GitHub repo with audit script from SK-23]
# V. The Solo Admin’s Reality Check
Let me be honest about what you’re signing up for.
Some of this will break things. The ASR rule for blocking obfuscated scripts will flag legitimate PowerShell. Credential Guard will prevent some older VPN clients from working. Disabling .NET 3.5 will break that one legacy app from 2014 that someone still depends on. Enforcing IPPS for printers will make your 10-year-old network laser jet invisible. This is the nature of hardening — you are trading convenience for security, and the exchange rate is not always favorable.
You will hit hardware walls. Credential Guard needs virtualization extensions and TPM 2.0. Secure Boot needs UEFI. BitLocker with TPM+PIN needs a keyboard at boot time, which means it doesn’t work for headless servers. Copilot and Recall policies exist on all 25H2 machines, but the features themselves only run on Copilot+ PCs with NPU hardware. Know what your hardware supports before you configure what it can’t run.
The difference between “hardened” and “unusable” is testing. Every single setting in this playbook should be tested on a VM or a non-production machine first. Stand up a Windows 11 25H2 VM, apply the settings, use the machine for a week doing real work, and note what breaks. Then decide which breaks are acceptable. I keep a dedicated Hyper-V VM for this purpose — it costs nothing and has saved me from deploying breaking changes to my production machine more times than I can count.
When to accept risk: If a hardening setting prevents a critical business workflow and there is no viable workaround, document the risk, document the compensating control (if any), and move on. “We accept this risk because disabling .NET 3.5 breaks our timesheet application, and the compensating control is application-level whitelisting via AppLocker” is a legitimate security decision. “We didn’t harden it because it seemed hard” is not.
When to enforce without exception: WDigest disabled. Command-line logging enabled. NetBIOS and LLMNR disabled. SMBv1 removed. UAC enabled. These are non-negotiable. If something breaks because you disabled NetBIOS, that something was already broken — it was just broken in your favor, temporarily.
Hardening is not a project. It’s a posture. You apply it, you verify it, you maintain it. The audit script (Section IV) exists to make the “verify” and “maintain” parts sustainable for a team of one.
# VI. What Comes Next
This playbook is Part 1 of a four-part series called Windows as a Governed System. The operating premise is simple: a Windows machine is not a consumer product you configure once and forget. It is a governed system that requires continuous verification, forensic readiness, and documented configuration state.
The companion pieces:
- OUT-13: Registry as a Crime Scene — Forensic analysis of the Windows registry. How to read registry artifacts as evidence of configuration changes, persistence mechanisms, and user activity. Where attackers hide, and how to find them.
- OUT-16: Pester-Powered Validation Suite — Automated compliance testing using the Pester framework. Turns every recommendation in this playbook into a testable assertion. Run it nightly, fail fast, fix early.
- OUT-17: Task Scheduler Forensics — Auditing scheduled tasks as potential persistence vectors. How to enumerate, baseline, and monitor scheduled tasks on standalone machines. Includes detection rules for common attacker patterns.
All source material, working configurations, registry snapshots, and Pester test files are maintained in the author’s semantic kernel — a structured knowledge base that links each recommendation to its source, its implementation evidence, and its validation test. The playbook you’re reading is the human-readable output. The kernel is the machine-readable truth.
Harden your machines. Verify your work. Trust the evidence, not the defaults.

# Sources
- Microsoft Security Baselines Blog, “Windows 11, version 25H2 security baseline,” Rick Munck, September 30, 2025. Available via aka.ms/baselines.
- Australian Signals Directorate (ASD) / Australian Cyber Security Centre (ACSC), Hardening Microsoft Windows 11 Workstations, updated January 23, 2026. Available via cyber.gov.au.
- 4sysops, “Download and import Windows 11 25H2 security baseline,” October 21, 2025.
- 4sysops, “New Windows 11 25H2 Group Policy settings,” November 13, 2025.
- Microsoft Learn, “Attack surface reduction rules reference — Microsoft Defender for Endpoint.”
- Microsoft Learn, “Manage Recall for Windows clients.”
- Microsoft Security Compliance Toolkit, aka.ms/SCT.
# Configuration Reference
[PLACEHOLDER: Appendix — Full registry key and Group Policy object table. Export from the semantic kernel (SK-20) as a structured CSV or formatted table. Include columns: Setting Name, Registry Path, Recommended Value, GPO Path, Baseline Source, Priority Tier, Breaking Change Risk (Low/Medium/High).]

# About the Author
[AUTHOR BIO — Insert author name, role, contact information, and relevant credentials. Suggested format: “[Name] is a solo Windows sysadmin and security practitioner who has spent [X] years treating operating systems as governed infrastructure. They maintain the Windows as a Governed System series and the accompanying semantic kernel at [repository URL]. Find them at [contact/social].”]
— End of Document —
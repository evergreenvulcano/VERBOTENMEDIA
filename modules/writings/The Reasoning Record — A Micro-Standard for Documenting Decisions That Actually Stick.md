# The Reasoning Record
A Micro-Standard for Documenting Decisions That Actually Stick
By phoneDead  |  12 April 2026  |  12 min read  |  Lane 3: Analyst OS & Reasoning

Decision documentation doesn't need to be heavy to be durable. It needs to be findable.
You've been here before. You open a configuration file — maybe a firewall rule, maybe a Group Policy object, maybe a docker-compose.yml override — and you find a setting that makes no sense. It's specific. It's deliberate. Someone chose this. You check git blame. It was you, eleven months ago. You have no memory of why.
So you do what everyone does: you leave it alone. You're afraid to change it because past-you clearly had a reason, and present-you can't reconstruct it. The setting becomes haunted — a decision that has outlived its reasoning.
This is not a tooling problem. This is a memory problem. And if you've been following this series on building an analyst operating system — your personal analytical infrastructure — then you already know what undocumented decisions are: memory leaks. They consume cognitive resources every time you encounter them. They slow you down. They accumulate. And eventually, they make your own systems foreign to you.
This article introduces the Reasoning Record: a micro-standard for capturing why you decided something, not just what. It's the closing piece of the reasoning and analytical infrastructure lane, and it's designed to be the simplest useful thing that solves this problem.
## The Problem with Remembering
Let's be precise about what goes wrong. The decision itself usually gets recorded somewhere — in a commit, in a config file, in a ticket that gets closed. What doesn't get recorded is the reasoning: the context that made that decision make sense at the time.
Context is perishable. The vendor limitation you were working around gets fixed in the next release. The colleague whose workflow you were accommodating leaves the company. The security advisory that prompted the change gets superseded. Six months later, the decision remains but the world it was made in is gone.
This creates what I call the haunted configuration problem: systems full of choices nobody understands but everyone is afraid to touch. Every team has them. Every solo practitioner has them. They're the reason you spend Tuesday afternoon reading year-old Slack threads trying to reverse-engineer your own thinking.

| The Core Problem<br>Decisions are durable. Context is perishable. When context decays and the decision remains, you get a haunted configuration — a choice that outlives its reasoning and becomes untouchable. |
| --- |

The cost is real. Every haunted configuration is a tax on future velocity. You can't confidently refactor, upgrade, or simplify because you don't know what breaks. You can't onboard someone new because you can't explain why things are the way they are. You can't even trust your own past judgment because you can't evaluate it — the evidence is gone.
What you need is not a better memory. What you need is an external record of your reasoning that's so easy to write that you'll actually do it, and so easy to search that you'll actually find it.
## Why ADRs Don't Scale Down
The software architecture world solved this problem — sort of. Architecture Decision Records (ADRs) have been around since Michael Nygard proposed them in 2011. The format has since evolved into multiple templates: MADR (Markdown Architectural Decision Records), Tyree & Akerman's comprehensive template, the Alexandrian pattern-based approach, and others. Microsoft publishes guidance on using them in enterprise contexts. They're well-established and well-respected.
They also assume you're an architect on a team.
Here's the typical ADR workflow: you create a numbered Markdown file in a docs/adr/ directory. Each file has a title, a status field (proposed, accepted, deprecated, superseded), a context section, a decision section, a consequences section. MADR adds decision drivers, considered options with individual pros-and-cons analysis, and links to related decisions. The full MADR template runs to roughly 40 lines before you've written a word of actual content.
For a platform team making a decision about service mesh adoption, this is appropriate. The ceremony matches the stakes. But for a solo admin opening port 8443 because a vendor's testing tool needs it? For a freelance developer choosing between SQLite and PostgreSQL for a side project? For a one-person IT department setting a login banner via Group Policy? The ceremony-to-value ratio is catastrophically wrong.

| Factor | Traditional ADR | Reasoning Record |
| --- | --- | --- |
| File structure | One file per decision in a dedicated directory | All entries in a single REASONING.md |
| Time to write | 10–30 minutes | Under 90 seconds |
| Status workflow | Proposed → Accepted → Deprecated → Superseded | None. Append-only. |
| Stakeholder fields | Deciders list, reviewers, approval | None. You're the stakeholder. |
| Searchability | Requires browsing files or a tool | grep -A 6 "keyword" |
| Ideal team size | 5+ | 1–3 |

The fatal flaw isn't that ADRs are bad. They're excellent. The fatal flaw is that they require a level of discipline and overhead that kills adoption for individuals and tiny teams. You need something you'll actually use at 11 PM when you're changing a firewall rule during an incident, not something you'll "get to later" and never do.
## The Reasoning Record Spec
Here's the entire standard. It fits on an index card.
Format: A single Markdown file per project or system, named REASONING.md. Drop it in the root directory of whatever it documents. Each entry is one block:
## RR-[sequential number]: [Short title]
- **Date:** YYYY-MM-DD
- **Context:** One to three sentences. What situation triggered this decision?
- **Decision:** One sentence. What did you decide?
- **Alternatives considered:** Bullet list, one line each.
- **Confidence:** High / Medium / Low
- **Revisit trigger:** What would make you reconsider this?
That's it. No status field. No stakeholder matrix. No approval workflow. No separate file per entry. No tooling required beyond a text editor.
The entry should take less than 90 seconds to write. If it's taking longer, you're overwriting the context. One to three sentences. Past-you doesn't need an essay — past-you needs a breadcrumb.

| The 90-Second Rule<br>If a Reasoning Record entry takes more than 90 seconds to write, you're writing too much. The goal is a breadcrumb trail, not a treatise. One to three sentences of context. One sentence for the decision. Bullets for alternatives. A single word for confidence. One condition for revisiting. Done. |
| --- |

### Field-by-Field Rationale
Sequential number (RR-001): Makes entries referenceable from commits, comments, and other entries. "Supersedes RR-007" is unambiguous.
Date: ISO 8601. Not negotiable. You'll need to reconstruct timelines.
Context: The most important field. Not "what did you decide" but "what situation were you in." This is the perishable information — the thing that future-you won't remember. What was happening? What constraint were you under? What were you trying to accomplish?
Decision: One sentence. Forcefully concise. If you can't state it in one sentence, you might be making two decisions.
Alternatives considered: This field does two things. First, it proves you actually thought about options. Second, it saves future-you from re-evaluating paths you already rejected. Even "did nothing" is a valid alternative to list.
Confidence: High, Medium, or Low. Three levels. No five-point scales. This is the most important innovation in the format — more on this below.
Revisit trigger: A concrete condition under which this decision should be reconsidered. Not "someday" but "when X happens." This transforms vague unease into actionable criteria.
## Design Principles: Why It's Shaped This Way
Every constraint in the Reasoning Record is deliberate. Here's what each one buys you.
### Append-Only
Never edit old entries. If a decision changes, add a new entry that references the old one: "Supersedes RR-007." This gives you a decision history, not just a decision snapshot. You can trace how your thinking evolved. You can see that you changed the firewall rule three times in six months, which tells you something important about the stability of that decision — something you'd lose if you just updated the original entry.
### Plaintext
No database. No app. No SaaS product. No wiki that needs its own maintenance. A Markdown file in the same directory as the thing it documents. It lives with the project. It moves with the project. It's backed up with the project. It dies with the project. Zero dependencies, zero accounts, zero subscriptions.
### Grepable
The format is specifically designed so that grep -A 6 "firewall" REASONING.md returns a complete, useful entry. Every field is on its own line. Every entry starts with a level-2 heading. This isn't a coincidence — it's a design requirement. The Reasoning Record is findable because it's structured for the tools you already have.
$ grep -A 6 "firewall" REASONING.md

## RR-001: Allow inbound TCP 8443 through Windows Firewall
- **Date:** 2026-02-15
- **Context:** Vendor testing tool (AcmeScan v3) requires inbound 8443
  during the Q1 security assessment. Standard HTTPS port was blocked by
  the vendor's certificate pinning implementation.
- **Decision:** Added inbound allow rule for TCP 8443, scoped to vendor
  subnet 10.50.0.0/24.
- **Alternatives considered:**
  - Proxy through existing 443 (vendor app didn't support it)
  - VPN tunnel (too much setup for a 2-week engagement)
- **Confidence:** Low
- **Revisit trigger:** After testing phase ends (target: 2026-03-01).
### Confidence-Aware
The confidence field is the single most valuable part of the Reasoning Record. Most decision documentation treats all decisions as equally certain. They're not. Some decisions are well-researched, carefully considered, and unlikely to change. Others are gut calls made at 11 PM under time pressure. These are fundamentally different kinds of decisions, and they should be treated differently by future-you.
A High confidence entry says: "I thought about this carefully, and I'm standing by it unless the world changes." A Low confidence entry says: "This was my best guess given what I knew. Please scrutinize this." When you do your monthly review and scan for Low-confidence entries, you're doing targeted maintenance on the decisions most likely to be wrong. That's enormously more efficient than reviewing everything.
### Revisit Triggers
Vague intentions to reconsider things are worthless. "We should look at this again sometime" is a statement that has never, in the history of technology, led to anyone actually looking at anything again. The revisit trigger forces specificity:
- "If latency exceeds 200ms" — measurable
- "When Windows Server 2026 ships" — event-based
- "After testing phase ends (target: 2026-03-01)" — time-bound
- "If the flow breaks more than twice" — threshold-based
- "Never unless CIS benchmark changes" — explicitly permanent
Each of these is a condition you can actually evaluate. That's the difference between documentation that drives action and documentation that drives guilt.
## Examples: Four Reasoning Records
Here are four entries from a realistic REASONING.md file. Notice how each takes only a few lines but captures enough context to be useful months later.
## RR-001: Allow inbound TCP 8443 through Windows Firewall
- **Date:** 2026-02-15
- **Context:** Vendor testing tool (AcmeScan v3) requires inbound 8443
  during the Q1 security assessment. Standard HTTPS port was blocked by
  the vendor's certificate pinning implementation.
- **Decision:** Added inbound allow rule for TCP 8443, scoped to vendor
  subnet 10.50.0.0/24.
- **Alternatives considered:**
  - Proxy through existing 443 (vendor app didn't support it)
  - VPN tunnel (too much setup for a 2-week engagement)
- **Confidence:** Low
- **Revisit trigger:** After testing phase ends (target: 2026-03-01).


## RR-002: Use Power Automate instead of Python for invoice processing
- **Date:** 2026-03-08
- **Context:** Finance team needs invoices extracted from shared mailbox,
  parsed, and logged to SharePoint. I could build this in Python, but the
  finance lead needs to modify the flow when vendor formats change.
  Non-technical handoff is a hard requirement.
- **Decision:** Build in Power Automate with AI Builder for parsing.
- **Alternatives considered:**
  - Python script with scheduled task (faster to build, impossible to hand off)
  - Logic Apps (overkill for single-mailbox scope, higher cost)
  - Manual process (current state, 4 hours/week of someone's time)
- **Confidence:** Medium
- **Revisit trigger:** If the flow breaks more than twice in a quarter,
  or if the finance team hires someone technical.


## RR-003: Enable Credential Guard via Group Policy
- **Date:** 2026-03-22
- **Context:** CIS Microsoft Windows Server 2022 Benchmark v3.0.0
  recommends Credential Guard (Section 18.8.7). All domain controllers
  and member servers meet the hardware requirements (UEFI, Secure Boot,
  TPM 2.0). No legacy authentication dependencies identified.
- **Decision:** Enable via GPO: Computer Configuration > Administrative
  Templates > System > Device Guard > Turn On Virtualization Based
  Security > Credential Guard Configuration = Enabled with UEFI lock.
- **Alternatives considered:**
  - Enable without UEFI lock (easier to disable but weaker protection)
  - Skip entirely (fails CIS benchmark compliance)
- **Confidence:** High
- **Revisit trigger:** Never, unless CIS benchmark changes the
  recommendation or a hardware incompatibility surfaces.


## RR-004: Use REASONING.md instead of a wiki for decision documentation
- **Date:** 2026-04-01
- **Context:** Evaluated Confluence, Notion, and a self-hosted wiki for
  documenting system decisions. All require separate maintenance, logins,
  and don't live with the project. Wiki content tends to rot because it's
  out of sight. Markdown files in the project root get seen during every
  code review and directory listing.
- **Decision:** Use a single REASONING.md file per project/system,
  following the Reasoning Record micro-standard.
- **Alternatives considered:**
  - Confluence space (team already barely uses it)
  - Notion database (adds a SaaS dependency for documentation)
  - Git commit messages only (not searchable by topic)
  - ADRs with MADR template (too much ceremony for a 2-person team)
- **Confidence:** High
- **Revisit trigger:** If team grows beyond 3 people, or if we adopt a
  documentation platform for other reasons.

| Notice the Pattern<br>RR-001 has Low confidence and a near-term revisit trigger — this is a temporary decision that should have been unwound. If the entry exists, you'll catch it. If it doesn't, that port stays open forever. RR-003 has High confidence and an almost-never revisit trigger — it's been carefully researched and should be treated as settled. The confidence field makes this distinction visible and searchable. |
| --- |

## Integration Patterns
The Reasoning Record is designed to fit into workflows you already have. It doesn't ask you to adopt a new tool or change your process. It asks you to add one file.
### In a Project Repository
Drop REASONING.md in the root of any repo, right next to README.md. It shows up in every directory listing. It's visible during code review. Reference RR numbers in commit messages:
git commit -m "Open port 8443 for vendor testing (see RR-001)"
Now the commit links to the reasoning. The reasoning links to the context. The context explains why the commit exists. Chain of custody for decisions.
### Per Machine or System
For sysadmin decisions that aren't tied to a codebase, keep a single REASONING.md per machine, system, or environment. Store it wherever you keep your other system documentation — a shared drive, a documentation repo, a folder on the machine itself. The key is proximity: the reasoning should live near the thing it explains.
### Paired with Pester Tests
If you write infrastructure tests (Pester, InSpec, Serverspec), each test exists because of a decision. Reference the Reasoning Record entry in the test:
Describe "Credential Guard Configuration (RR-003)" {
    It "Should have Credential Guard enabled with UEFI lock" {
        $cg = Get-CimInstance -ClassName Win32_DeviceGuard `
              -Namespace root\Microsoft\Windows\DeviceGuard
        $cg.SecurityServicesRunning | Should -Contain 1
    }
}
Now the test doesn't just verify a state — it points to the reason that state should exist. When someone asks "why do we test for this?", the answer is in REASONING.md, entry RR-003.
### Monthly Review
Once a month, spend 15 minutes on your Reasoning Record. The process is simple:
- Search for Low-confidence entries: grep -B 4 "Confidence.*Low" REASONING.md
- Check each one: has the revisit trigger fired? Has the context changed? Do you know more now?
- Search for time-based revisit triggers that have passed: look for dates earlier than today.
- For any decision that needs updating, add a new entry that supersedes the old one.
This takes 15 minutes. It saves hours of archaeology later. It's the difference between maintaining your decisions and being haunted by them.
## Downloadable Template
Copy this into a file called REASONING.md in your project root and start writing. Delete the placeholder entry.
# Reasoning Record — [Project/System Name]

Append-only decision log. Never edit old entries — add new ones
that reference previous entries when decisions change.
See: The Reasoning Record Micro-Standard.

---

## RR-001: [Short descriptive title]
- **Date:** YYYY-MM-DD
- **Context:** [What situation triggered this decision? 1-3 sentences.]
- **Decision:** [What did you decide? One sentence.]
- **Alternatives considered:**
  - [Alternative 1]
  - [Alternative 2]
- **Confidence:** [High / Medium / Low]
- **Revisit trigger:** [What concrete condition would make you
  reconsider? e.g., "if latency exceeds 200ms", "when contract
  expires", "never — this is permanent"]

---

## RR-002: [Next decision]
- **Date:** YYYY-MM-DD
- **Context:**
- **Decision:**
- **Alternatives considered:**
  -
- **Confidence:**
- **Revisit trigger:**

| Quick Reference: Grep Commands for Your Reasoning Record<br>grep -A 6 "keyword" REASONING.md — Find entries about a topic<br> grep -B 4 "Confidence.*Low" REASONING.md — Find uncertain decisions<br> grep "Revisit trigger" REASONING.md — List all revisit conditions<br> grep -c "^## RR-" REASONING.md — Count total entries<br> grep "Supersedes" REASONING.md — Find changed decisions |
| --- |

## The Reasoning Record as Self-Knowledge
I want to end on something that goes beyond tooling.
Every Reasoning Record entry forces you to answer three questions: What do I actually think? How sure am I? What would change my mind? These are, in any domain, the three hardest questions you can ask yourself. Most people skip all three most of the time. They decide and move on. They don't articulate the decision. They don't assess their own certainty. They definitely don't pre-commit to conditions for changing course.
The Reasoning Record makes these questions unavoidable. Not through discipline or willpower — through format. The fields are right there. You can't submit an entry without filling them in. And filling them in takes less than 90 seconds, so the activation energy is nearly zero.
This is why I think of it as more than documentation. It's a practice of epistemic honesty. When you write "Confidence: Low," you're admitting uncertainty to yourself — in writing. When you write "Revisit trigger: if the team grows beyond 3," you're acknowledging that your current decision is context-dependent and might not survive changed circumstances. These are acts of intellectual humility that most documentation formats don't ask for and most people don't volunteer.
Over months, your REASONING.md file becomes something unexpected: a record of how you think. Not just what you decided, but how you make decisions. You start to see patterns. You notice that your Low-confidence entries cluster around certain topics — maybe networking, maybe compliance, maybe anything involving a vendor. That's useful self-knowledge. It tells you where to invest in learning, where to ask for help, where to be more careful.

| The Reasoning Record is the smallest possible container for the most important thing about any decision: the reason it was made. |
| --- |

If you've followed this entire lane — from analytical frameworks to reasoning infrastructure — the Reasoning Record is where it all comes to rest. Frameworks help you think. Infrastructure helps you execute. But the Reasoning Record helps you remember why you thought what you thought. Without that, the frameworks and infrastructure serve a version of you that no longer exists, solving problems you no longer remember having.
Start small. One REASONING.md file. One project. The next decision you make that future-you might not understand — write it down. Ninety seconds. Seven fields. The return on that investment is measured in hours you'll never have to spend reverse-engineering your own past.
Your decisions deserve to outlive their reasoning. The Reasoning Record makes sure they don't have to.
Published by Verboten Media
 12 April 2026
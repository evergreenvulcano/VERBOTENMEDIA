# Risk Scan

Scan run for:

`password`, `secret`, `token`, `private`, `personnummer`, `Not For Distribution`, `internal use`, `confidential`

## Result

No obvious live credential was found. No exposed `.env` file was found.

## Notable Findings

| Path | Term(s) | Assessment | Proposed action |
| --- | --- | --- | --- |
| `apps/research-ops/README.md` | `password`, `token`, `Private` | Documents required environment variable names (`OPS_PASSWORD`, `OPS_API_TOKEN`, `GITHUB_TOKEN`) but does not expose values. | Keep; acceptable documentation. |
| `apps/research-ops/proxy.ts`, `apps/research-ops/lib/auth.ts`, `apps/research-ops/lib/github-content.ts` | `password`, `token` | Reads secrets from environment variables only. No literal credential found. | Keep; no action now. |
| `modules/_gpt/source-anchor/forlagsdeckaren-source-constellation/heading-extraction-and-deployment/stride_understands.txt` | `token`, uploaded-file transcript material | Large raw tool/conversation export with uploaded file metadata and redacted blocked-file reference. Not a credential, but public-readiness/provenance should be reviewed. | Review or quarantine in next pass if repo is being hardened for public release. |
| `modules/_gpt/source-anchor/copilot-runs-0501-0506/16_2026-05-02_0541_merge-hackerstory-session-9_e52474add0.md` | `not for distribution` | Source text describes an internal/preparatory literary project. No credential. | Review public suitability before broad publication. |
| `inbox/writings/translation-guide-raw2.md` | `personnummer` | Conceptual/legal guidance mention, not an actual personal number. | Keep; no action now. |
| `modules/FORLAGSDECKAREN/SATELLITKAPITEL/det-tjugofemte-barnet.md` | `personnummer` | Literary/general social category usage, not an actual personal number. | Keep; no action now. |
| `static-pages/experimental-sandbox/*`, `modules/writings/*`, `runtext.html`, assorted `_gpt/runs/*` | `password`, `private`, `secret`, `token` | Mostly literary, essayistic, security-writing, or method-context usage. | Keep; targeted editorial review later if public risk threshold tightens. |

## Stop Condition

No stop condition triggered. I did not find an obvious secret credential that required halting the rebuild.

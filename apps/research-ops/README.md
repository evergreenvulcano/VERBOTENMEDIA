# research-ops

Private sidecar app for VERBOTEN MEDIA operations.

## Purpose

- Authenticated read-only JSON API and MCP endpoint over allowed markdown scopes
- Protected intake form and API that commit normalized markdown to `inbox/writings/` through the GitHub API

## Environment variables

Required:

- `OPS_USERNAME` Basic auth username for UI routes
- `OPS_PASSWORD` Basic auth password for UI routes
- `OPS_API_TOKEN` Bearer token for machine endpoints (`/api/*`)
- `GITHUB_TOKEN` Fine-grained GitHub token with contents read/write
- `GITHUB_OWNER` Repository owner
- `GITHUB_REPO` Repository name

Optional:

- `GITHUB_BRANCH` Target branch for reads/writes (defaults to repo default branch)

## Endpoints

- `GET /health`
- `GET /api/documents?scope=&prefix=&limit=`
- `GET /api/documents/[...path]`
- `GET /api/search?q=&scope=&limit=`
- `POST /api/intake`
- `POST /api/mcp`
- `GET /intake` (Basic auth protected UI)

## Local run

```bash
npm install
npm run dev
```

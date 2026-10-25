# Nginx IP Check

A minimal Express app for inspecting client IP and proxy headers.

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000/debug-ip.

## Endpoints

- `/` — test app home page
- `/debug-ip` — inspect IP-related headers
- `/health` — health check

Use only temporarily on a protected test deployment. Forwarded headers are not inherently trustworthy.

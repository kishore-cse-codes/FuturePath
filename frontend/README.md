# FuturePath

A React + Vite student career discovery site with an AI Counsellor powered by Groq.

## Run locally

1. Create a Groq API key at [Groq Console](https://console.groq.com/keys).
2. Copy `backend/.env.example` to `backend/.env` and put your key only in `GROQ_API_KEY` in that private file. The `.env` file is ignored by Git.
3. In one terminal, run the backend:

```powershell
cd C:/Users/madhu/Documents/Codex/FuturePath/backend
npm install
npm run dev
```

4. In another terminal, run the website:

```powershell
cd C:/Users/madhu/Documents/Codex/FuturePath/frontend
npm install
npm run dev
```

Open the local URL printed by Vite. Backend status is available at `http://127.0.0.1:8787/api/ai/status`.

## Deployment

Deploy `backend` as a Node web service and `frontend` as a static Vite site. Set backend environment variables in the hosting dashboard:

- `GROQ_API_KEY` – your rotated Groq key
- `GROQ_MODEL` – optional; defaults to `openai/gpt-oss-20b`
- `ALLOWED_ORIGINS` – exact public frontend origin, including `https://` (no trailing slash)
- `PORT` – use the platform-provided port when required

Set the frontend build variable `VITE_AI_API_BASE_URL` to the deployed backend's public base URL, without a trailing slash. The browser sends chat requests only to the FuturePath backend. The key stays on the backend and must never be added to a `VITE_*` variable. Configure the backend host's request/streaming timeout to allow up to `AI_TIMEOUT_MS` (default 120 seconds).

## Environment variables

Frontend (`frontend/.env`, optional): `VITE_AI_API_BASE_URL` (default `http://127.0.0.1:8787`), `VITE_AI_TIMEOUT_MS` (default `130000`), and `VITE_AI_CONNECTION_TIMEOUT_MS` (default `8000`).

Backend (`backend/.env` locally or hosting environment variables in production): `GROQ_API_KEY` (secret), `GROQ_MODEL` (default `openai/gpt-oss-20b`), `ALLOWED_ORIGINS` (comma-separated allowed browser origins), and `AI_TIMEOUT_MS` (default `120000`).

## Chat history and guidance

Conversations stay in the browser tab and are not written to a database. The AI can be wrong; verify exam dates, fees, eligibility, scholarships, and admission rules on official websites. The counsellor is not a human adviser and does not guarantee admission, results, jobs, or salaries.

## Scripts

Frontend: `npm run dev`, `npm run build`, `npm run lint`, `npm run preview`.
Backend: `npm run dev`, `npm start`.

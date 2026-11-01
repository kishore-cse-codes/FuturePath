# FuturePath

FuturePath is a React/Vite website with a separate Express backend for the AI Counsellor. The backend calls Groq and keeps `GROQ_API_KEY` private; the browser only calls the FuturePath backend.

## Requirements

- Node.js 20.12 or newer
- A Groq API key configured only in `backend/.env`

## Run locally

Open two PowerShell terminals in the project folder.

Terminal 1 — backend:

```powershell
cd backend
npm install
if (!(Test-Path .env)) { Copy-Item .env.example .env }
```

Edit `backend/.env` and set `GROQ_API_KEY` to your key, then run:

```powershell
npm run dev
```

Terminal 2 — frontend:

```powershell
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). The frontend defaults to the backend at `http://127.0.0.1:8787`. To change it locally, set `VITE_AI_API_BASE_URL` in `frontend/.env.local` and restart Vite. Never put a Groq key in a frontend file or any `VITE_*` variable.

Useful backend checks:

- `GET http://127.0.0.1:8787/api/health`
- `GET http://127.0.0.1:8787/api/ai/status`
- The chat API is `POST http://127.0.0.1:8787/api/chat`; opening it in a browser as a page is not a chat test.

## Frontend/backend connection

`frontend/src/config/ai.js` reads `VITE_AI_API_BASE_URL`. `frontend/src/services/aiClient.js` uses that base URL to request `/api/ai/status` and send chat messages to `/api/chat`. `backend/server.js` exposes those routes and calls the Groq provider in `backend/providers/groq.js`. The Groq credential is read by the backend from `backend/.env` (or the hosting provider's backend environment variables); it is never sent to the frontend.

For deployment, deploy the frontend and backend separately. Set `VITE_AI_API_BASE_URL` to the deployed backend's HTTPS URL when building the frontend. Set `GROQ_API_KEY` in the backend host's secret/environment settings, and set backend `ALLOWED_ORIGINS` to the exact deployed frontend origin. A local `.env` file is not uploaded to hosting automatically.

## Keep out of Git

The root `.gitignore` excludes `.env` files, `node_modules`, generated `dist` output, logs, and local editor/OS files. Commit the `.env.example` templates, not `.env`. If an API key was ever committed or shared, revoke it at Groq and create a replacement; deleting the file in a later commit does not erase it from Git history.


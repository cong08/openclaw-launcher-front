# OpenClaw Download Landing Page

A static download page for Vercel deployment.

## Configure Download Links

Edit `script.js`:

```js
const DOWNLOAD_LINKS = {
  arm64: "https://your-link/OpenClaw-Launcher-darwin-arm64.zip",
  x64: "https://your-link/OpenClaw-Launcher-darwin-x64.zip",
};
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel.
3. Framework preset: **Other** (static).
4. Output directory: leave empty (root).

## Local Preview

You can run any static server:

```bash
cd openclaw-launcher-front
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

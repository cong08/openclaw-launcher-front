// Replace with your real release URLs before deploying.
const DOWNLOAD_LINKS = {
  arm64: "https://static2.gopluslabs.io/OpenClaw+Launcher-darwin-arm64.zip",
  x64: "https://static2.gopluslabs.io/OpenClaw+Launcher-darwin-x64.zip",
};

const el = {
  downloadArm64: document.getElementById("download-arm64"),
  downloadX64: document.getElementById("download-x64"),
};

function setLinks() {
  el.downloadArm64.href = DOWNLOAD_LINKS.arm64;
  el.downloadX64.href = DOWNLOAD_LINKS.x64;
}

setLinks();
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const env = { ...process.env };

// Next.js cannot atomically update its user config under this Windows profile.
// Keep only its local cache inside the repository on Windows; Linux uses defaults.
if (process.platform === "win32") {
  const localCache = path.join(process.cwd(), ".next-user-data");
  env.APPDATA = localCache;
  env.LOCALAPPDATA = localCache;
}

const nextBin = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const child = spawn(process.execPath, [nextBin, ...process.argv.slice(2)], {
  env,
  stdio: "inherit",
});

child.on("exit", (code) => process.exit(code ?? 1));

#!/usr/bin/env node
/**
 * Prevents `next build` from running while `next dev` is active for this project.
 * Concurrent dev + build corrupts the shared `.next` cache and triggers webpack
 * runtime errors in development.
 */
import { execSync } from "node:child_process";

const projectMarker = "commonsure_website";

function devServerRunning() {
  try {
    const lines = execSync('pgrep -af "next dev"', { encoding: "utf8" })
      .trim()
      .split("\n")
      .filter(Boolean)
      .filter(
        (line) =>
          line.includes(projectMarker) &&
          !line.includes("pgrep") &&
          !line.includes("ensure-dev-stopped")
      );

    return lines.length > 0;
  } catch {
    return false;
  }
}

if (devServerRunning()) {
  console.error(
    "\ncommonsure_website: `next dev` is still running.\n" +
      "Stop the dev server before `npm run build` to avoid corrupting `.next`.\n" +
      "Quick recovery: stop dev, run `rm -rf .next`, then `npm run dev` again.\n"
  );
  process.exit(1);
}

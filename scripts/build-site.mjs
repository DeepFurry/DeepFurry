import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

const copyTargets = [
    "index.html",
    "CNAME",
    "css",
    "fonts",
    "pages"
];

for (const target of copyTargets) {
    const source = path.join(rootDir, target);

    if (!existsSync(source)) {
        continue;
    }

    await cp(source, path.join(distDir, target), { recursive: true });
}

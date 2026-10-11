// Test konten situs statis terhadap output build (dist/index.html).
// Sumber acceptance criteria: docs/project-docs/foundation/prd.md
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(__dirname, "..", "dist", "index.html");
const html = existsSync(htmlPath) ? readFileSync(htmlPath, "utf8") : "";

test("build output index.html tersedia", () => {
  assert.ok(html.length > 0, "dist/index.html tidak ditemukan/kosong. Jalankan `npm run build` dulu.");
});

test("memuat nama pemilik", () => {
  assert.match(html, /Hanif Abdillah Kuswanto/);
});

test("memuat seluruh skill", () => {
  for (const skill of ["Angular", "TypeScript", "Responsive UI", "Vue", "React"]) {
    assert.ok(html.includes(skill), `skill "${skill}" tidak ditemukan di output`);
  }
});

test("memuat link WhatsApp", () => {
  assert.ok(html.includes("wa.me/6281392186005"), "link wa.me tidak ditemukan");
});

test("memuat link email", () => {
  assert.ok(html.includes("mailto:hanifabdillah668@gmail.com"), "link mailto tidak ditemukan");
});

test("memuat judul section layanan jasa", () => {
  assert.ok(html.includes("Layanan Jasa"), "section layanan tidak ditemukan");
});

test("memuat foto profil", () => {
  assert.ok(
    html.includes('alt="Foto profil Hanif Abdillah Kuswanto"'),
    "foto profil (img alt) tidak ditemukan di output",
  );
});

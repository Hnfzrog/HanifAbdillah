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
  assert.ok(html.includes("wa.me/6285181804925"), "link wa.me baru 6285181804925 tidak ditemukan");
});

test("memuat link email", () => {
  assert.ok(html.includes("mailto:hanifabdillah668@gmail.com"), "link mailto tidak ditemukan");
});

test("memuat judul section layanan jasa (Services)", () => {
  assert.ok(html.includes("Services"), "section services tidak ditemukan");
});

test("memuat foto profil", () => {
  assert.match(
    html,
    /alt="[^"]*Hanif Abdillah Kuswanto[^"]*"/i,
    "foto profil (img alt) tidak ditemukan di output",
  );
});

// Test SEO & Indexing (R13, R14, R15)
test("memuat tag title dengan nama dan keyword", () => {
  assert.match(html, /<title>[^<]*Hanif Abdillah Kuswanto[^<]*<\/title>/i);
});

test("memuat meta description yang relevan", () => {
  assert.match(html, /<meta\s+name="description"\s+content="[^"]+Hanif Abdillah Kuswanto[^"]+"/i);
});

test("memuat meta keywords dengan target lokal & teknis", () => {
  assert.match(html, /<meta\s+name="keywords"\s+content="[^"]*Yogyakarta[^"]*Magelang[^"]*"/i);
});

test("memuat canonical link", () => {
  assert.match(html, /<link\s+rel="canonical"\s+href="https:\/\/hanifabdillah\.vercel\.app\/?"/i);
});

test("memuat Open Graph dan Twitter Card tags", () => {
  assert.ok(html.includes('property="og:title"'), "og:title tidak ditemukan");
  assert.ok(html.includes('property="og:description"'), "og:description tidak ditemukan");
  assert.ok(html.includes('property="og:url"'), "og:url tidak ditemukan");
  assert.ok(html.includes('name="twitter:card"'), "twitter:card tidak ditemukan");
});

test("memuat JSON-LD structured data (Person & ProfessionalService)", () => {
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(jsonLdMatch, "script JSON-LD tidak ditemukan");
  const parsed = JSON.parse(jsonLdMatch[1]);
  const graph = parsed["@graph"] || [parsed];
  const person = graph.find((item) => item["@type"] === "Person");
  const service = graph.find((item) => item["@type"] === "ProfessionalService");
  assert.ok(person, "Schema Person tidak ditemukan di JSON-LD");
  assert.equal(person.name, "Hanif Abdillah Kuswanto");
  assert.ok(service, "Schema ProfessionalService tidak ditemukan di JSON-LD");
});

test("file dist/robots.txt tersedia dan valid", () => {
  const robotsPath = join(__dirname, "..", "dist", "robots.txt");
  assert.ok(existsSync(robotsPath), "dist/robots.txt tidak ditemukan");
  const content = readFileSync(robotsPath, "utf8");
  assert.match(content, /User-agent:\s*\*/i);
  assert.match(content, /Allow:\s*\//i);
  assert.match(content, /Sitemap:\s*https:\/\/hanifabdillah\.vercel\.app\/sitemap\.xml/i);
});

test("file dist/sitemap.xml tersedia dan valid", () => {
  const sitemapPath = join(__dirname, "..", "dist", "sitemap.xml");
  assert.ok(existsSync(sitemapPath), "dist/sitemap.xml tidak ditemukan");
  const content = readFileSync(sitemapPath, "utf8");
  assert.match(content, /<loc>https:\/\/hanifabdillah\.vercel\.app\/?<\/loc>/i);
});

test("file verifikasi Google Search Console tersedia di dist", () => {
  const gscPath = join(__dirname, "..", "dist", "googlec15f67663becd91c.html");
  assert.ok(existsSync(gscPath), "dist/googlec15f67663becd91c.html tidak ditemukan");
  const content = readFileSync(gscPath, "utf8");
  assert.match(content, /google-site-verification:\s*googlec15f67663becd91c\.html/i);
});

// Test Pro Web Developer Overhaul (v2.0: R16, R17, R18, R19)
test("memuat section Proyek Pilihan / Featured Projects dan 5 proyek unggulan", () => {
  assert.ok(html.includes("Featured Projects") || html.includes("Proyek"), "section proyek tidak ditemukan");
  assert.ok(html.includes("App-Math"), "proyek App-Math tidak ditemukan");
  assert.ok(html.includes("Telenurse"), "proyek Telenurse tidak ditemukan");
  assert.ok(html.includes("UD-Sregep"), "proyek UD-Sregep tidak ditemukan");
  assert.ok(html.includes("Lumpiamoo"), "proyek Lumpiamoo tidak ditemukan");
  assert.ok(html.includes("DailyKit"), "proyek DailyKit tidak ditemukan");
});

test("memuat tautan profil GitHub resmi", () => {
  assert.ok(html.includes("github.com/Hnfzrog"), "link GitHub Hnfzrog tidak ditemukan");
});

test("memuat badge availability status di Hero", () => {
  assert.match(html, /Tersedia untuk Freelance|Available for/i);
});

test("memuat pengelompokan skill profesional", () => {
  assert.ok(html.includes("Core Frameworks") || html.includes("Frameworks"), "kategori framework tidak ditemukan");
  assert.ok(html.includes("Languages"), "kategori languages tidak ditemukan");
});

test("menggunakan bahasa inggris sebagai bahasa utama", () => {
  assert.match(html, /<html\s+lang="en">/i);
});

test("section pendidikan tidak lagi dimuat di halaman utama", () => {
  assert.ok(!html.includes("Pendidikan"), "teks Pendidikan masih ada di halaman");
  assert.ok(!html.includes("SMK N 2 Magelang"), "sekolah SMK N 2 Magelang masih ada di halaman");
});

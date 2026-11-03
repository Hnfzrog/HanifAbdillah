# PRD — Website Portofolio & Jasa Pembuatan Website

## Description
Website pribadi single-page untuk Hanif Abdillah Kuswanto (Frontend Developer) yang berfungsi ganda: memperkenalkan profil & skill, sekaligus etalase jasa pembuatan website untuk menarik klien. **Tanpa** section portofolio proyek.

## Important
- Sumber konten otoritatif: `resume_hanifabdillah.pdf` (di root repo).
- Tidak ada backend, database, form, autentikasi, payment, atau blog.
- Bahasa konten: **English (Bahasa Inggris)**.
- Tipografi: **Code-like font** (JetBrains Mono / Fira Code / modern developer monospace).
- Kontak WhatsApp: **+62 851-8180-4925** (`wa.me/6285181804925`).

## Table of Contents
1. Scope
2. Goals
3. Non Goals
4. Personas
5. Requirements
6. Konten & Data
7. Acceptance Criteria

## Scope
In scope: Hero dengan availability status & metrics, About, Featured Projects (dari GitHub), Categorized Skills, Experience (BSI UII), Services dengan value deliverables, Contact (WhatsApp, Email, GitHub).
Out of scope: section pendidikan (dihapus sesuai keputusan user), form order klien, backend runtime, database, CMS.

## Goals
- Menampilkan profil & kapabilitas teknis layaknya web developer profesional level modern.
- Menampilkan etalase proyek nyata (featured projects) yang relevan dan teruji dari GitHub.
- Menampilkan layanan jasa + CTA kontak langsung (WhatsApp, email, GitHub).
- Ringan, cepat, SEO-friendly, mobile-first, dengan estetika glassmorphism modern.
- Konten terpusat & mudah di-update tanpa menyentuh struktur komponen.

## Non Goals
- Form order / input klien.
- Backend, database, CMS, autentikasi.
- Payment / billing.
- Blog / artikel dinamis.
- Multi-bahasa.

## Personas
1. **Calon klien** — mencari jasa pembuatan website; butuh melihat layanan & cara kontak yang mudah.
2. **Recruiter / HR** — menilai skill & pengalaman; butuh tentang, skill, pengalaman, pendidikan.

## Requirements
- R1: Hero menampilkan nama, role, tagline, dan CTA.
- R2: Section "Tentang Saya" (teks dari resume).
- R3: Section "Skill" — Angular, TypeScript, Responsive UI, Vue, React.
- R4: Section "Experience" — 2 item (Frontend Developer + Internship).
- R5: Tipografi Code-like font (JetBrains Mono / monospace developer stack).
- R6: Section "Services" — 4 item solusi web.
- R7: Section "Contact" — WhatsApp (+62 851-8180-4925), email, dan GitHub direct links.
- R8: Navbar floating pill glass dengan navigasi anchor.
- R9: Desain glassmorphism ala iOS/macOS modern (backdrop blur, translusen, sheen, sudut membulat).
- R10: Tema light default + toggle dark.
- R11: Responsive mobile-first, tanpa scroll horizontal.
- R12: Foto profil bulat di Hero (sumber `image.png`), dioptimasi via `astro:assets`, responsif (clamp + srcset).
- R13: SEO Meta Tags & Open Graph — `<title>` mengandung nama dan keyword ("Frontend Developer", "Yogyakarta", "Magelang"), meta description deskriptif, meta keywords lokal & teknis, canonical URL baku, serta Open Graph & Twitter Cards.
- R14: Structured Data (JSON-LD) — Schema `Person` (identitas Hanif, afiliasi BSI UII, skill, profil GitHub) dan `ProfessionalService` (web engineering services).
- R15: Search Engine Directives — `robots.txt` mengizinkan perayapan dan merujuk ke `sitemap.xml`, serta `sitemap.xml` statis.
- R16: Section "Featured Projects" — Menampilkan 5 proyek pilihan dari GitHub (`App-Math`, `Telenurse`, `UD-Sregep`, `Lumpiamoo Web`, `DailyKit`) lengkap dengan badge teknologi, fitur utama, dan tautan repositori/demo.
- R17: Hero Section Pro Upgrade — Status ketersediaan (*availability badge* `Available for Freelance & Collaboration`), metrik ringkas pengalaman & kapabilitas, serta quick action buttons.
- R18: Categorized Skills Matrix — Skill dikelompokkan ke dalam kategori profesional: Core Frameworks, Languages, Styling & Design, serta Tools & Workflow.
- R19: Enhanced Services — Setiap kartu layanan jasa dilengkapi poin-poin *deliverables*.
- R20: Seluruh konten dan antarmuka disajikan dalam **Bahasa Inggris (English)**.

## Konten & Data
| Field | Nilai |
|---|---|
| Nama | Hanif Abdillah Kuswanto |
| Role | Frontend Developer |
| Skill | Angular, TypeScript, Responsive UI, Vue, React, Next.js |
| Pengalaman 1 | Frontend Developer — Badan Sistem Informasi UII (Sep 2023 – present) |
| Pengalaman 2 | Internship — Badan Sistem Informasi UII (Jul 2022 – Dec 2022) |
| WhatsApp | +62-85181804925 → `wa.me/6285181804925` |
| Email | hanifabdillah668@gmail.com |
| GitHub | https://github.com/Hnfzrog |

## Acceptance Criteria
- `npm run build` sukses tanpa error (exit 0).
- Output `dist/index.html` memuat: nama, seluruh skill terkelompok, `wa.me/6285181804925`, `mailto:hanifabdillah668@gmail.com`, dan tautan GitHub (`github.com/Hnfzrog`).
- Tidak ada dependensi backend/runtime pada output (murni HTML/CSS/JS statis).
- Hero memuat foto profil (`<img>` dengan alt "Hanif Abdillah Kuswanto Profile Photo"), status availability, dan metrik pengalaman.
- Desain memenuhi prinsip glassmorphism modern dengan font bernuansa code/monospace.
- Output `dist/index.html` memuat canonical URL, meta description, meta keywords, Open Graph tags, dan JSON-LD schema (`Person` dan `ProfessionalService`).
- Output build menyediakan `dist/robots.txt` dan `dist/sitemap.xml`.
- Output `dist/index.html` memuat section Featured Projects dengan kartu untuk `App-Math`, `Telenurse`, `UD-Sregep`, `Lumpiamoo`, dan `DailyKit`.
- Section pendidikan telah dihapus dari output halaman utama.

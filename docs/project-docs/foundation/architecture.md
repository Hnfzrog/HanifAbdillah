# Architecture — Website Portofolio & Jasa Pembuatan Website

## Description
Static site (SSG) berbasis **Astro** + **Tailwind CSS v4**, dengan design system glassmorphism ala iOS. Output berupa HTML/CSS/JS statis yang dapat di-deploy ke host statis mana pun.

## Important
- Tidak ada backend/API/database — situs 100% statis.
- Konten terpusat di `src/data/site.ts`; komponen tidak menyimpan teks.
- Efek kaca (`backdrop-filter`) butuh prefix `-webkit-` untuk Safari dan fallback solid.

## Table of Contents
1. Scope
2. Goals
3. Non Goals
4. Stack
5. Struktur Proyek
6. Design System
7. Build & Deploy

## Scope
Single-page app dengan section anchor. Arsitektur komponen `.astro` + data terpusat.

## Goals
- Output statis yang ringan dan cepat.
- Pemisahan bersih: data (konten) vs presentasi (komponen) vs styling (design system).

## Non Goals
- Tidak ada SSR/hydration berat; interaktivitas minim (navigasi + toggle tema).
- Tidak ada CMS/backend/integrasi pihak ketiga.

## Stack
| Aspek | Pilihan | Catatan |
|---|---|---|
| Framework | Astro (static) | Output HTML/CSS/JS statis |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) | + custom design system glass |
| TypeScript | Ya (frontmatter & data) | `tsconfig.json` |
| Interaktivitas | Vanilla JS / `<script>` Astro | Toggle tema + nav |
| Form | Tidak ada | CTA direct link |
| Deploy | Vercel / Netlify / CF Pages | `dist/` sebagai output |

## Struktur Proyek
```
my-porto/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── src/
│   ├── styles/global.css      # design system (token + kelas glass)
│   ├── data/site.ts           # konten terpusat
│   ├── layouts/Layout.astro   # shell html + head + background mesh
│   ├── pages/index.astro      # halaman utama (rakit semua section)
│   └── components/
│       ├── Navbar.astro
│       ├── Hero.astro
│       ├── About.astro
│       ├── Skills.astro
│       ├── Experience.astro
│       ├── Education.astro
│       ├── Services.astro
│       ├── Contact.astro
│       └── Footer.astro
└── tests/site.test.mjs        # test konten terhadap dist/index.html
```

## Design System
Token warna & efek didefinisikan sebagai CSS custom properties di `global.css` (lihat `development/ui-ux.md` untuk detail). Kelas kunci: `.glass`, `.blob`, `.navbar`, `.btn`.

## Build & Deploy
- Build: `astro build` → `dist/`.
- Deploy: platform statis, auto-build dari git push (lihat `operations/ci-cd.md`).

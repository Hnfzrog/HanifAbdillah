# Getting Started

## Description
Cara setup, menjalankan, membangun, dan menguji proyek.

## Important
- Butuh Node.js ≥ 20 dan npm.
- Tidak ada environment variable atau secret yang perlu diset.

## Table of Contents
1. Prasyarat
2. Instalasi
3. Script

## Scope
Setup lokal dari clone kosong hingga build produksi.

## Goals
Agar developer bisa menjalankan proyek dalam < 2 menit.

## Non Goals
Bukan panduan deploy (lihat `operations/ci-cd.md`).

## Prasyarat
- Node.js 20+ (teruji pada v20.20.2)
- npm 10+

## Instalasi
```bash
npm install
```

## Script
| Perintah | Fungsi |
|---|---|
| `npm run dev` | Dev server (http://localhost:4321) |
| `npm run build` | Build statis ke `dist/` |
| `npm run preview` | Preview hasil build |
| `npm test` | Jalankan test konten (wajib build dulu) |

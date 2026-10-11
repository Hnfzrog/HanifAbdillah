# Testing

## Description
Strategi verifikasi untuk situs statis ini.

## Important
- Verifikasi utama: build statis + test konten (Node built-in test) terhadap `dist/index.html`.
- Tidak ada unit test runtime (tidak ada logika backend yang diuji).

## Table of Contents
1. Perintah
2. Quality Gates

## Scope
Verifikasi yang memadai untuk situs statis single-page.

## Goals
Memastikan build hijau dan acceptance criteria PRD terpenuhi.

## Non Goals
Bukan unit test komponen (belum ada kerangka UI test).

## Perintah
| Perintah | Fungsi |
|---|---|
| `npm run build` | Build statis (wajib exit 0) |
| `npm test` | Assert konten pada `dist/index.html` |

## Quality Gates
- `astro build` exit 0 tanpa error.
- Test memuat asersi berikut terhadap output HTML:
  - Nama "Hanif Abdillah Kuswanto" hadir.
  - Skill: "Angular", "TypeScript", "Vue", "React" hadir.
  - Link WA: `wa.me/6281392186005` hadir.
  - Link email: `mailto:hanifabdillah668@gmail.com` hadir.
  - Foto profil: `<img>` dengan alt "Foto profil Hanif Abdillah Kuswanto" hadir.
- Output murni statis (tidak ada tag/atribut yang membutuhkan runtime backend).

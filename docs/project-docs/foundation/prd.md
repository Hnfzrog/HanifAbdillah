# PRD — Website Portofolio & Jasa Pembuatan Website

## Description
Website pribadi single-page untuk Hanif Abdillah Kuswanto (Frontend Developer) yang berfungsi ganda: memperkenalkan profil & skill, sekaligus etalase jasa pembuatan website untuk menarik klien. **Tanpa** section portofolio proyek.

## Important
- Sumber konten otoritatif: `resume_hanifabdillah.pdf` (di root repo).
- Tidak ada backend, database, form, autentikasi, payment, atau blog.
- Bahasa konten: **Indonesia**.

## Table of Contents
1. Scope
2. Goals
3. Non Goals
4. Personas
5. Requirements
6. Konten & Data
7. Acceptance Criteria

## Scope
In scope: Hero, Tentang Saya, Skill, Pengalaman, Pendidikan, Layanan Jasa, Kontak.
Out of scope: portofolio proyek, form, backend, CMS, multi-bahasa.

## Goals
- Menampilkan profil & skill secara menarik, cepat, dan responsif.
- Menampilkan layanan jasa + CTA kontak langsung (WhatsApp / email).
- Ringan, cepat, SEO-friendly, mobile-first.
- Konten terpusat & mudah di-update tanpa menyentuh struktur komponen.

## Non Goals
- Section portofolio/proyek (keputusan user: "tidak perlu ditampilin").
- Form order / input klien.
- Backend, database, CMS, autentikasi.
- Payment / billing.
- Blog / artikel.
- Multi-bahasa.

## Personas
1. **Calon klien** — mencari jasa pembuatan website; butuh melihat layanan & cara kontak yang mudah.
2. **Recruiter / HR** — menilai skill & pengalaman; butuh tentang, skill, pengalaman, pendidikan.

## Requirements
- R1: Hero menampilkan nama, role, tagline, dan CTA.
- R2: Section "Tentang Saya" (teks dari resume).
- R3: Section "Skill" — Angular, TypeScript, Responsive UI, Vue, React.
- R4: Section "Pengalaman" — 2 item (Frontend Developer + Internship).
- R5: Section "Pendidikan" — 2 item (Univ. Mercu Buana + SMK N 2 Magelang).
- R6: Section "Layanan Jasa" — 4 item.
- R7: Section "Kontak" — WhatsApp + email, direct link.
- R8: Navbar floating pill glass dengan navigasi anchor.
- R9: Desain glassmorphism ala iOS (backdrop blur, translusen, sheen, mesh gradient, sudut membulat).
- R10: Tema light default + toggle dark (opsional).
- R11: Responsive mobile-first, tanpa scroll horizontal.
- R12: Foto profil bulat di Hero (sumber `image.png`), dioptimasi via `astro:assets`, responsif (clamp + srcset).

## Konten & Data
| Field | Nilai |
|---|---|
| Nama | Hanif Abdillah Kuswanto |
| Role | Frontend Developer |
| Skill | Angular, TypeScript, Responsive UI, Vue, React |
| Pengalaman 1 | Frontend Developer — Badan Sistem Informasi UII (Sep 2023 – sekarang) |
| Pengalaman 2 | Internship — Badan Sistem Informasi UII (Jul 2022 – Des 2022) |
| Pendidikan 1 | Universitas Mercu Buana (2024 – sekarang), S1 Informatika |
| Pendidikan 2 | SMK N 2 Magelang (2020 – 2023), Rekayasa Perangkat Lunak |
| WhatsApp | +62-81392186005 → `wa.me/6281392186005` |
| Email | hanifabdillah668@gmail.com |

## Acceptance Criteria
- `npm run build` sukses tanpa error (exit 0).
- Output `dist/index.html` memuat: nama, seluruh skill, `wa.me/6281392186005`, dan `mailto:hanifabdillah668@gmail.com`.
- Tidak ada dependensi backend/runtime pada output (murni HTML/CSS/JS statis).
- Hero memuat foto profil (`<img>` dengan alt "Foto profil Hanif Abdillah Kuswanto").
- Desain memenuhi prinsip glassmorphism (lihat `development/ui-ux.md`).

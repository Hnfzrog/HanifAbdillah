# UI/UX — Glassmorphism ala iOS

## Description
Spesifikasi design system glassmorphism (frosted glass) yang diterapkan ke seluruh situs.

## Important
- Teks di atas kaca wajib tetap kontras — gunakan background glass yang cukup pekat, bukan kaca bening total.
- `backdrop-filter` butuh prefix `-webkit-` untuk Safari; sediakan fallback solid via `@supports`.
- Batasi jumlah elemen ber-blur agar performa HP low-end tetap baik.

## Table of Contents
1. Prinsip
2. Token Desain
3. Komponen
4. Responsive & Aksesibilitas

## Scope
Aturan visual & interaksi untuk tampilan glass ala iPhone.

## Goals
Tampilan konsisten, modern, dan terbaca di light & dark.

## Non Goals
Bukan sistem desain multi-brand; khusus untuk situs ini.

## Prinsip
- Frosted glass translusen, sudut membulat besar (≈24px), shadow lembut, highlight sheen di tepi atas.
- Background berupa mesh gradient blob warna lembut agar efek blur kaca terlihat.

## Token Desain
| Token | Light | Dark |
|---|---|---|
| `--bg` | #eef0f5 | #0a0a0c |
| `--text-1` | #1c1c1e | #f5f5f7 |
| `--text-2` | #6b7280 | #a1a1a6 |
| `--glass-bg` | rgba(255,255,255,.55) | rgba(28,28,30,.5) |
| `--glass-border` | rgba(255,255,255,.6) | rgba(255,255,255,.12) |
| `--accent` | #0a84ff | #0a84ff |
| `--shadow` | 0 8px 32px rgba(31,38,135,.12) | 0 8px 32px rgba(0,0,0,.5) |

## Komponen
- `.glass` — panel frosted (blur + saturate + border + sheen).
- `.blob` — blob gradient mesh di background.
- `.navbar` — floating pill translusen yang blur saat scroll.
- `.btn` / `.btn-ghost` — CTA pill.
- `.hero-photo-wrap` / `.hero-photo` — foto profil bulat dengan ring kaca; lebar `clamp(112px, 30vw, 160px)`, `aspect-ratio: 1`, `object-fit: cover`.

## Responsive & Aksesibilitas
- Mobile-first, gutter 16px, tanpa scroll horizontal.
- Kontras teks ≥ 4.5:1 di atas kaca.
- Nav anchor dapat dijangkau keyboard; fokus terlihat.

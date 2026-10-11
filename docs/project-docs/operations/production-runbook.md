# Production Runbook

## Description
Operasional situs yang sudah live (statis, risiko rendah).

## Important
- Situs statis: tidak ada server, database, atau proses runtime yang perlu di-monitor.

## Table of Contents
1. Deploy Ulang
2. Update Konten

## Scope
Tindakan operasional setelah situs live.

## Goals
Panduan cepat untuk deploy ulang & update tanpa merusak struktur.

## Non Goals
Tidak mencakup monitoring server (tidak ada server).

## Deploy Ulang
Ubah konten → commit → push → platform rebuild otomatis (lihat `operations/ci-cd.md`).

## Update Konten
- Teks/kontak/skill/layanan → ubah `src/data/site.ts`.
- Tema/desain/token warna → ubah `src/styles/global.css`.
- Struktur section → baru sentuh `src/components/`.
- Setelah mengubah: `npm run build && npm test` sebelum push.

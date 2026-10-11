# CI/CD

## Description
Build & deploy untuk situs statis Astro.

## Important
- Belum ada platform CI terpasang (greenfield). Deploy target: Vercel / Netlify / Cloudflare Pages — dipilih nanti oleh user.

## Table of Contents
1. Build
2. Deploy

## Scope
Pipeline build & deploy otomatis dari git push.

## Goals
Deploy yang deterministik dan bisa diulang.

## Non Goals
Tidak ada environment staging/prod terpisah (situs tunggal).

## Build
```bash
npm ci
npm run build   # output ke dist/
npm test
```

## Deploy
- Rekomendasi: Vercel / Netlify / Cloudflare Pages — auto-deploy dari git push.
- Build command: `npm run build`.
- Output directory: `dist/`.
- Tidak ada secret/env var yang diperlukan.

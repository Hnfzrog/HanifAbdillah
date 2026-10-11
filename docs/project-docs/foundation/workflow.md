# Workflow

## Description
Dev loop dan proses kerja untuk proyek ini (greenfield, single developer).

## Important
- SDD: spesifikasi mendahului implementasi. Jangan menulis kode untuk fitur di luar spek (`foundation/prd.md`).
- Setiap perubahan kode harus bisa dipetakan ke requirement spek.

## Table of Contents
1. Dev Loop
2. Branching & Commit
3. Definition of Done

## Scope
Proses kerja harian dari perubahan hingga merge.

## Goals
Proses yang ringan, konsisten, dan tidak over-engineered untuk single dev.

## Non Goals
Bukan pengganti CI/CD (lihat `operations/ci-cd.md`).

## Dev Loop
1. Update doc terkait di `docs/project-docs/` bila spek berubah.
2. Tulis / perbarui test berdasarkan acceptance criteria.
3. Implementasikan kode.
4. Jalankan `npm run build && npm test`.
5. Petakan perubahan ke requirement spek.

## Branching & Commit
- Single dev, kerja langsung di `main` (atau feature branch bila diperlukan).
- Commit message: Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`).

## Definition of Done
- Build sukses (exit 0), test lolos.
- Konten sesuai spek, responsive di mobile.
- Tidak ada fitur di luar spek yang lolos masuk.

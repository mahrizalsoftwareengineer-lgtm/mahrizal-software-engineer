# Mahrizal Portfolio

Portfolio pribadi siap deploy ke **GitHub + Vercel**.

Dipakai untuk:
- apply kerja (Engineering Manager / AI Developer / System Analyst)
- meyakinkan calon klien agency

## Jalankan lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Edit konten (penting)

Semua teks utama ada di:

| File | Isi |
|---|---|
| `src/content/site.ts` | Nama, bio, kontak, roles, skills, about |
| `src/content/cases.ts` | 4 case studies + tag role + link bukti |

Yang wajib diganti sebelum go public:
1. `github`, `linkedin`, `agencyUrl` di `site.ts`
2. Link live/GitHub di tiap case
3. Detail Case 2–4 agar cocok dengan pengalamanmu (cari komentar `TODO`)
4. `metadataBase` URL di `src/app/layout.tsx`

Opsional:
- taruh CV di `public/resume.pdf`
- tambah screenshot case di `public/cases/`

## Deploy ke GitHub

```bash
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/USERNAME/mahrizal-portfolio.git
git push -u origin main
```

## Deploy & CI/CD (Vercel)

Live: https://mahrizal-software-engineer.vercel.app/

Kalau repo sudah di-import ke Vercel, **CI/CD sudah otomatis**:
- `git push` ke branch `main` → Vercel build & update production
- push ke branch lain → biasanya dapat preview deployment

Tidak perlu GitHub Actions terpisah untuk deploy, kecuali kamu ingin quality gate tambahan (lint/test) sebelum merge.

Pastikan di Vercel Project Settings → Git:
- Connected repo: `mahrizalsoftwareengineer-lgtm/mahrizal-software-engineer`
- Production Branch: `main`

## SEO

Sudah disiapkan:
- metadata + Open Graph + Twitter card
- `sitemap.xml` & `robots.txt`
- JSON-LD (Person, WebSite, case studies)
- canonical URL
- OG image dinamis

Agar lebih cepat terindex di Google:
1. Buka [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://mahrizal-software-engineer.vercel.app`
3. Submit sitemap: `https://mahrizal-software-engineer.vercel.app/sitemap.xml`
4. Request indexing untuk homepage + case utama (SIA Militan)
5. Pakai nama konsisten di LinkedIn/GitHub/CV agar brand search “Mahrizal Software Engineer” menguat

Catatan realistis: ranking #1 untuk keyword generik (“software engineer”) sangat sulit. Target paling realistis adalah brand query + long-tail (nama + role + lokasi/stack).

## Cara pakai saat apply

Di CV / form aplikasi, taruh **satu link**: URL Vercel portfolio.

Contoh:
- Engineering Manager → tonjolkan case delivery + agency
- AI Developer → tonjolkan case AI + engineering
- System Analyst → tonjolkan case requirement + agency
- Klien → tonjolkan agency + delivery

GitHub tetap sebagai bukti sekunder (repo per case).

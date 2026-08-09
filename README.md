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
| `src/content/site.ts` | Nama, bio, kontak, roles, about |
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

## Deploy ke Vercel

1. Buka [vercel.com/new](https://vercel.com/new)
2. Import repo `mahrizal-portfolio`
3. Framework: Next.js (otomatis)
4. Deploy
5. Copy URL production → update di `site.ts` + `layout.tsx` + CV/LinkedIn

## Cara pakai saat apply

Di CV / form aplikasi, taruh **satu link**: URL Vercel portfolio.

Contoh:
- Engineering Manager → tonjolkan case delivery + agency
- AI Developer → tonjolkan case AI + engineering
- System Analyst → tonjolkan case requirement + agency
- Klien → tonjolkan agency + delivery

GitHub tetap sebagai bukti sekunder (repo per case).

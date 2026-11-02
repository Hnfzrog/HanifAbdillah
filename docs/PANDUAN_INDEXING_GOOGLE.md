# Panduan Lengkap: Cara Mengindeks Website ke Google & Search Engine (100% Gratis)

> Dokumen ini adalah panduan langkah demi langkah untuk mendaftarkan dan memantau website portofolio & jasa **[hanifabdillah.vercel.app](https://hanifabdillah.vercel.app/)** agar muncul dan terindeks di mesin pencari (Google, Bing, Yahoo, DuckDuckGo) tanpa biaya sepeserpun.

---

## 📌 Apa Saja yang Sudah Diotomatisasi di Kode?

Anda **tidak perlu** mengedit meta tag atau kode lagi. Semua fondasi SEO teknis berikut sudah otomatis terpasang dan dibangun di setiap deploy:

1. **Title & Description Teroptimasi**: Memuat nama lengkap *"Hanif Abdillah Kuswanto"*, profesi, dan area layanan (*Yogyakarta & Magelang*).
2. **Canonical URL**: `https://hanifabdillah.vercel.app/` agar mesin pencari tidak menduplikasi halaman.
3. **Open Graph & Twitter Cards**: Tampilan preview rapi saat link dibagikan di WhatsApp, LinkedIn, Twitter, atau Telegram.
4. **Structured Data (Schema JSON-LD)**: 
   - `Person`: Menghubungkan nama Anda dengan BSI UII, Universitas Mercu Buana, dan skill Anda (membantu Google Knowledge Graph).
   - `ProfessionalService`: Mendata jasa pembuatan website untuk wilayah Magelang, Yogyakarta, dan Indonesia.
5. **Robots.txt & Sitemap.xml**: Tersedia di `/robots.txt` dan `/sitemap.xml` yang mengarahkan robot mesin pencari secara otomatis.

---

## 🚀 Langkah 1: Push Perubahan ke GitHub

Pastikan update kode terbaru ini sudah di-push ke repository GitHub Anda agar Vercel otomatis melakukan build & deploy versi terbaru:

```bash
git add .
git commit -m "feat(seo): add meta tags, schema json-ld, sitemap and robots"
git push origin main
```

Tunggu hingga dashboard Vercel menampilkan status **Ready** (sekitar 15-30 detik).

---

## 🔍 Langkah 2: Daftarkan ke Google Search Console (GSC)

Google Search Console adalah alat resmi dari Google untuk mendaftarkan website dan memantau kata kunci pencarian secara gratis.

### 2.1 Masuk ke GSC
1. Buka [Google Search Console](https://search.google.com/search-console/).
2. Login menggunakan akun Google (Gmail) Anda.

### 2.2 Tambahkan Properti Website
1. Pada pop-up **Select property type**, pilih opsi kanan: **URL prefix** (Awalan URL).
2. Masukkan URL lengkap: `https://hanifabdillah.vercel.app/`
3. Klik **Continue** (Lanjutkan).

### 2.3 Verifikasi Kepemilikan (Paling Mudah)
Google akan meminta Anda memverifikasi kepemilikan. Ada 2 cara termudah tanpa biaya:
- **Metode Tag HTML (Paling Cepat):**
  1. Pilih tab **HTML tag**.
  2. Salin kode meta tag yang diberikan, contohnya: `<meta name="google-site-verification" content="kode_acak_google..." />`.
  3. Sisipkan tag tersebut ke dalam `<head>` di file `src/layouts/Layout.astro` Anda, lalu push ke GitHub.
  4. Kembali ke Search Console dan klik tombol **Verify** (Verifikasi).
- **Metode File HTML:**
  1. Download file verifikasi dari Google (contoh: `google123456789.html`).
  2. Taruh file tersebut ke dalam folder `public/` di proyek ini.
  3. Push ke GitHub, lalu klik **Verify** di Google Search Console.

### 2.4 Kirimkan Sitemap
Setelah properti terverifikasi:
1. Di menu sidebar kiri, klik **Sitemaps** (Peta Situs).
2. Di kolom *Add a new sitemap*, ketik: `sitemap.xml`
3. Klik **Submit** (Kirim).
4. Status akan berubah menjadi **Success** (Sukses). Google bot sekarang sudah tahu seluruh isi situs Anda.

### 2.5 Minta Pengindeksan Instan (Request Indexing)
Agar Google tidak perlu menunggu antrean berhari-hari untuk perayapan awal:
1. Di bagian paling atas Google Search Console, ada kolom pencarian bertuliskan *"Inspect any URL in 'hanifabdillah.vercel.app'"*.
2. Ketik: `https://hanifabdillah.vercel.app/` lalu tekan **Enter**.
3. Klik tombol **Request Indexing** (Minta Pengindeksan).
4. Selesai! Google akan memprioritaskan bot untuk merayapi halaman Anda dalam 24–48 jam.

---

## 🌐 Langkah 3: Daftarkan ke Bing & Yahoo (1 Klik Otomatis)

Bing menguasai pencarian di browser Microsoft Edge dan juga menyuplai hasil pencarian untuk Yahoo dan DuckDuckGo.

1. Buka [Bing Webmaster Tools](https://www.bing.com/webmasters/).
2. Login menggunakan akun Microsoft atau akun Google yang sama dengan GSC.
3. Di dashboard, pilih opsi: **Import from Google Search Console**.
4. Izinkan akses ke akun Google Anda.
5. Selesai! Bing akan mengimpor verifikasi domain dan sitemap Anda secara otomatis tanpa perlu setup ulang.

---

## 📈 Langkah 4: Cara Memantau Ranking & Pencarian (Gratis)

### 1. Cek Apakah Website Sudah Terindeks
Buka Google, ketik di kolom pencarian:
```text
site:hanifabdillah.vercel.app
```
- Jika muncul hasil pencarian: Website Anda sudah **resmi masuk ke database Google**.
- Jika belum: Tunggu proses crawling (biasanya memakan waktu 2 s/d 7 hari kerja untuk situs baru).

### 2. Cek Ranking Nama Sendiri ("Hanif Abdillah Kuswanto")
- Selalu gunakan jendela **Incognito / Private Window** di browser saat mengecek ranking, agar hasil pencarian tidak bias oleh riwayat penelusuran pribadi Anda.
- Ketik: `Hanif Abdillah Kuswanto`
- Perhatikan urutan hasil: LinkedIn, website BSI UII, dan website portofolio Anda.

### 3. Pantau Kata Kunci di Dashboard GSC
Setelah website berjalan 1-2 minggu:
- Buka Google Search Console -> menu **Performance** (Kinerja) / **Search results**.
- Di sana Anda bisa melihat secara riil:
  - Total orang yang melihat link website Anda di Google (**Impressions**).
  - Total orang yang mengklik website Anda (**Clicks**).
  - Kata kunci apa saja yang diketik orang di Google sehingga website Anda muncul (**Queries**).
  - Posisi rata-rata ranking Anda untuk tiap kata kunci (**Average position**).

---

## 🏆 Langkah 5: Strategi Mengalahkan LinkedIn & BSI UII di Ranking Google

Untuk mengalahkan profil LinkedIn dan halaman profil di `bsi.uii.ac.id` pada kata kunci nama Anda sendiri:

1. **Pasang Backlink Pertama dari Profil Anda Sendiri (Gratis & Kuat):**
   - Edit profil **LinkedIn** Anda: Pada bagian kontak/website, cantumkan link `https://hanifabdillah.vercel.app/`.
   - Edit bio **GitHub** Anda: Masukkan link website portofolio ini.
   - Edit bio media sosial lainnya (Instagram, Twitter/X, profil kampus).
   *Google membaca backlink dari LinkedIn dan GitHub sebagai sinyal kuat bahwa `hanifabdillah.vercel.app` adalah website resmi milik orang yang bersangkutan.*
2. **First-Party Entity Authority:**
   Karena di schema JSON-LD kita sudah mencantumkan relasi:
   - `worksFor: Badan Sistem Informasi UII`
   - `sameAs: LinkedIn & GitHub`
   Google akan mengenali bahwa website ini adalah "induk" representasi diri Anda, sedangkan LinkedIn dan BSI UII adalah profil pelengkap.

---

## ❓ FAQ & Troubleshooting

- **Berapa lama waktu yang dibutuhkan sampai muncul di Google?**  
  Umumnya antara 2 hingga 7 hari setelah menekan tombol *Request Indexing* di Google Search Console.
- **Apakah perlu bayar iklan Google Ads / SEO tool?**  
  Sama sekali tidak perlu. Google Search Console, sitemap submission, dan pengindeksan organik adalah layanan resmi Google yang 100% gratis selamanya.
- **Bagaimana jika suatu saat saya beli custom domain (misal `hanifabdillah.id`)?**  
  Anda tinggal mengubah nilai `site` di `astro.config.mjs` dan `Layout.astro`, lalu tambahkan properti domain baru tersebut di Google Search Console.


# Arizona Institute — Landing Page

Landing page untuk lembaga kursus Bahasa Inggris fiktif "Arizona Institute", dibuat sebagai project latihan front-end development.

🔗 **Live demo:** https://arizonainstitute.netlify.app/

## Tentang Project

Website ini terdiri dari 4 halaman:

- **Home** (`index.html`) — hero section, statistik, about us, fitur unggulan, program kursus, form pendaftaran, dan section lokasi dengan peta Google Maps
- **Gallery** (`gallery.html`) — galeri dokumentasi kegiatan dengan filter kategori (Semua, Kegiatan Kelas, Prestasi, Pameran), dirender otomatis dari data array lewat JavaScript, dilengkapi lightbox
- **Learning Materials** (`learning-materials.html`) — referensi buku/materi pembelajaran yang dipakai di kelas, dikelompokkan per kategori (Hospitality & Business, Medical, Engineering & Technical, Public Service, TOEFL/TOEIC Preparation, General English, dll)
- **Information** (`information.html`) — detail program, syarat pendaftaran, dan jadwal kelas

## Tech Stack

- **HTML5** — struktur semantic (`<main>`, `<nav>`, `<footer>`)
- **Tailwind CSS** (via CDN) — styling utility-first
- **CSS custom** — dipisah per fungsi: `base.css`, `navbar.css`, `gallery.css`, `form.css`, `responsive.css`
- **Vanilla JavaScript** — hero image slider, mobile navbar toggle, render galeri dinamis, validasi form sederhana
- **Hosting:** Netlify

## Fitur

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Hero image slider otomatis
- ✅ Navbar model pill/tab dengan active-state indicator, konsisten di semua halaman (desktop & mobile)
- ✅ Galeri foto dengan filter kategori, hover overlay, dan lightbox — di-render dari data JS (bukan HTML manual berulang)
- ✅ Halaman Learning Materials yang mengelompokkan puluhan materi ajar ke dalam kategori yang mudah ditelusuri
- ✅ Form pendaftaran dengan validasi dasar & aksesibilitas (label untuk screen reader)
- ✅ Tabel syarat pendaftaran & jadwal kelas yang scrollable di layar kecil
- ✅ Section lokasi dengan alamat, link WhatsApp, dan peta Google Maps ter-embed

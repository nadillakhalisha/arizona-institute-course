# Arizona Institute — Landing Page

Landing page untuk lembaga kursus Bahasa Inggris fiktif "Arizona Institute", dibuat sebagai project latihan front-end development.

🔗 **Live demo:** https://arizonainstitute.netlify.app/

## Tentang Project

Website ini terdiri dari 3 halaman:

- **Home** (`index.html`) — hero section, statistik, about us, fitur unggulan, program kursus, dan form pendaftaran
- **Gallery** (`gallery.html`) — galeri dokumentasi kegiatan, dirender otomatis dari data array lewat JavaScript
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
- ✅ Navbar dengan menu mobile (hamburger)
- ✅ Galeri foto dengan hover overlay, di-render dari data JS (bukan HTML manual berulang)
- ✅ Form pendaftaran dengan validasi dasar & aksesibilitas (label untuk screen reader)
- ✅ Tabel syarat pendaftaran & jadwal kelas yang scrollable di layar kecil

## Struktur Folder

```
├── index.html
├── gallery.html
├── information.html
├── css/
│   ├── base.css
│   ├── navbar.css
│   ├── gallery.css
│   ├── form.css
│   └── responsive.css
├── js/
│   ├── navbar.js
│   ├── hero-slider.js
│   └── apply-form.js
└── assets/
    └── img/
```

## Yang Dipelajari

- Debugging konflik CSS (`!important` yang bikin style ke-override)
- Refactor kode HTML berulang jadi data-driven rendering (galeri)
- Menjaga konsistensi desain antar banyak halaman (navbar & footer shared)
- Dasar-dasar aksesibilitas web (label form, alt text, scope pada tabel)

## Catatan

Project ini dibuat untuk tujuan pembelajaran/portofolio. Data (nama lembaga, alumni, dsb) bersifat contoh.

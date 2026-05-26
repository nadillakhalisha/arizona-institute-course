document.addEventListener("DOMContentLoaded", function () {
  /* ===== HERO SLIDER ===== */
  const heroImages = [
    "assets/img/hero1.jpg",
    "assets/img/hero2.JPG",
    "assets/img/hero3.jpg",
  ];

  let heroIndex = 0;
  const heroImg = document.getElementById("heroSlider");

  if (heroImg) {
    setInterval(() => {
      heroImg.style.opacity = 0;

      setTimeout(() => {
        heroIndex = (heroIndex + 1) % heroImages.length;
        heroImg.src = heroImages[heroIndex];
        heroImg.style.opacity = 1;
      }, 600);
    }, 3500);
  }

  /* ===== FORM WHATSAPP ===== */
  const form = document.getElementById("applyForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    let wa = document.getElementById("wa").value.trim();
    const program = document.getElementById("program").value;

    wa = wa.replace(/[^0-9]/g, "");
    if (wa.startsWith("08")) wa = "62" + wa.slice(1);

    const adminWA = "6281360044600";

    const pesan = `Halo Arizona Institute 👋
Nama: ${nama}
WhatsApp: ${wa}
Program: ${program}`;

    window.open(
      `https://wa.me/${adminWA}?text=${encodeURIComponent(pesan)}`,
      "_blank",
    );
  });
});

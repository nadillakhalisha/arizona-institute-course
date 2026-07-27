document.addEventListener("DOMContentLoaded", function () {
  const heroImages = [
    "assets/img/hero1.jpg",
    "assets/img/hero2.JPG",
    "assets/img/hero3.jpg",
  ];

  let heroIndex = 0;
  const heroImg = document.getElementById("heroSlider");

  if (!heroImg) return;

  setInterval(() => {
    heroImg.style.opacity = 0;

    setTimeout(() => {
      heroIndex = (heroIndex + 1) % heroImages.length;
      heroImg.src = heroImages[heroIndex];
      heroImg.style.opacity = 1;
    }, 600);
  }, 3500);
});

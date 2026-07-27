document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("mobileMenu");
  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");

  if (!btn || !menu) return;

  let open = false;

  btn.addEventListener("click", () => {
    open = !open;
    menu.classList.toggle("hidden", !open);
    menu.classList.toggle("flex", open);
    bar1.style.transform = open ? "rotate(45deg) translate(5px, 5px)" : "";
    bar2.style.opacity = open ? "0" : "1";
    bar3.style.transform = open ? "rotate(-45deg) translate(5px, -5px)" : "";
  });
});

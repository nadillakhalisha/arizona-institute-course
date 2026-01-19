document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.name.value;
    const phone = this.phone.value;
    const program = this.program.value;

    const message = `
PENDAFTARAN ARIZONA INSTITUTE
Nama: ${name}
No WhatsApp: ${phone}
Program: ${program}
    `;

    const url =
      "https://wa.me/6281360044600?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
  });
});

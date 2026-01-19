document.addEventListener("DOMContentLoaded", () => {
  console.log("Arizona Institute loaded");

  // Auto play videos on scroll
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    video.play().catch(() => {});
  });
});

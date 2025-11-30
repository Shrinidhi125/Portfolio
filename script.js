window.addEventListener("load", () => {
  document.querySelectorAll(".fade").forEach((el, i) => {
    el.style.animationDelay = `${i * 0.15}s`;
  });
});

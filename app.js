const toggle = document.querySelector(".toggle");
const cards = document.querySelector(".cards");

toggle.addEventListener("change", () => {
  cards.classList.toggle("show-monthly");
});

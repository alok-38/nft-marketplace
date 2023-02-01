// Querying the DOM
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

// Toggle
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});

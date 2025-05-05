// script.js
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mainMenu = document.getElementById("mainMenu");

  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("open");
    mainMenu.classList.toggle("active");
  });
});

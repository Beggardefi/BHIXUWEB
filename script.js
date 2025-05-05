// Toggle mobile navbar
const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mainMenu.classList.toggle("show");
});

// Header/Footer show/hide on scroll
let lastScrollTop = 0;
const header = document.querySelector("header");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.style.top = "-100px"; // Hide header
    footer.style.bottom = "-100px"; // Hide footer
  } else {
    // Scrolling up
    header.style.top = "0";
    footer.style.bottom = "0";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

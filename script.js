// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const mainMenu = document.getElementById("mainMenu");

    menuToggle.addEventListener("click", () => {
        mainMenu.classList.toggle("active");
        menuToggle.classList.toggle("open");
    });

    // Smooth scroll to sections on link click
    const navLinks = document.querySelectorAll('nav ul li a, .footer-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
                mainMenu.classList.remove("active");
                menuToggle.classList.remove("open");
            }
        });
    });
});

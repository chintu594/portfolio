// Toggle Menu
const toggleBtn = document.querySelector(".toggle-btn");
const toggleIcon = document.querySelector(".toggle-btn i");
const menus = document.querySelector(".menus");

toggleBtn?.addEventListener("click", () => {
    menus.classList.toggle("open");

    toggleIcon.classList.toggle("ri-menu-3-line");
    toggleIcon.classList.toggle("ri-close-large-line");
});

// Close menu on link click (mobile)
document.querySelectorAll(".menus a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 767) {
            menus.classList.remove("open");
            toggleIcon.classList.remove("ri-close-large-line");
            toggleIcon.classList.add("ri-menu-3-line");
        }
    });
});


// Typed.js
if (document.querySelector("#ani") && typeof Typed !== "undefined") {
    new Typed("#ani", {
        strings: ["Front-End", "UI", "React JS", "WordPress", "Web"],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1200,
        startDelay: 300,
        loop: true,
        smartBackspace: true,
    });
}


// AOS
if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 800,
        once: true,
        offset: 80,
    });
}
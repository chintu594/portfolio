$(".toggle-btn").click(function () {
    $(".toggle-btn i").toggleClass('ri-close-large-line')
    $(".menus").slideToggle();
});

let animate = new Typed('#ani', {
    strings: ["Front End Developer", "UI Developer", "React js Developer", "Wordpress Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal(".intro-image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".intro-content .section-subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".intro-content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".intro-content p", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".intro-content .btns", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".counter .counter-card", {
    ...scrollRevealOption,
    delay: 2500,
    interval: 500,
});

ScrollReveal().reveal(".counter .counter-devider", {
    delay: 3000,
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal(".skill-content .section-subheader", {
    ...scrollRevealOption,
    delay: 3500,
});

ScrollReveal().reveal(".skill-content h2", {
    ...scrollRevealOption,
    delay: 4000,
});

ScrollReveal().reveal(".skill-content p", {
    ...scrollRevealOption,
    delay: 4500,
});

ScrollReveal().reveal(".skill-content h4", {
    ...scrollRevealOption,
    delay: 5000,
});

ScrollReveal().reveal(".skill-content ul li", {
    ...scrollRevealOption,
    delay: 5500,
    interval: 150,
});

ScrollReveal().reveal(".skill-content .button", {
    ...scrollRevealOption,
    delay: 6000,
});

ScrollReveal().reveal(".skill-grid .skill-card", {
    delay: 6500,
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal(".portfolio-content .section-subheader", {
    ...scrollRevealOption,
    delay: 7000,
});

ScrollReveal().reveal(".portfolio-content h2", {
    ...scrollRevealOption,
    delay: 7500,
});

ScrollReveal().reveal(".portfolio-content p", {
    ...scrollRevealOption,
    delay: 8000,
});

ScrollReveal().reveal(".portfolio-content .button", {
    ...scrollRevealOption,
    delay: 8500,
});

ScrollReveal().reveal(".portfolio-image-wrapper", {
    delay: 9000,
    duration: 1000,
});

ScrollReveal().reveal(".reviews .section-subheader", {
    ...scrollRevealOption,
    delay: 9500,
});

ScrollReveal().reveal(".reviews h2", {
    ...scrollRevealOption,
    delay: 10000,
});

ScrollReveal().reveal(".review-skills .box", {
    delay: 10500,
    interval: 500,
    duration: 1000,
});
ScrollReveal().reveal(".project .section-subheader", {
    ...scrollRevealOption,
    delay: 11000,
});

ScrollReveal().reveal(".project h2", {
    ...scrollRevealOption,
    delay: 11500,
});

ScrollReveal().reveal(".project p", {
    ...scrollRevealOption,
    delay: 12000,
});

ScrollReveal().reveal(".project-grid .col", {
    delay: 12500,
    interval: 500,
    duration: 1000,
});

ScrollReveal().reveal(".form-sec .section-subheader", {
    ...scrollRevealOption,
    delay: 13000,
});

ScrollReveal().reveal(".form-sec h2", {
    ...scrollRevealOption,
    delay: 13500,
});

ScrollReveal().reveal(".form-sec p", {
    ...scrollRevealOption,
    delay: 14000,
});

ScrollReveal().reveal(".form-sec ul li", {
    delay: 14500,
    interval: 500,
    duration: 1000,
});

ScrollReveal().reveal(".footer-logo", {
    ...scrollRevealOption,
    delay: 15000,
});

ScrollReveal().reveal(".footer .col1 p", {
    ...scrollRevealOption,
    delay: 15500,
});

ScrollReveal().reveal(".footer .social-icons h4", {
    ...scrollRevealOption,
    delay: 16000,
});

ScrollReveal().reveal(".social-icons ul li", {
    delay: 16500,
    interval: 500,
    duration: 1000,
});

ScrollReveal().reveal(".footer .col2 h4", {
    ...scrollRevealOption,
    delay: 17000,
});

ScrollReveal().reveal(".footer .col2 ul li", {
    delay: 17500,
    interval: 500,
    duration: 1000,
});

ScrollReveal().reveal(".footer .col3 h4", {
    ...scrollRevealOption,
    delay: 18000,
});

ScrollReveal().reveal(".footer .col3 ul li", {
    delay: 18500,
    interval: 500,
    duration: 1000,
});

ScrollReveal().reveal(".footer .col4 h4", {
    ...scrollRevealOption,
    delay: 19000,
});

ScrollReveal().reveal(".footer .col4 ul li", {
    delay: 19500,
    interval: 500,
    duration: 1000,
});
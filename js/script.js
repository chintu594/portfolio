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

AOS.init();
/* $(".toggle-btn").click(function () {
    $(".toggle-btn i").toggleClass('ri-close-large-line')
    $(".menus").slideToggle();
});

let animate = new Typed('#ani', {
    strings: ["Front End", "UI", "React js", "Wordpress", "Web"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

AOS.init();

 */

$(".toggle-btn").click(function () {
    $(".toggle-btn i").toggleClass("ri-menu-3-line ri-close-large-line");
    $(".menus").slideToggle(250);
});

$(".menus a").click(function () {
    if (window.innerWidth <= 767) {
        $(".menus").slideUp(250);
        $(".toggle-btn i").removeClass("ri-close-large-line").addClass("ri-menu-3-line");
    }
});


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

if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 80,
  });
}
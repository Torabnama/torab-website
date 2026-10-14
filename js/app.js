document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       SWIPER
    ========================== */

    const swiper = new Swiper(".mySwiper", {

        direction: "horizontal",

        loop: true,

        slidesPerView: 1,

        spaceBetween: 20,

        centeredSlides: true,

        autoplay: {

            delay: 5000,

            disableOnInteraction: false,

        },

        pagination: {

            el: ".swiper-pagination",

            clickable: true,

        },

        speed: 700,

        rtl: true,

    });



    /* =========================
       MENU
    ========================== */

    const menuToggle = document.getElementById("menuToggle");

    const menuOverlay = document.getElementById("menuOverlay");

    const menuClose = document.getElementById("menuClose");

    const menuLinks = document.querySelectorAll(".menu-nav a");



    /* باز کردن منو */

    if (menuToggle && menuOverlay) {

        menuToggle.addEventListener("click", function () {

            menuOverlay.classList.add("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );

            document.body.style.overflow = "hidden";

        });

    }



    /* بستن منو */

    if (menuClose && menuOverlay) {

        menuClose.addEventListener("click", function () {

            menuOverlay.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.style.overflow = "";

        });

    }



    /* بستن منو با کلیک روی لینک‌ها */

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            menuOverlay.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.style.overflow = "";

        });

    });



    /* بستن منو با دکمه Escape */

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            menuOverlay &&
            menuOverlay.classList.contains("active")
        ) {

            menuOverlay.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.style.overflow = "";

        }

    });

});

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       OTHER SHOWS SLIDER
    ========================================= */

    const showsSlider = document.querySelector(".mySwiper");

    if (showsSlider && typeof Swiper !== "undefined") {
        new Swiper(".mySwiper", {
            direction: "horizontal",
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,

            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },

            pagination: {
                el: ".mySwiper .swiper-pagination",
                clickable: true,
            },

            speed: 700,
            rtl: true,
        });
    }


    /* =========================================
       UPCOMING SHOWS SLIDER
    ========================================= */

    const upcomingSlider = document.querySelector(".upcomingSwiper");

    if (upcomingSlider && typeof Swiper !== "undefined") {
        new Swiper(".upcomingSwiper", {
            direction: "horizontal",
            loop: true,
            slidesPerView: 1,
            spaceBetween: 25,

            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },

            pagination: {
                el: ".upcoming-pagination",
                clickable: true,
            },

            speed: 700,
            rtl: true,
        });
    }


    /* =========================================
       MENU
    ========================================= */

    const menuToggle = document.getElementById("menuToggle");
    const menuOverlay = document.getElementById("menuOverlay");
    const menuClose = document.getElementById("menuClose");
    const menuLinks = document.querySelectorAll(".menu-nav a");


    if (menuToggle && menuOverlay) {

        menuToggle.addEventListener("click", function () {

            menuOverlay.classList.add("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );

            document.body.style.overflow = "hidden";

        });

    }


    if (menuClose && menuOverlay) {

        menuClose.addEventListener("click", function () {

            menuOverlay.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.style.overflow = "";

        });

    }


    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            menuOverlay.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.style.overflow = "";

        });

    });


    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            menuOverlay &&
            menuOverlay.classList.contains("active")
        ) {

            menuOverlay.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.style.overflow = "";

        }

    });

});
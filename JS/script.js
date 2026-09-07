/* =========================================================
   STAGIONEST — REVISED SCRIPT.JS
   Reliable portfolio + design sliders
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {
            mainNav.classList.toggle("open");

            const isOpen = mainNav.classList.contains("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
        });

        mainNav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                mainNav.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* =====================================================
       GENERIC SLIDER FUNCTION
       ===================================================== */

    function createSlider(options) {

        const slides = document.querySelectorAll(options.slideSelector);
        const prevButton = document.querySelector(options.prevSelector);
        const nextButton = document.querySelector(options.nextSelector);
        const counter = document.querySelector(options.counterSelector);
        const container = document.querySelector(options.containerSelector);

        if (!slides.length) {
            return;
        }

        let currentIndex = 0;
        let autoPlayTimer = null;

        /*
         * Make sure only one slide is visible.
         */
        function showSlide(index) {

            if (index < 0) {
                index = slides.length - 1;
            }

            if (index >= slides.length) {
                index = 0;
            }

            currentIndex = index;

            slides.forEach(function (slide, i) {
                slide.classList.toggle("active", i === currentIndex);
                slide.setAttribute(
                    "aria-hidden",
                    i === currentIndex ? "false" : "true"
                );
            });

            if (counter) {
                counter.textContent =
                    (currentIndex + 1) + " / " + slides.length;
            }
        }


        function nextSlide() {
            showSlide(currentIndex + 1);
        }


        function previousSlide() {
            showSlide(currentIndex - 1);
        }


        /* =================================================
           BUTTONS
           ================================================= */

        if (nextButton) {
            nextButton.addEventListener("click", function () {
                nextSlide();
                restartAutoPlay();
            });
        }

        if (prevButton) {
            prevButton.addEventListener("click", function () {
                previousSlide();
                restartAutoPlay();
            });
        }


        /* =================================================
           AUTOPLAY
           ================================================= */

        function startAutoPlay() {

            stopAutoPlay();

            autoPlayTimer = setInterval(function () {
                nextSlide();
            }, options.interval || 5000);
        }


        function stopAutoPlay() {

            if (autoPlayTimer) {
                clearInterval(autoPlayTimer);
                autoPlayTimer = null;
            }
        }


        function restartAutoPlay() {
            stopAutoPlay();
            startAutoPlay();
        }


        /*
         * Pause when mouse is over the slider.
         * This prevents the user from fighting the animation.
         */
        if (container) {

            container.addEventListener("mouseenter", function () {
                stopAutoPlay();
            });

            container.addEventListener("mouseleave", function () {
                startAutoPlay();
            });

            container.addEventListener("focusin", function () {
                stopAutoPlay();
            });

            container.addEventListener("focusout", function () {
                startAutoPlay();
            });
        }


        /* =================================================
           TOUCH / SWIPE
           ================================================= */

        if (container) {

            let touchStartX = 0;
            let touchEndX = 0;

            container.addEventListener(
                "touchstart",
                function (event) {
                    touchStartX = event.changedTouches[0].screenX;
                },
                { passive: true }
            );

            container.addEventListener(
                "touchend",
                function (event) {

                    touchEndX = event.changedTouches[0].screenX;

                    const swipeDistance =
                        touchEndX - touchStartX;

                    if (Math.abs(swipeDistance) < 45) {
                        return;
                    }

                    if (swipeDistance < 0) {
                        nextSlide();
                    } else {
                        previousSlide();
                    }

                    restartAutoPlay();
                },
                { passive: true }
            );
        }


        /*
         * IMPORTANT:
         * Always initialize the first slide.
         */
        showSlide(0);

        /*
         * Start automatic rotation.
         */
        startAutoPlay();

        /*
         * Return public controls if needed later.
         */
        return {
            next: nextSlide,
            previous: previousSlide,
            start: startAutoPlay,
            stop: stopAutoPlay
        };
    }


    /* =====================================================
       PORTFOLIO SLIDER
       ===================================================== */

    createSlider({
        slideSelector: ".portfolio-card",
        prevSelector: "#prevProject",
        nextSelector: "#nextProject",
        counterSelector: "#sliderCounter",
        containerSelector: "#portfolioSlider",
        interval: 6000
    });


    /* =====================================================
       DESIGN STYLE SLIDER
       ===================================================== */

    createSlider({
        slideSelector: ".style-slide",
        prevSelector: "#prevStyle",
        nextSelector: "#nextStyle",
        counterSelector: "#styleCounter",
        containerSelector: ".style-showcase",
        interval: 5000
    });


    /* =====================================================
       IMAGE ERROR HANDLING
       ===================================================== */

    document.querySelectorAll("img").forEach(function (image) {

        image.addEventListener("error", function () {

            /*
             * Do not allow one broken image to break
             * the slider or surrounding layout.
             */
            image.classList.add("image-error");

            image.removeAttribute("src");

            image.alt = "Image unavailable";
        });
    });


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll("[data-current-year]");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    /* =====================================================
       ESCAPE KEY — CLOSE MOBILE MENU
       ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key !== "Escape") {
            return;
        }

        if (mainNav && mainNav.classList.contains("open")) {

            mainNav.classList.remove("open");

            if (menuToggle) {
                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        }
    });

});

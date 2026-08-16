/* =========================================================
   STAGIONEST
   Main JavaScript
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        const isOpen = mainNav.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    /* Close menu after clicking a navigation link */

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        });

    });

}


/* =========================================================
   ONE ROOM — MULTIPLE STYLES SLIDESHOW
   ========================================================= */

const styleSlides = document.querySelectorAll(".style-slide");
const styleDots = document.querySelectorAll(".style-dot");

const stylePrev = document.getElementById("stylePrev");
const styleNext = document.getElementById("styleNext");

let currentStyle = 0;


/* Show selected slide */

function showStyle(index) {

    if (!styleSlides.length) {
        return;
    }

    if (index < 0) {
        currentStyle = styleSlides.length - 1;
    }

    else if (index >= styleSlides.length) {
        currentStyle = 0;
    }

    else {
        currentStyle = index;
    }


    styleSlides.forEach(function (slide, i) {

        slide.classList.toggle(
            "active",
            i === currentStyle
        );

    });


    styleDots.forEach(function (dot, i) {

        dot.classList.toggle(
            "active",
            i === currentStyle
        );

    });

}


/* Previous button */

if (stylePrev) {

    stylePrev.addEventListener("click", function () {

        showStyle(currentStyle - 1);

    });

}


/* Next button */

if (styleNext) {

    styleNext.addEventListener("click", function () {

        showStyle(currentStyle + 1);

    });

}


/* Dot buttons */

styleDots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

        showStyle(index);

    });

});


/* =========================================================
   OPTIONAL AUTO SLIDESHOW
   ========================================================= */

/*
   The slideshow automatically moves every 5 seconds.

   If you do NOT want automatic movement,
   delete or comment out the block below.
*/

let styleTimer = setInterval(function () {

    if (styleSlides.length > 1) {

        showStyle(currentStyle + 1);

    }

}, 5000);


/* Pause slideshow when user interacts with it */

const styleSlider = document.querySelector(".style-slider");

if (styleSlider) {

    styleSlider.addEventListener("mouseenter", function () {

        clearInterval(styleTimer);

    });


    styleSlider.addEventListener("mouseleave", function () {

        styleTimer = setInterval(function () {

            showStyle(currentStyle + 1);

        }, 5000);

    });

}


/* =========================================================
   KEYBOARD CONTROL
   ========================================================= */

document.addEventListener("keydown", function (event) {

    if (!styleSlides.length) {
        return;
    }

    if (event.key === "ArrowLeft") {

        showStyle(currentStyle - 1);

    }

    if (event.key === "ArrowRight") {

        showStyle(currentStyle + 1);

    }

});

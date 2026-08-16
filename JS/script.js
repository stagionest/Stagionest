/* =========================================================
   STAGIONEST JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });


    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {
            mainNav.classList.remove("active");
        });

    });

}


/* =========================================================
   PORTFOLIO SLIDESHOW
   ========================================================= */

const slides = document.querySelectorAll(".portfolio-slide");
const previousButton = document.getElementById("portfolioPrev");
const nextButton = document.getElementById("portfolioNext");
const pauseButton = document.getElementById("portfolioPause");
const slideCounter = document.getElementById("slideCounter");

let currentSlide = 0;
let autoplay = true;
let autoplayTimer;


/* Show selected slide */

function showSlide(index) {

    if (!slides.length) {
        return;
    }

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }


    slides.forEach((slide, i) => {

        slide.classList.toggle(
            "active",
            i === currentSlide
        );

    });


    if (slideCounter) {

        slideCounter.textContent =
            `${currentSlide + 1} / ${slides.length}`;

    }

}


/* Next */

if (nextButton) {

    nextButton.addEventListener("click", () => {

        showSlide(currentSlide + 1);

        restartAutoplay();

    });

}


/* Previous */

if (previousButton) {

    previousButton.addEventListener("click", () => {

        showSlide(currentSlide - 1);

        restartAutoplay();

    });

}


/* =========================================================
   AUTOPLAY
   ========================================================= */

function startAutoplay() {

    clearInterval(autoplayTimer);

    if (!autoplay) {
        return;
    }

    autoplayTimer = setInterval(() => {

        showSlide(currentSlide + 1);

    }, 5000);

}


function restartAutoplay() {

    startAutoplay();

}


/* Pause / Resume */

if (pauseButton) {

    pauseButton.addEventListener("click", () => {

        autoplay = !autoplay;

        if (autoplay) {

            pauseButton.textContent = "Pause";

            startAutoplay();

        } else {

            pauseButton.textContent = "Play";

            clearInterval(autoplayTimer);

        }

    });

}


/* Start slideshow */

showSlide(0);
startAutoplay();


/* =========================================================
   TOUCH / SWIPE SUPPORT
   ========================================================= */

const portfolioStage =
    document.querySelector(".portfolio-stage");

let touchStartX = 0;
let touchEndX = 0;

if (portfolioStage) {

    portfolioStage.addEventListener("touchstart", event => {

        touchStartX = event.changedTouches[0].screenX;

    });


    portfolioStage.addEventListener("touchend", event => {

        touchEndX = event.changedTouches[0].screenX;

        handleSwipe();

    });

}


function handleSwipe() {

    const difference =
        touchStartX - touchEndX;

    if (Math.abs(difference) < 50) {
        return;
    }

    if (difference > 0) {

        showSlide(currentSlide + 1);

    } else {

        showSlide(currentSlide - 1);

    }

    restartAutoplay();

}


/* =========================================================
   ONE ROOM — DIFFERENT STYLES
   ========================================================= */

const styleMainImage =
    document.getElementById("styleMainImage");

const styleLabel =
    document.getElementById("styleLabel");

const styleOptions =
    document.querySelectorAll(".style-option");


styleOptions.forEach(option => {

    option.addEventListener("click", () => {

        const newImage =
            option.getAttribute("data-image");

        const newTitle =
            option.getAttribute("data-title");


        if (styleMainImage) {

            styleMainImage.src = newImage;

            styleMainImage.alt =
                `${newTitle} virtual staging style`;

        }


        if (styleLabel) {

            styleLabel.textContent =
                newTitle;

        }


        styleOptions.forEach(item => {

            item.classList.remove("active");

        });


        option.classList.add("active");

    });

});


/* =========================================================
   PREVENT EMPTY CTA LINKS FROM JUMPING
   ========================================================= */

const emptyLinks =
    document.querySelectorAll('a[href="#"]');

emptyLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        alert(
            "Your order form link will be connected here before the website goes live."
        );

    });

});

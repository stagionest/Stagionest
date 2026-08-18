/* =========================================================
   STAGIONEST
   WEBSITE JAVASCRIPT
   ========================================================= */


/* =========================
   MOBILE NAVIGATION
   ========================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", function () {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

  });


  const navLinks = mainNav.querySelectorAll("a");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      mainNav.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

    });

  });

}


/* =========================
   PORTFOLIO SLIDER
   ========================= */

const portfolioCards =
  document.querySelectorAll(".portfolio-card");

const previousProject =
  document.getElementById("prevProject");

const nextProject =
  document.getElementById("nextProject");

const sliderCounter =
  document.getElementById("sliderCounter");

let currentProject = 0;


function showProject(index) {

  if (!portfolioCards.length) {
    return;
  }

  if (index < 0) {
    currentProject = portfolioCards.length - 1;
  } else if (index >= portfolioCards.length) {
    currentProject = 0;
  } else {
    currentProject = index;
  }


  portfolioCards.forEach(function (card, i) {

    card.classList.toggle(
      "active",
      i === currentProject
    );

  });


  if (sliderCounter) {

    sliderCounter.textContent =
      (currentProject + 1) +
      " / " +
      portfolioCards.length;

  }

}


if (previousProject) {

  previousProject.addEventListener(
    "click",
    function () {

      showProject(currentProject - 1);

    }
  );

}


if (nextProject) {

  nextProject.addEventListener(
    "click",
    function () {

      showProject(currentProject + 1);

    }
  );

}


/* Start portfolio slider */

showProject(0);


/* =========================
   DESIGN STYLE SLIDER
   ========================= */

const styleSlides =
  document.querySelectorAll(".style-slide");

const previousStyle =
  document.getElementById("prevStyle");

const nextStyle =
  document.getElementById("nextStyle");

const styleCounter =
  document.getElementById("styleCounter");

let currentStyle = 0;


function showStyle(index) {

  if (!styleSlides.length) {
    return;
  }


  if (index < 0) {

    currentStyle =
      styleSlides.length - 1;

  } else if (index >= styleSlides.length) {

    currentStyle = 0;

  } else {

    currentStyle = index;

  }


  styleSlides.forEach(function (slide, i) {

    slide.classList.toggle(
      "active",
      i === currentStyle
    );

  });


  if (styleCounter) {

    styleCounter.textContent =
      (currentStyle + 1) +
      " / " +
      styleSlides.length;

  }

}


if (previousStyle) {

  previousStyle.addEventListener(
    "click",
    function () {

      showStyle(currentStyle - 1);

    }
  );

}


if (nextStyle) {

  nextStyle.addEventListener(
    "click",
    function () {

      showStyle(currentStyle + 1);

    }
  );

}


/* Start with EMPTY room first */

showStyle(0);


/* =========================
   AUTO STYLE SLIDESHOW
   ========================= */

let styleTimer;


function startStyleSlideshow() {

  if (styleSlides.length <= 1) {
    return;
  }

  styleTimer = setInterval(
    function () {

      showStyle(currentStyle + 1);

    },
    5000
  );

}


function stopStyleSlideshow() {

  if (styleTimer) {

    clearInterval(styleTimer);

  }

}


/* Start automatic style slideshow */

startStyleSlideshow();


/* Pause when user interacts */

const styleShowcase =
  document.querySelector(".style-showcase");

if (styleShowcase) {

  styleShowcase.addEventListener(
    "mouseenter",
    stopStyleSlideshow
  );

  styleShowcase.addEventListener(
    "mouseleave",
    startStyleSlideshow
  );

}


/* =========================
   CURRENT YEAR
   ========================= */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================
   FREE SAMPLE BUTTON
   ========================= */

const freeSampleButton =
  document.getElementById("freeSampleButton");


if (freeSampleButton) {

  freeSampleButton.addEventListener(
    "click",
    function (event) {

      /*
        TEMPORARY:
        This currently prevents the empty "#"
        link from jumping to the top.

        Replace the URL below later with
        your Google Form link.
      */

      event.preventDefault();

      alert(
        "Please contact StagioNest to request your free sample."
      );

    }
  );

}

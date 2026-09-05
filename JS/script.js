/* =========================================================
   STAGIONEST
   WEBSITE JAVASCRIPT
   FINAL REVISED JAVASCRIPT
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

const portfolioSlider =
  document.getElementById("portfolioSlider");

let currentProject = 0;
let portfolioTimer = null;
let portfolioPaused = false;


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


function startPortfolioSlideshow() {

  if (portfolioCards.length <= 1) {
    return;
  }

  clearInterval(portfolioTimer);

  portfolioTimer = setInterval(function () {

    if (!portfolioPaused) {
      showProject(currentProject + 1);
    }

  }, 6000);

}


function stopPortfolioSlideshow() {

  clearInterval(portfolioTimer);
  portfolioTimer = null;

}


if (previousProject) {

  previousProject.addEventListener(
    "click",
    function () {

      showProject(currentProject - 1);
      startPortfolioSlideshow();

    }
  );

}


if (nextProject) {

  nextProject.addEventListener(
    "click",
    function () {

      showProject(currentProject + 1);
      startPortfolioSlideshow();

    }
  );

}


/* Pause portfolio autoplay while the user is viewing/interacting with it. */

if (portfolioSlider) {

  portfolioSlider.addEventListener(
    "mouseenter",
    function () {
      portfolioPaused = true;
    }
  );

  portfolioSlider.addEventListener(
    "mouseleave",
    function () {
      portfolioPaused = false;
    }
  );

  portfolioSlider.addEventListener(
    "focusin",
    function () {
      portfolioPaused = true;
    }
  );

  portfolioSlider.addEventListener(
    "focusout",
    function () {
      portfolioPaused = false;
    }
  );

}


/* Start portfolio slider. */

showProject(0);
startPortfolioSlideshow();


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

const styleShowcase =
  document.querySelector(".style-showcase");

let currentStyle = 0;
let styleTimer = null;
let stylePaused = false;


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


function startStyleSlideshow() {

  if (styleSlides.length <= 1) {
    return;
  }

  /* Prevent duplicate timers. */
  clearInterval(styleTimer);

  styleTimer = setInterval(function () {

    if (!stylePaused) {
      showStyle(currentStyle + 1);
    }

  }, 5000);

}


function stopStyleSlideshow() {

  clearInterval(styleTimer);
  styleTimer = null;

}


if (previousStyle) {

  previousStyle.addEventListener(
    "click",
    function () {

      showStyle(currentStyle - 1);
      startStyleSlideshow();

    }
  );

}


if (nextStyle) {

  nextStyle.addEventListener(
    "click",
    function () {

      showStyle(currentStyle + 1);
      startStyleSlideshow();

    }
  );

}


showStyle(0);
startStyleSlideshow();


/* Pause style slideshow while the user is interacting. */

if (styleShowcase) {

  styleShowcase.addEventListener(
    "mouseenter",
    function () {
      stylePaused = true;
    }
  );

  styleShowcase.addEventListener(
    "mouseleave",
    function () {
      stylePaused = false;
    }
  );

  styleShowcase.addEventListener(
    "focusin",
    function () {
      stylePaused = true;
    }
  );

  styleShowcase.addEventListener(
    "focusout",
    function () {
      stylePaused = false;
    }
  );

}


/* =========================
   IMAGE ERROR HANDLING
   =========================

   If an image path is wrong or a file is missing, do not allow
   the browser to display the filename as broken-image text.
*/

const allImages =
  document.querySelectorAll("img");

allImages.forEach(function (image) {

  image.addEventListener("error", function () {

    image.classList.add("image-error");
    image.alt = "";
    image.setAttribute("aria-hidden", "true");

  });

});


/* =========================
   TOUCH SWIPE SUPPORT
   ========================= */

function addSwipeNavigation(element, onPrevious, onNext) {
  if (!element) return;

  let touchStartX = 0;
  let touchStartY = 0;

  element.addEventListener("touchstart", function (event) {
    const touch = event.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });

  element.addEventListener("touchend", function (event) {
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;

    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;

    if (dx < 0) {
      onNext();
    } else {
      onPrevious();
    }
  }, { passive: true });
}


addSwipeNavigation(
  portfolioSlider,
  function () {
    showProject(currentProject - 1);
    startPortfolioSlideshow();
  },
  function () {
    showProject(currentProject + 1);
    startPortfolioSlideshow();
  }
);


addSwipeNavigation(
  styleShowcase,
  function () {
    showStyle(currentStyle - 1);
    startStyleSlideshow();
  },
  function () {
    showStyle(currentStyle + 1);
    startStyleSlideshow();
  }
);


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
  freeSampleButton.setAttribute("target", "_blank");
  freeSampleButton.setAttribute("rel", "noopener");
}


/* =========================
   ACCESSIBILITY / KEYBOARD
   ========================= */

document.addEventListener("keydown", function (event) {

  if (event.key === "Escape" && mainNav) {

    mainNav.classList.remove("open");

    if (menuToggle) {

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

    }

  }

});

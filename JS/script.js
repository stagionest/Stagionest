
/* =========================================================
   STAGIONEST
   PROFESSIONAL VIRTUAL STAGING WEBSITE
   FINAL REVISED JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MOBILE NAVIGATION
     ========================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");

      const expanded = mainNav.classList.contains("open");
      menuToggle.setAttribute("aria-expanded", expanded);
    });

    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }


  /* =========================
     PORTFOLIO SLIDER
     ========================= */

  const portfolioCards =
    document.querySelectorAll(".portfolio-card");

  const portfolioPrev =
    document.getElementById("prevSlide");

  const portfolioNext =
    document.getElementById("nextSlide");

  const portfolioCounter =
    document.getElementById("sliderCounter");

  let portfolioIndex = 0;
  let portfolioTimer;


  function showPortfolioSlide(index) {

    if (!portfolioCards.length) return;

    portfolioCards.forEach(card => {
      card.classList.remove("active");
    });

    portfolioIndex =
      (index + portfolioCards.length) %
      portfolioCards.length;

    portfolioCards[portfolioIndex].classList.add("active");

    if (portfolioCounter) {
      portfolioCounter.textContent =
        `${portfolioIndex + 1} / ${portfolioCards.length}`;
    }
  }


  function nextPortfolioSlide() {
    showPortfolioSlide(portfolioIndex + 1);
  }


  function previousPortfolioSlide() {
    showPortfolioSlide(portfolioIndex - 1);
  }


  function startPortfolioSlideshow() {

    clearInterval(portfolioTimer);

    if (portfolioCards.length > 1) {
      portfolioTimer = setInterval(
        nextPortfolioSlide,
        5000
      );
    }
  }


  if (portfolioCards.length) {

    showPortfolioSlide(0);

    if (portfolioNext) {
      portfolioNext.addEventListener("click", () => {
        nextPortfolioSlide();
        startPortfolioSlideshow();
      });
    }

    if (portfolioPrev) {
      portfolioPrev.addEventListener("click", () => {
        previousPortfolioSlide();
        startPortfolioSlideshow();
      });
    }

    const portfolioSlider =
      document.querySelector(".portfolio-slider");

    if (portfolioSlider) {

      portfolioSlider.addEventListener(
        "mouseenter",
        () => clearInterval(portfolioTimer)
      );

      portfolioSlider.addEventListener(
        "mouseleave",
        startPortfolioSlideshow
      );

      portfolioSlider.addEventListener(
        "touchstart",
        () => clearInterval(portfolioTimer),
        { passive: true }
      );

      portfolioSlider.addEventListener(
        "touchend",
        startPortfolioSlideshow,
        { passive: true }
      );
    }

    startPortfolioSlideshow();
  }


  /* =========================
     DESIGN STYLE SLIDER
     ========================= */

  const styleSlides =
    document.querySelectorAll(".style-slide");

  const stylePrev =
    document.getElementById("prevStyle");

  const styleNext =
    document.getElementById("nextStyle");

  const styleCounter =
    document.getElementById("styleCounter");

  let styleIndex = 0;
  let styleTimer;


  function showStyleSlide(index) {

    if (!styleSlides.length) return;

    styleSlides.forEach(slide => {
      slide.classList.remove("active");
    });

    styleIndex =
      (index + styleSlides.length) %
      styleSlides.length;

    styleSlides[styleIndex].classList.add("active");

    if (styleCounter) {
      styleCounter.textContent =
        `${styleIndex + 1} / ${styleSlides.length}`;
    }
  }


  function nextStyleSlide() {
    showStyleSlide(styleIndex + 1);
  }


  function previousStyleSlide() {
    showStyleSlide(styleIndex - 1);
  }


  function startStyleSlideshow() {

    clearInterval(styleTimer);

    if (styleSlides.length > 1) {
      styleTimer = setInterval(
        nextStyleSlide,
        5000
      );
    }
  }


  if (styleSlides.length) {

    showStyleSlide(0);

    if (styleNext) {
      styleNext.addEventListener("click", () => {
        nextStyleSlide();
        startStyleSlideshow();
      });
    }

    if (stylePrev) {
      stylePrev.addEventListener("click", () => {
        previousStyleSlide();
        startStyleSlideshow();
      });
    }

    const styleShowcase =
      document.querySelector(".style-showcase");

    if (styleShowcase) {

      styleShowcase.addEventListener(
        "mouseenter",
        () => clearInterval(styleTimer)
      );

      styleShowcase.addEventListener(
        "mouseleave",
        startStyleSlideshow
      );

      styleShowcase.addEventListener(
        "touchstart",
        () => clearInterval(styleTimer),
        { passive: true }
      );

      styleShowcase.addEventListener(
        "touchend",
        startStyleSlideshow,
        { passive: true }
      );
    }

    startStyleSlideshow();
  }


  /* =========================
     IMAGE ERROR HANDLING
     ========================= */

  document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

      img.classList.add("image-error");

      /*
       * Keep broken-image filenames from becoming
       * visually prominent.
       */
      img.alt = "";

    });

  });


  /* =========================
     FREE SAMPLE BUTTON
     ========================= */

  const freeSampleButtons =
    document.querySelectorAll(
      'a[href="#free-sample"], a[href="#"]'
    );

  freeSampleButtons.forEach(button => {

    const text =
      button.textContent.trim().toLowerCase();

    if (
      text.includes("free sample") &&
      button.getAttribute("href") === "#"
    ) {

      button.addEventListener("click", event => {

        event.preventDefault();

        alert(
          "Our Free Sample request form will be available shortly."
        );

      });

    }

  });


  /* =========================
     CURRENT YEAR
     ========================= */

  const yearElement =
    document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent =
      new Date().getFullYear();
  }


  /* =========================
     CLOSE MOBILE MENU ON
     OUTSIDE CLICK
     ========================= */

  document.addEventListener("click", event => {

    if (
      !mainNav ||
      !menuToggle ||
      !mainNav.classList.contains("open")
    ) {
      return;
    }

    if (
      !mainNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {

      mainNav.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });


  /* =========================
     KEYBOARD ACCESSIBILITY
     ========================= */

  document.addEventListener("keydown", event => {

    if (event.key === "ArrowRight") {

      if (
        document.activeElement &&
        document.activeElement.closest(".portfolio-slider")
      ) {
        nextPortfolioSlide();
        startPortfolioSlideshow();
      }

      if (
        document.activeElement &&
        document.activeElement.closest(".style-showcase")
      ) {
        nextStyleSlide();
        startStyleSlideshow();
      }

    }

    if (event.key === "ArrowLeft") {

      if (
        document.activeElement &&
        document.activeElement.closest(".portfolio-slider")
      ) {
        previousPortfolioSlide();
        startPortfolioSlideshow();
      }

      if (
        document.activeElement &&
        document.activeElement.closest(".style-showcase")
      ) {
        previousStyleSlide();
        startStyleSlideshow();
      }

    }

  });

});

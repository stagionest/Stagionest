
document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
     MOBILE NAVIGATION
  ========================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }


  /* =========================================
     GENERIC SLIDER
  ========================================= */

  function createSlider({
    slideSelector,
    previousId,
    nextId,
    counterId,
    containerSelector,
    interval
  }) {
    const slides = Array.from(document.querySelectorAll(slideSelector));
    const previousButton = document.getElementById(previousId);
    const nextButton = document.getElementById(nextId);
    const counter = document.getElementById(counterId);
    const container = document.querySelector(containerSelector);

    if (!slides.length) return;

    let currentIndex = 0;
    let timer = null;
    let touchStartX = 0;
    let touchEndX = 0;

    /* -----------------------------------------
       SHOW SLIDE
    ----------------------------------------- */

    function render(index) {
      if (index < 0) {
        index = slides.length - 1;
      }

      if (index >= slides.length) {
        index = 0;
      }

      currentIndex = index;

      slides.forEach((slide, i) => {
        const isActive = i === currentIndex;

        slide.classList.toggle("active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
      });

      if (counter) {
        counter.textContent = `${currentIndex + 1} / ${slides.length}`;
      }
    }


    /* -----------------------------------------
       STOP AUTOPLAY
    ----------------------------------------- */

    function stopAutoPlay() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }


    /* -----------------------------------------
       START / RESTART AUTOPLAY
    ----------------------------------------- */

    function restartAutoPlay() {
      stopAutoPlay();

      if (slides.length > 1) {
        timer = setInterval(() => {
          showNext();
        }, interval);
      }
    }


    /* -----------------------------------------
       NEXT / PREVIOUS
    ----------------------------------------- */

    function showNext() {
      render(currentIndex + 1);
      restartAutoPlay();
    }

    function showPrevious() {
      render(currentIndex - 1);
      restartAutoPlay();
    }


    /* -----------------------------------------
       BUTTONS
    ----------------------------------------- */

    if (nextButton) {
      nextButton.addEventListener("click", showNext);
    }

    if (previousButton) {
      previousButton.addEventListener("click", showPrevious);
    }


    /* -----------------------------------------
       TOUCH / SWIPE SUPPORT
    ----------------------------------------- */

    if (container) {
      container.addEventListener(
        "touchstart",
        (event) => {
          if (!event.touches || !event.touches.length) return;

          touchStartX = event.touches[0].clientX;
          touchEndX = touchStartX;
        },
        { passive: true }
      );

      container.addEventListener(
        "touchmove",
        (event) => {
          if (!event.touches || !event.touches.length) return;

          touchEndX = event.touches[0].clientX;
        },
        { passive: true }
      );

      container.addEventListener(
        "touchend",
        () => {
          const swipeDistance = touchEndX - touchStartX;
          const minimumSwipeDistance = 50;

          if (Math.abs(swipeDistance) >= minimumSwipeDistance) {
            if (swipeDistance < 0) {
              showNext();
            } else {
              showPrevious();
            }
          }

          touchStartX = 0;
          touchEndX = 0;
        },
        { passive: true }
      );
    }


    /* -----------------------------------------
       INITIALIZE
    ----------------------------------------- */

    render(0);
    restartAutoPlay();
  }


  /* =========================================
     PORTFOLIO BEFORE / AFTER SLIDER
     ========================================= */

  createSlider({
    slideSelector: ".portfolio-card",
    previousId: "prevProject",
    nextId: "nextProject",
    counterId: "sliderCounter",
    containerSelector: ".portfolio-slider",
    interval: 6000
  });


  /* =========================================
     ONE ROOM — DIFFERENT POSSIBILITIES SLIDER
     ========================================= */

  createSlider({
    slideSelector: ".style-slide",
    previousId: "prevStyle",
    nextId: "nextStyle",
    counterId: "styleCounter",
    containerSelector: ".style-showcase",
    interval: 5000
  });


  /* =========================================
     IMAGE ERROR HANDLING
  ========================================= */

  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      /*
       * Special fallback for the Minimalist City image
       * in case the primary filename/path is unavailable.
       */

      if (
        image.src.includes("minimalist-city-living-room") &&
        !image.dataset.fallbackUsed
      ) {
        image.dataset.fallbackUsed = "true";

        image.src =
          "Images/minimalist-city-living-room.webp";
      }
    });
  });


  /* =========================================
     CURRENT YEAR
  ========================================= */

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  /* =========================================
     ESCAPE KEY
     CLOSES MOBILE MENU
  ========================================= */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav && menuToggle) {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

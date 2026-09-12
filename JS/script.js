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

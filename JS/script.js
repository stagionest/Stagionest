
/* =========================================================
   STAGIONEST
   WEBSITE JAVASCRIPT
   ========================================================= */


/* ================= MOBILE NAVIGATION ================= */

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


/* ================= CURRENT YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* ================= IMAGE ERROR CHECK ================= */

/*
  This does not replace your images.
  It simply adds a class if an image path is wrong,
  making the problem easier to identify during testing.
*/

const images = document.querySelectorAll("img");

images.forEach(function (image) {

  image.addEventListener("error", function () {

    image.classList.add("image-error");

    console.warn(
      "StagioNest image could not be loaded:",
      image.getAttribute("src")
    );

  });

});


/* ================= SMOOTH ANCHOR OFFSET ================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

  link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (
      targetId &&
      targetId !== "#" &&
      document.querySelector(targetId)
    ) {

      event.preventDefault();

      const target = document.querySelector(targetId);

      const header = document.querySelector(".site-header");

      const headerHeight = header
        ? header.offsetHeight
        : 0;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        10;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

    }

  });

});

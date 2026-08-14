
/* =========================================================
   STAGIONEST
   Website JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
       ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {
            mainNav.classList.toggle("active");
        });

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {
                mainNav.classList.remove("active");
            });

        });

    }


    /* =========================
       ORDER BUTTON
       ========================= */

    const orderButton = document.getElementById("orderButton");

    if (orderButton) {

        orderButton.addEventListener("click", function (event) {

            const orderLink = "#";

            if (orderLink === "#") {
                event.preventDefault();

                alert(
                    "Your order form link has not been added yet. Replace the # in index.html with your Google Form URL."
                );
            }

        });

    }


    /* =========================
       CURRENT YEAR
       ========================= */

    const yearElement = document.querySelector(".footer-bottom p");

    if (yearElement) {

        const currentYear = new Date().getFullYear();

        yearElement.innerHTML =
            "© " + currentYear + " StagioNest. All rights reserved.";

    }

});

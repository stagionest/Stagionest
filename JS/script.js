/* =========================================================
   STAGIONEST — FINAL REVISED SCRIPT.JS
   Matches the current index.html
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

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

        mainNav.querySelectorAll("a").forEach(function (link) {

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


    /* =====================================================
       PORTFOLIO SLIDER
       ===================================================== */

    const portfolioSlides =
        document.querySelectorAll(".portfolio-card");

    const portfolioPrev =
        document.getElementById("prevProject");

    const portfolioNext =
        document.getElementById("nextProject");

    const portfolioCounter =
        document.getElementById("sliderCounter");

    const portfolioContainer =
        document.getElementById("portfolioSlider");

    let portfolioIndex = 0;
    let portfolioTimer = null;


    function showPortfolio(index) {

        if (!portfolioSlides.length) {
            return;
        }

        if (index < 0) {
            index = portfolioSlides.length - 1;
        }

        if (index >= portfolioSlides.length) {
            index = 0;
        }

        portfolioIndex = index;

        portfolioSlides.forEach(function (slide, i) {

            if (i === portfolioIndex) {
                slide.classList.add("active");
                slide.setAttribute("aria-hidden", "false");
            } else {
                slide.classList.remove("active");
                slide.setAttribute("aria-hidden", "true");
            }
        });

        if (portfolioCounter) {
            portfolioCounter.textContent =
                (portfolioIndex + 1) +
                " / " +
                portfolioSlides.length;
        }
    }


    function nextPortfolio() {
        showPortfolio(portfolioIndex + 1);
    }


    function previousPortfolio() {
        showPortfolio(portfolioIndex - 1);
    }


    function startPortfolioAutoPlay() {

        stopPortfolioAutoPlay();

        if (portfolioSlides.length > 1) {

            portfolioTimer = setInterval(
                nextPortfolio,
                6000
            );
        }
    }


    function stopPortfolioAutoPlay() {

        if (portfolioTimer !== null) {

            clearInterval(portfolioTimer);

            portfolioTimer = null;
        }
    }


    if (portfolioNext) {

        portfolioNext.addEventListener(
            "click",
            function () {

                nextPortfolio();

                startPortfolioAutoPlay();
            }
        );
    }


    if (portfolioPrev) {

        portfolioPrev.addEventListener(
            "click",
            function () {

                previousPortfolio();

                startPortfolioAutoPlay();
            }
        );
    }


    if (portfolioContainer) {

        portfolioContainer.addEventListener(
            "mouseenter",
            stopPortfolioAutoPlay
        );

        portfolioContainer.addEventListener(
            "mouseleave",
            startPortfolioAutoPlay
        );
    }


    /*
     * Mobile swipe
     */

    if (portfolioContainer) {

        let portfolioTouchStart = 0;

        portfolioContainer.addEventListener(
            "touchstart",
            function (event) {

                portfolioTouchStart =
                    event.changedTouches[0].screenX;
            },
            { passive: true }
        );


        portfolioContainer.addEventListener(
            "touchend",
            function (event) {

                const touchEnd =
                    event.changedTouches[0].screenX;

                const distance =
                    touchEnd - portfolioTouchStart;

                if (Math.abs(distance) < 45) {
                    return;
                }

                if (distance < 0) {
                    nextPortfolio();
                } else {
                    previousPortfolio();
                }

                startPortfolioAutoPlay();
            },
            { passive: true }
        );
    }


    /*
     * IMPORTANT:
     * Start exactly at Project 1.
     */

    showPortfolio(0);

    startPortfolioAutoPlay();


    /* =====================================================
       DESIGN STYLE SLIDER
       ===================================================== */

    const styleSlides =
        document.querySelectorAll(".style-slide");

    const stylePrev =
        document.getElementById("prevStyle");

    const styleNext =
        document.getElementById("nextStyle");

    const styleCounter =
        document.getElementById("styleCounter");

    const styleContainer =
        document.querySelector(".style-showcase");

    let styleIndex = 0;
    let styleTimer = null;


    function showStyle(index) {

        if (!styleSlides.length) {
            return;
        }

        if (index < 0) {
            index = styleSlides.length - 1;
        }

        if (index >= styleSlides.length) {
            index = 0;
        }

        styleIndex = index;

        styleSlides.forEach(function (slide, i) {

            if (i === styleIndex) {
                slide.classList.add("active");
                slide.setAttribute("aria-hidden", "false");
            } else {
                slide.classList.remove("active");
                slide.setAttribute("aria-hidden", "true");
            }
        });

        if (styleCounter) {

            styleCounter.textContent =
                (styleIndex + 1) +
                " / " +
                styleSlides.length;
        }
    }


    function nextStyle() {
        showStyle(styleIndex + 1);
    }


    function previousStyle() {
        showStyle(styleIndex - 1);
    }


    function startStyleAutoPlay() {

        stopStyleAutoPlay();

        if (styleSlides.length > 1) {

            styleTimer = setInterval(
                nextStyle,
                5000
            );
        }
    }


    function stopStyleAutoPlay() {

        if (styleTimer !== null) {

            clearInterval(styleTimer);

            styleTimer = null;
        }
    }


    if (styleNext) {

        styleNext.addEventListener(
            "click",
            function () {

                nextStyle();

                startStyleAutoPlay();
            }
        );
    }


    if (stylePrev) {

        stylePrev.addEventListener(
            "click",
            function () {

                previousStyle();

                startStyleAutoPlay();
            }
        );
    }


    if (styleContainer) {

        styleContainer.addEventListener(
            "mouseenter",
            stopStyleAutoPlay
        );

        styleContainer.addEventListener(
            "mouseleave",
            startStyleAutoPlay
        );
    }


    /*
     * Mobile swipe for design styles
     */

    if (styleContainer) {

        let styleTouchStart = 0;

        styleContainer.addEventListener(
            "touchstart",
            function (event) {

                styleTouchStart =
                    event.changedTouches[0].screenX;
            },
            { passive: true }
        );


        styleContainer.addEventListener(
            "touchend",
            function (event) {

                const touchEnd =
                    event.changedTouches[0].screenX;

                const distance =
                    touchEnd - styleTouchStart;

                if (Math.abs(distance) < 45) {
                    return;
                }

                if (distance < 0) {
                    nextStyle();
                } else {
                    previousStyle();
                }

                startStyleAutoPlay();
            },
            { passive: true }
        );
    }


    /*
     * Start at Starting Point.
     */

    showStyle(0);

    startStyleAutoPlay();


    /* =====================================================
       IMAGE ERROR HANDLING
       ===================================================== */

    document.querySelectorAll("img").forEach(function (image) {

        image.addEventListener("error", function () {

            image.classList.add("image-error");

            /*
             * Keep the surrounding layout intact.
             */
            image.alt = "Image unavailable";
        });
    });


    /* =====================================================
       FOOTER YEAR
       ===================================================== */

    const yearElement =
        document.getElementById("year");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }


    /* =====================================================
       ESCAPE KEY — CLOSE MOBILE NAV
       ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                mainNav &&
                mainNav.classList.contains("open")
            ) {

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
        }
    );

});

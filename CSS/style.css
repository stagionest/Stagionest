
/* =========================================================
   STAGIONEST
   PROFESSIONAL VIRTUAL STAGING WEBSITE
   FINAL REVISED STYLE SHEET
   ========================================================= */


/* =========================
   GLOBAL
   ========================= */

:root {
  --bg: #f8f7f4;
  --white: #ffffff;
  --text: #202522;
  --muted: #69716c;
  --green: #365346;
  --green-dark: #2d463b;
  --green-light: #e9efeb;
  --border: #d9ddd9;
  --shadow: 0 18px 45px rgba(25, 39, 32, 0.08);
  --radius: 22px;
  --container: 1120px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family:
    Arial,
    Helvetica,
    sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button {
  font: inherit;
}

.container {
  width: min(var(--container), 92%);
  margin: 0 auto;
}

.narrow {
  max-width: 760px;
}

.text-center {
  text-align: center;
}


/* =========================
   TYPOGRAPHY
   ========================= */

h1,
h2,
h3 {
  line-height: 1.15;
}

h1 {
  font-size: clamp(2.6rem, 5vw, 4.8rem);
  letter-spacing: -0.045em;
}

h2 {
  font-size: clamp(2rem, 4vw, 3.2rem);
  letter-spacing: -0.035em;
}

h3 {
  font-size: 1.35rem;
}

p {
  color: var(--muted);
}


/* =========================
   HEADER
   ========================= */

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.97);
  border-bottom: 1px solid rgba(32, 37, 34, 0.08);
  backdrop-filter: blur(12px);
}

.header-inner {
  min-height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.brand img {
  width: 255px;
  height: auto;
  object-fit: contain;
}

.main-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 34px;
}

.main-nav a {
  position: relative;
  font-weight: 700;
  color: #3f4642;
  transition:
    color 0.2s ease,
    opacity 0.2s ease;
}

.main-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 0;
  height: 2px;
  background: var(--green);
  transition: width 0.2s ease;
}

.main-nav a:hover {
  color: var(--green);
}

.main-nav a:hover::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid var(--border);
  background: var(--white);
  border-radius: 10px;
  color: var(--green);
  cursor: pointer;
  font-size: 1.5rem;
}


/* =========================
   HERO
   ========================= */

.hero {
  padding: 52px 0 70px;
  background: var(--bg);
}

.hero-grid {
  display: grid;
  grid-template-columns:
    minmax(0, 0.95fr)
    minmax(0, 1.05fr);
  align-items: stretch;
  gap: 34px;
}

.hero-content {
  background: var(--green);
  color: var(--white);
  border-radius: var(--radius);
  padding: clamp(40px, 5vw, 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-content p {
  color: rgba(255, 255, 255, 0.78);
}

.eyebrow {
  display: inline-block;
  margin-bottom: 18px;
  color: currentColor;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.18em;
}

.hero-content h1 {
  max-width: 700px;
  color: var(--white);
}

.hero-content h1 span {
  display: block;
  color: #dce8e0;
}

.hero-text {
  max-width: 610px;
  margin-top: 24px;
  font-size: 1.08rem;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.btn {
  min-height: 50px;
  padding: 13px 25px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 800;
  border: 1px solid transparent;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--white);
  color: var(--green);
}

.btn-primary:hover {
  background: #edf2ef;
}

.btn-secondary {
  background: transparent;
  color: var(--white);
  border-color: rgba(255, 255, 255, 0.6);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

.hero-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 42px;
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
}

.hero-feature {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hero-feature strong {
  color: var(--white);
  font-size: 0.88rem;
}

.hero-feature span {
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.75rem;
}

.hero-image-wrapper {
  position: relative;
  min-height: 580px;
  border-radius: var(--radius);
  overflow: hidden;
  background: #e8e7e2;
  box-shadow: var(--shadow);
}

.hero-image {
  width: 100%;
  height: 100%;
  min-height: 580px;
  object-fit: contain;
  background: #eee;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(
      to top,
      rgba(15, 25, 21, 0.55),
      transparent 35%
    );
}

.hero-image-label {
  position: absolute;
  left: 28px;
  right: 28px;
  bottom: 26px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--white);
}

.hero-image-label span {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.hero-image-label strong {
  font-size: 1.15rem;
}


/* =========================
   GENERAL SECTIONS
   ========================= */

.section {
  padding: 96px 0;
}

.section-heading {
  max-width: 760px;
  margin: 0 auto 48px;
}

.section-label {
  display: inline-block;
  margin-bottom: 14px;
  color: var(--green);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.18em;
}

.section-heading p {
  margin-top: 18px;
  font-size: 1.05rem;
}


/* =========================
   PORTFOLIO INTRO
   ========================= */

.portfolio-intro {
  padding-top: 70px;
  padding-bottom: 36px;
}

.portfolio-intro p {
  margin-top: 16px;
  font-size: 1.05rem;
}


/* =========================
   PORTFOLIO
   ========================= */

.portfolio-section {
  padding: 0 0 105px;
}

.portfolio-slider {
  position: relative;
  min-height: 620px;
}

.portfolio-card {
  display: none;
  animation: portfolioFade 0.45s ease;
}

.portfolio-card.active {
  display: block;
}

@keyframes portfolioFade {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.portfolio-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.portfolio-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  border-radius: 18px;
  background: #e5e5e1;
  box-shadow: var(--shadow);
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-badge {
  position: absolute;
  z-index: 2;
  top: 16px;
  left: 16px;
  padding: 7px 11px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.93);
  color: #303733;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.image-badge.after {
  background: var(--green);
  color: var(--white);
}

.portfolio-info {
  max-width: 760px;
  margin: 30px auto 0;
  text-align: center;
}

.portfolio-info h3 {
  font-size: 1.55rem;
}

.portfolio-info p {
  max-width: 650px;
  margin: 10px auto 0;
}

.slider-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 30px;
}

.slider-button {
  width: 46px;
  height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--white);
  color: var(--green);
  cursor: pointer;
  font-size: 1.2rem;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.slider-button:hover {
  background: var(--green);
  color: var(--white);
  transform: translateY(-2px);
}

.slider-counter {
  min-width: 55px;
  text-align: center;
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 700;
}


/* =========================
   DESIGN STYLES
   ========================= */

.styles-section {
  background: #eeeee9;
}

.style-showcase {
  position: relative;
  max-width: 1050px;
  margin: 0 auto;
}

.style-slide {
  display: none;
  animation: styleFade 0.45s ease;
}

.style-slide.active {
  display: block;
}

@keyframes styleFade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.style-image-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  border-radius: 20px;
  background: #ddd;
  box-shadow: var(--shadow);
}

.style-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.style-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 8px 13px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.94);
  color: var(--green);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.style-caption {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 24px;
  padding: 0 10px;
}

.style-number {
  flex-shrink: 0;
  color: var(--green);
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.1em;
}

.style-caption h3 {
  font-size: 1.55rem;
}

.style-caption p {
  margin-top: 7px;
}

.style-controls {
  margin-top: 28px;
}


/* =========================
   SERVICES
   ========================= */

.services-section {
  background: var(--bg);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.service-card {
  padding: 34px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: 0 10px 28px rgba(25, 39, 32, 0.04);
}

.service-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  border-radius: 50%;
  background: var(--green-light);
  color: var(--green);
  font-size: 0.75rem;
  font-weight: 900;
}

.service-card h3 {
  margin-bottom: 12px;
}

.service-card p {
  font-size: 0.95rem;
}


/* =========================
   HOW IT WORKS
   ========================= */

.process-section {
  background: #f0f1ed;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.process-step {
  position: relative;
  padding: 30px 24px;
  background: var(--white);
  border-radius: 18px;
  border: 1px solid var(--border);
}

.step-number {
  display: block;
  margin-bottom: 22px;
  color: var(--green);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.process-step h3 {
  font-size: 1.15rem;
  margin-bottom: 10px;
}

.process-step p {
  font-size: 0.9rem;
}


/* =========================
   PRICING
   ========================= */

.pricing-section {
  background: var(--bg);
  padding-bottom: 120px;
}

.pricing-note {
  margin-top: 20px;
  font-size: 0.95rem;
}

.pricing-note strong {
  color: var(--text);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  align-items: stretch;
}

.pricing-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 475px;
  padding: 38px 32px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 22px;
  box-shadow: 0 10px 28px rgba(25, 39, 32, 0.04);
  text-align: center;
}

.pricing-card.featured {
  border: 2px solid var(--green);
  box-shadow: 0 18px 42px rgba(25, 39, 32, 0.1);
  transform: translateY(-7px);
}

.popular-label {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 14px;
  border-radius: 999px;
  background: var(--green);
  color: var(--white);
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  white-space: nowrap;
}

.pricing-card h3 {
  font-size: 1.35rem;
}

.price {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 22px;
}

.price strong {
  color: var(--green);
  font-size: 2.8rem;
  line-height: 1;
  letter-spacing: -0.04em;
}

.price span {
  margin-top: 7px;
  color: var(--muted);
  font-size: 0.85rem;
}

.custom-price strong {
  font-size: 2rem;
  margin-top: 14px;
}

.price-description {
  min-height: 48px;
  margin-top: 18px;
}

.pricing-features {
  list-style: none;
  margin: 25px 0 30px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.pricing-features li {
  color: #59615d;
  font-size: 0.9rem;
}

.pricing-features li::before {
  content: "✓";
  margin-right: 8px;
  color: var(--green);
  font-weight: 900;
}

.price-button {
  width: 100%;
  min-height: 50px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border: 1px solid var(--green);
  border-radius: 999px;
  background: var(--green);
  color: var(--white);
  font-weight: 800;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.price-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(30, 50, 40, 0.15);
}

/*
   Outline buttons:
   Single Image
   Complete
   Custom Order
*/

.price-button.outline-button {
  background: transparent;
  color: var(--green);
  border: 1px solid var(--green);
}

.price-button.outline-button:hover {
  background: var(--green);
  color: var(--white);
}


/* =========================
   CTA / GET STARTED
   ========================= */

.cta-section {
  background: var(--green);
  color: var(--white);
  padding: 105px 0;
  margin-top: 35px;
}

.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
}

.cta-content {
  max-width: 760px;
}

.cta-content .eyebrow {
  margin-bottom: 18px;
  color: rgba(255, 255, 255, 0.75);
}

.cta-content h2 {
  color: var(--white);
  font-size: clamp(2.3rem, 5vw, 3.5rem);
}

.cta-content p {
  max-width: 650px;
  margin-top: 18px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.05rem;
}

.cta-action {
  flex-shrink: 0;
}

.btn-light {
  min-width: 220px;
  background: var(--white);
  color: var(--green);
}

.btn-light:hover {
  background: #edf2ef;
}


/* =========================
   FOOTER
   ========================= */

.site-footer {
  background: #202b26;
  color: var(--white);
}

.footer-grid {
  display: grid;
  grid-template-columns:
    minmax(0, 1.8fr)
    minmax(140px, 0.7fr)
    minmax(160px, 0.8fr);
  gap: 60px;
  padding: 70px 0;
}

.footer-brand {
  max-width: 390px;
}

.footer-logo {
  width: 245px;
  height: auto;
  display: block;
  margin-bottom: 22px;
  background: transparent;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.92rem;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.footer-column h3 {
  margin-bottom: 10px;
  color: var(--white);
  font-size: 1rem;
}

.footer-column a {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-column a:hover {
  color: var(--white);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 22px 0;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.48);
  font-size: 0.8rem;
}


/* =========================
   BROKEN IMAGE HANDLING
   ========================= */

.image-error {
  display: none !important;
}


/* =========================
   FOCUS ACCESSIBILITY
   ========================= */

a:focus-visible,
button:focus-visible {
  outline: 3px solid rgba(54, 83, 70, 0.35);
  outline-offset: 4px;
}


/* =========================================================
   TABLET
   ========================================================= */

@media (max-width: 1050px) {

  .header-inner {
    min-height: 92px;
  }

  .brand img {
    width: 220px;
  }

  .main-nav {
    gap: 22px;
  }

  .main-nav a {
    font-size: 0.9rem;
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }

  .hero-content {
    min-height: auto;
  }

  .hero-image-wrapper {
    min-height: auto;
  }

  .hero-image {
    min-height: auto;
    height: auto;
    object-fit: contain;
  }

  .services-grid {
    grid-template-columns: 1fr 1fr;
  }

  .process-grid {
    grid-template-columns: 1fr 1fr;
  }

  .pricing-grid {
    grid-template-columns: 1fr 1fr;
  }

  .pricing-card.featured {
    transform: none;
  }

}


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

@media (max-width: 820px) {

  .header-inner {
    min-height: 82px;
  }

  .brand img {
    width: 205px;
  }

  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .main-nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 10px 4%;
    background: var(--white);
    border-bottom: 1px solid var(--border);
    box-shadow: 0 15px 30px rgba(20, 30, 25, 0.08);
  }

  .main-nav.open {
    display: flex;
  }

  .main-nav a {
    padding: 15px 10px;
    border-bottom: 1px solid #eef0ed;
  }

  .main-nav a:last-child {
    border-bottom: none;
  }

  .main-nav a::after {
    display: none;
  }

}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 680px) {

  body {
    font-size: 15px;
  }

  .container {
    width: min(92%, 560px);
  }

  .hero {
    padding: 24px 0 55px;
  }

  .hero-content {
    padding: 34px 25px;
    border-radius: 18px;
  }

  .hero-content h1 {
    font-size: clamp(2.35rem, 11vw, 3.3rem);
  }

  .hero-text {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-buttons .btn {
    width: 100%;
  }

  .hero-features {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .hero-image-wrapper {
    min-height: auto;
    border-radius: 18px;
  }

  .hero-image {
    width: 100%;
    height: auto;
    min-height: 0;
    object-fit: contain;
  }

  .hero-overlay {
    background:
      linear-gradient(
        to top,
        rgba(15, 25, 21, 0.55),
        transparent 45%
      );
  }

  .hero-image-label {
    left: 18px;
    right: 18px;
    bottom: 18px;
  }

  .section {
    padding: 72px 0;
  }

  .portfolio-intro {
    padding-top: 55px;
    padding-bottom: 30px;
  }

  .portfolio-section {
    padding-bottom: 78px;
  }

  .portfolio-slider {
    min-height: auto;
  }

  /*
     Keep BEFORE and AFTER side-by-side on mobile.
     Both boxes remain equal in size.
  */

  .portfolio-images {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .portfolio-image {
    aspect-ratio: 1 / 1;
    border-radius: 12px;
  }

  .portfolio-image img {
    object-fit: cover;
  }

  .image-badge {
    top: 8px;
    left: 8px;
    padding: 5px 7px;
    font-size: 0.55rem;
  }

  .portfolio-info {
    margin-top: 22px;
  }

  .portfolio-info h3 {
    font-size: 1.25rem;
  }

  .portfolio-info p {
    font-size: 0.9rem;
  }

  .slider-controls {
    margin-top: 22px;
  }

  .slider-button {
    width: 42px;
    height: 42px;
  }


  /* DESIGN STYLES */

  .styles-section {
    padding-top: 70px;
  }

  .style-showcase {
    width: 100%;
  }

  .style-image-wrap {
    aspect-ratio: 4 / 3;
    border-radius: 15px;
  }

  .style-image-wrap img {
    object-fit: cover;
  }

  .style-badge {
    top: 12px;
    left: 12px;
    padding: 6px 9px;
    font-size: 0.58rem;
  }

  .style-caption {
    gap: 14px;
    margin-top: 18px;
    padding: 0;
  }

  .style-caption h3 {
    font-size: 1.25rem;
  }

  .style-caption p {
    font-size: 0.9rem;
  }


  /* SERVICES */

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    padding: 28px 24px;
  }


  /* PROCESS */

  .process-grid {
    grid-template-columns: 1fr;
  }


  /* PRICING */

  .pricing-section {
    padding-bottom: 82px;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .pricing-card {
    min-height: 0;
    padding: 34px 25px;
  }

  .pricing-card.featured {
    transform: none;
  }

  .pricing-features {
    margin-bottom: 28px;
  }


  /* CTA */

  .cta-section {
    margin-top: 30px;
    padding: 72px 0;
  }

  .cta-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }

  .cta-content h2 {
    font-size: 2.3rem;
  }

  .cta-action {
    width: 100%;
  }

  .btn-light {
    width: 100%;
  }


  /* FOOTER */

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 38px;
    padding: 55px 0;
  }

  .footer-logo {
    width: 220px;
  }

}


/* =========================================================
   SMALL MOBILE
   ========================================================= */

@media (max-width: 420px) {

  .brand img {
    width: 185px;
  }

  .hero-content {
    padding: 30px 20px;
  }

  .hero-content h1 {
    font-size: 2.25rem;
  }

  .portfolio-images {
    gap: 6px;
  }

  .portfolio-image {
    border-radius: 10px;
  }

  .image-badge {
    top: 6px;
    left: 6px;
  }

  .style-caption {
    gap: 10px;
  }

  .pricing-card {
    padding: 30px 20px;
  }

}

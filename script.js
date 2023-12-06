"use strict";

const allLinkElements = document.querySelectorAll("a:link");
const heroSectionElement = document.querySelector(".section-hero");
const mobileNavButton = document.querySelector(".header__btn");

/* Congifuring scroll behavior for navigation links */
allLinkElements.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    /* Configuring links which goes to top of the page */
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });

      /* Configuring links which scrolls to target elements */
    } else if (href.startsWith("#")) {
      e.preventDefault();
      const elementToGetIntoView = document.querySelector(href);
      elementToGetIntoView.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* Declaring observer to observe intersection of hero element */
const observer = new IntersectionObserver(
  (entries) => {
    const targetElement = entries[0];

    if (!targetElement.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
      document.body.classList.remove("nav-open");
    }
  },
  {
    rootMargin: "-81px",
  }
);

/* Observing Hero section */
observer.observe(heroSectionElement);

mobileNavButton.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

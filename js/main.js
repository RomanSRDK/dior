const firstSwiper = new Swiper(".top__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

const secondSwiper = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  // Navigation arrows
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

/**
 * Accordion
 */

const accordionEl = document
  .querySelectorAll(".accordion__intro")
  .forEach((item) =>
    item.addEventListener("click", () => {
      item.parentNode.classList.toggle("active");
    })
  );

/**
 * Add YouTube Player
 */

const videoContainer = document.querySelector(".video__box");
const videoPlayBtn = document.querySelector(".video__btn");
const BASE_URL = "https://www.youtube-nocookie.com/embed/jcjoIOwnxKA";
const markupString = `<iframe src="${BASE_URL}?autoplay=1&rel=0&color=white" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

videoPlayBtn.addEventListener("click", () => {
  videoContainer.style.backgroundImage = "none";
  videoContainer.insertAdjacentHTML("beforeend", markupString);
});

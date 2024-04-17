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

const accordionEl = document
  .querySelectorAll(".accordion__trigger")
  .forEach((item) =>
    item.addEventListener("click", () => {
      item.parentNode.classList.toggle("accordion__item--active");
    })
  );

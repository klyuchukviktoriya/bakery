const swiperEl = document.querySelector(".swiper");

const initSwiper = () => {
  new Swiper(".swiper", {
    speed: 400,
    slidesPerView: 1,

    breakpoints: {
      768: { slidesPerView: 2 },
      1280: { slidesPerView: 3 }
    },

    pagination: {
      el: ".pagination",
      bulletClass: "pagination__button",
      bulletActiveClass: "pagination__button--active"
    },

    navigation: {
      nextEl: ".formats__button--next",
      prevEl: ".formats__button--prev"
    }
  });
};

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    initSwiper();
    observer.disconnect();
  }
});

observer.observe(swiperEl);

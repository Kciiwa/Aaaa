
import { resizableSwiper } from "./sliders";

window.addEventListener('DOMContentLoaded', () => {
  resizableSwiper(
    '(max-width: 768px)',
    '.slider-3',
    {
      loop: true,
      spaceBetween: 15,
      slidesPerView: 1.1,
      breakpoints: {
        320: {
          slidesPerView: 1.2
        },
        480: {
          slidesPerView: 1.7
        },
        640: {
          slidesPerView: 2.3
        },
      },
          
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
  );
});
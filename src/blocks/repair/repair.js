import { showHideList } from "../sliders/sliders";
import { resizableSwiper } from "../sliders/sliders";

window.addEventListener('DOMContentLoaded', () => {
  resizableSwiper(
    '(max-width: 768px)',
    '.slider-2',
    {
      loop: true,
      spaceBetween: 15,
      slidesPerView: 1.2,
      breakpoints: {
        320: {
          slidesPerView: 1.5
        },
        480: {
          slidesPerView: 1.8
        },
        640: {
          slidesPerView: 2.5
        },
      },
          
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
  );
});

let btnRepair = document.querySelector('.read-more__btn--repair');
btnRepair.addEventListener('click', function() {
  showHideList (
    document.querySelector('.read-more__btn--repair'),
    document.querySelector('.repair-list'),
    document.querySelector('.read-more__icon--repair'),
    'repair-list--hidden',
    'Показать все',
    'Скрыть'
  )
}
);


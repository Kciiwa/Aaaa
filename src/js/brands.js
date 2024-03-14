import { showHideList } from  './sliders';
import { resizableSwiper } from './sliders';

window.addEventListener('DOMContentLoaded', () => {
  resizableSwiper(
    '(max-width: 768px)',
    '.slider-1',
    {
      loop: true,
      spaceBetween: 15,
      slidesPerView: 1.1,
      breakpoints: {
        320: {
          slidesPerView: 1.2
        },
        480: {
          slidesPerView: 1.8
        },
        640: {
          slidesPerView: 2.5
        }

      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
  );
});

let btnBrands = document.querySelector('.read-more__btn--brands');
btnBrands.addEventListener('click', function() {
  showHideList (
    btnBrands,
    document.querySelector('.brand-list'),
    document.querySelector('.read-more__icon--brands'),
    'brand-list--hidden',
    'Показать все',
    'Скрыть'
  )
}
);
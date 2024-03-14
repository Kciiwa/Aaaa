import { showHideList } from "./sliders"; 

let btnReadMore = document.querySelector('.read-more__btn--info');

btnReadMore.addEventListener('click', function() {
    showHideList(
        btnReadMore,
        document.querySelector('.info__text'),
        document.querySelector('.read-more__icon--info'),
        'info__text--hidden',
        'Читать далее',
        'Скрыть'
    )
})
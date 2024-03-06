let menuBurger = document.querySelector('.menu-burger');
let btnBurger = document.querySelector('.btn-burger');
let btnClose = document.querySelector('.btn-close');
let mainContent = document.querySelector('.main-content'); 

let pageBody = document.querySelector('.page-body');

btnBurger.addEventListener('click', function(){
    menuBurger.classList.toggle('menu-burger--show');
    mainContent.classList.add('main-content--blur');
    // pageBody.classList.add('page-body--blur');
});

btnClose.addEventListener('click', function() {
    menuBurger.classList.toggle('menu-burger--show');
    mainContent.classList.remove('main-content--blur');
    // pageBody.classList.remove('page-body--blur');
})

document.addEventListener('click', (event) => {
    if (!menuBurger.contains(event.target) && event.target !== btnBurger) {
        menuBurger.classList.add('menu-burger--show');
        mainContent.classList.remove('main-content--blur');
        event.stopPropagation;
    }
});

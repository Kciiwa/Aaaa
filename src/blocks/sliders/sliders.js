function showHideList (
  btnClass,
  listClass,
  iconClass,
  hidingClass,
  showingTextContent,
  hidingTextConten
  ) {
    if(btnClass.textContent === showingTextContent) {
      btnClass.textContent = hidingTextConten;
      iconClass.style.rotate='180deg';
      listClass.classList.remove(hidingClass);
    } else {
      btnClass.textContent = showingTextContent;
      iconClass.style.rotate='';
      listClass.classList.add(hidingClass);
    }
}

const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
  let swiper;

  breakpoint = window.matchMedia(breakpoint);

  const enableSwiper = function(className, settings) {
    swiper = new Swiper(className, settings);
  }

  const checker = function() {
    if (breakpoint.matches) {
      return enableSwiper(swiperClass, swiperSettings);
    } else {
      if (swiper !== undefined) swiper.destroy(true, true);
      return;
    }
  };

  breakpoint.addEventListener('change', checker);
  checker();
}

export { showHideList };
export { resizableSwiper };
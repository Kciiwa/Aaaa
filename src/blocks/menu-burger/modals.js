document.addEventListener('DOMContentLoaded', function() {
  const menuBurger = document.querySelector('.menu-burger');
  const btnBurger = document.querySelector('.btn-burger');
  const btnClose = document.querySelector('.btn-close--js');
  
  const call = document.querySelector('.call');
  const chat = document.querySelector('.chat');

  const idIconBarCallButton = document.getElementById('icon-bar-call');
  const idBurgerCallButton = document.getElementById('burger-call');
  const idBurgerCloseCallButton = document.getElementById('call-close-btn');

  const idIconBarChatButton = document.getElementById('icon-bar-chat');
  const idBurgerChatButton = document.getElementById('burger-chat');
  const idBurgerCloseChatButton = document.getElementById('chat-close-btn');

  // Открытие окон из меню
  btnBurger.addEventListener('click', function() {
    menuBurger.classList.remove('menu-burger--show');
    showOverlay();
  });

  btnClose.addEventListener('click', function() {
    menuBurger.classList.add('menu-burger--show');
    hideOverlay();
  });

  idBurgerCallButton.addEventListener('click', function() {
    call.classList.add('modal--show');
    hideOverlay();
    menuBurger.classList.add('menu-burger--show');
    showOverlay();
  });

  idBurgerCloseCallButton.addEventListener('click', function() {
    call.classList.remove('modal--show');
    hideOverlay();
  });

  idBurgerChatButton.addEventListener('click', function() {
    chat.classList.add('modal--show');
    hideOverlay();
    menuBurger.classList.add('menu-burger--show');
    showOverlay();
  });

  idBurgerCloseChatButton.addEventListener('click', function() {
    chat.classList.remove('modal--show');
    hideOverlay();
  });

  // Открытие окон из icon-bar
  idIconBarCallButton.addEventListener('click', function() {
    call.classList.add('modal--show');
    showOverlay();
  });

  idIconBarChatButton.addEventListener('click', function() {
    chat.classList.add('modal--show');
    showOverlay();
  })


// Функции блюра
  function showOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function() {
      hideOverlay();
      menuBurger.classList.add('menu-burger--show');
      call.classList.remove('modal--show');
      chat.classList.remove('modal--show');
    });
  }

  function hideOverlay() {
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.remove();
    }
  }
});
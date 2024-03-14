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
    document.body.classList.add('page-body--modal-open');
  });

  btnClose.addEventListener('click', function() {
    menuBurger.classList.add('menu-burger--show');
    hideOverlay();
    document.body.classList.remove('page-body--modal-open');
  });

  idBurgerCallButton.addEventListener('click', function() {
    call.classList.add('modal--show');
    hideOverlay();
    menuBurger.classList.add('menu-burger--show');
    showOverlay();
    document.body.classList.add('page-body--modal-open');
  });

  idBurgerCloseCallButton.addEventListener('click', function() {
    call.classList.remove('modal--show');
    hideOverlay();
    document.body.classList.remove('page-body--modal-open');
  });

  idBurgerChatButton.addEventListener('click', function() {
    chat.classList.add('modal--show');
    hideOverlay();
    menuBurger.classList.add('menu-burger--show');
    showOverlay();
    document.body.classList.add('page-body--modal-open');
  });

  idBurgerCloseChatButton.addEventListener('click', function() {
    chat.classList.remove('modal--show');
    hideOverlay();
    document.body.classList.remove('page-body--modal-open');
  });

  // Открытие окон из icon-bar
  idIconBarCallButton.addEventListener('click', function() {
    call.classList.add('modal--show');
    showOverlay();
    document.body.classList.add('page-body--modal-open');
  });

  idIconBarChatButton.addEventListener('click', function() {
    chat.classList.add('modal--show');
    showOverlay();
    document.body.classList.add('page-body--modal-open');
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
      document.body.classList.remove('page-body--modal-open');
    });
  }

  function hideOverlay() {
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.remove();
    }
  }
});
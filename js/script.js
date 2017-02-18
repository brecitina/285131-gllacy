var link = document.querySelector('.js-feedback');
      var popup = document.querySelector('.modal-content');
      var overlay = document.querySelector('.modal-overlay');
      var close = popup.querySelector('.modal-content-close');
      var form = popup.querySelector('form');
      var userName = popup.querySelector('#message-name');
      var userMail = popup.querySelector('#message-mail');
      var userMessage = popup.querySelector('#message-feedback');
      var storageName = localStorage.getItem('feedback-userName');
      var storageMail = localStorage.getItem('feedback-userMail');

      link.addEventListener('click', function(event) {
        event.preventDefault();
        overlay.classList.add('modal-overlay-show');
        popup.classList.add('modal-content-show');
        userName.focus();
        if (storageName) {
          userName.value = storageName;
          userMail.focus();
        } 
        if(userMail) {
          userMail.value = storageMail;
        }
        if (storageName && storageMail) {
          userMessage.focus();
        } 
        
      });
      close.addEventListener('click', function(event) {
        event.preventDefault();
        closePopup();
      });
      form.addEventListener('submit', function(event) {
        if (!userName.value || !userMail.value || !userMessage.value) {
          event.preventDefault();
          popup.classList.remove('modal-error');
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add('modal-error');
        } else {
          localStorage.setItem('feedback-userName', userName.value);
          localStorage.setItem('feedback-userMail', userMail.value);
        }
      });
      window.addEventListener('keydown', function(event) {
        if (event.keyCode === 27) {
          closePopup();
        }
      });
      overlay.addEventListener('click', function(event) {
        closePopup();
      });
      function closePopup(event) {
        if (popup.classList.contains('modal-content-show')) {
          popup.classList.remove('modal-content-show');
          popup.classList.remove('modal-error');
          overlay.classList.remove('modal-overlay-show');
        }
      }
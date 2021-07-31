$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard:{
    enabled:true,
    onlyInViewport: false,
  }
});
  const reviwsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    keyboard:{
      enabled:true,
      onlyInViewport: false,
    }
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function (){
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
  });

  var modalButton = $("[data-toggle=modal]"); 
  var closeModalButton = $('.modal__close'); 
  modalButton.on("click", openModal);
  closeModalButton.on("click" , closeModal)
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");

  function openModal(){
    var targetModal = $(this).attr('data-href');
    $(targetModal).find(".modal__overlay").addClass('modal__overlay--visible');
    $(targetModal).find(".modal__dialog").addClass('modal__dialog--visible');
  }
  
  
 


  function closeModal(event){
    event.preventDefault()
    var modalDialog = $(".modal__dialog");
    var modalOverlay = $(".modal__overlay");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  
  }
  // Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
      
			e.stopPropagation();
			modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
		}
	});
  //  Обработка форм
  $('.form').each(function (){
    $(this).validate({
    errorClass: "invalid",
    messages: {
    name: {
      required: "Укажите имя",
      minlength: "Имя должно быть не короче 2 букв"
    },
    email: {
      required: "Укажите email",
      email: "email name@domain.com"
    },
    phone: {
      required: "Укажите телефон",
    },
  }
  })
  })
});
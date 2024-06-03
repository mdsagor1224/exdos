(function($){
    "use strict";


    var swiper = new Swiper(".tp-testimonial-active", {
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
          enabled: true,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".tp-swiper-test-button-next",
          prevEl: ".tp-swiper-test-button-prev",
      },
  });


    // brand slider 
    var swiper = new Swiper(".tp-brand-top-active", {
      slidesPerView: 'auto',
      spaceBetween: 80,
      freemode: true,
      centeredSlides: true,
      loop: true,
      speed: 4000,
      allowTouchMove: false,
      autoplay: {
          delay: 1,
          disableOnInteraction: true,
        },
  });


  // team slider

  var swiper = new Swiper(".tp-team-active", {
    slidesPerView: 4,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".tp-swiper-team-button-next",
        prevEl: ".tp-swiper-team-button-prev",
    },
});


})(jQuery);
(function($){
    "use strict";


    $(".tp-offcanvas-toogle").on('click', function(){
        $(".tp-offcanvas").addClass("tp-offcanvas-open");
        $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
    });

    $(".tp-offcanvas-close-toggle,.tp-offcanvas-overlay").on('click', function(){
        $(".tp-offcanvas").removeClass("tp-offcanvas-open");
        $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
    });



    // data bg-img
    // $("[data-background]").each(function(){
    //     $(this).css("background-image", "url("+ $(this).attr(data-background)")")
    // })

    $("[data-background]").each(function (){
        $(this).css("background-image", "url(" + $($this).attr("data-background")+ ")")
    })

    // data bg-color
    $("[data-bg-color]").each(function(){
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    // data -color
    $("[data-color]").each(function(){
        $(this).css("color", $(this).attr("data-color"))
    })



    // popup
    $('.popup-image').magnificPopup({
        type: 'image'
      });

      $('.popup-video').magnificPopup({
        type: 'iframe'
      });



    // testimonial active
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

      // testimonial active home 5
      var swiper = new Swiper(".tp-test-active", {
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
            nextEl: ".tp-review-button-next",
            prevEl: ".tp-review-button-prev",
        },
    });

 // testimonial with thumb Slider
  var swiper_thumb = new Swiper(".tp-testimonial-thumb-active", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides:true,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper_content = new Swiper(".tp-testimonial-content-active", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper_thumb,
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

      // Home 3 brand slider 
      var swiper = new Swiper(".tp-brand-title-active", {
        slidesPerView: 'auto',
        spaceBetween: 40,
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
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
});


  // team project

  var swiper = new Swiper(".tp-project-active", {
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
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
});

  // team slider

  var swiper = new Swiper(".tp-brand-normal-active", {
    slidesPerView: 5,
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
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
});

})(jQuery);
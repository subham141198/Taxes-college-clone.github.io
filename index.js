

jQuery(document).ready(function () {
  jQuery(".search-bar-div").hide();
  jQuery(".header-section-menu").hide();

  jQuery(".content2").hide();
  jQuery(".content3").hide();

  jQuery(document).on("click", ".box1", function () {
    jQuery(".box1").addClass("active-box");
    jQuery(".box2").removeClass("active-box");
    jQuery(".box3").removeClass("active-box");
    jQuery(".content1").show();
    jQuery(".content2").hide();
    jQuery(".content3").hide();
  });

  jQuery(document).on("click", ".box2", function () {
    jQuery(".box2").addClass("active-box");
    jQuery(".box1").removeClass("active-box");
    jQuery(".box3").removeClass("active-box");
    jQuery(".content2").show();
    jQuery(".content1").hide();
    jQuery(".content3").hide();
  });
  jQuery(document).on("click", ".box3", function () {
    jQuery(".box3").addClass("active-box");
    jQuery(".box1").removeClass("active-box");
    jQuery(".box2").removeClass("active-box");
    jQuery(".content3").show();
    jQuery(".content1").hide();
    jQuery(".content2").hide();
  });

  jQuery(document).on("click", ".home-banner .heading1", function () {
    jQuery(".home-banner .menulist-1").slideToggle();
    jQuery(".home-banner .menulist-2").hide();
    jQuery(".home-banner .menulist-3").hide();
  });
  jQuery(document).on("click", ".home-banner .heading2", function () {
    jQuery(".home-banner .menulist-2").slideToggle();
    jQuery(".home-banner .menulist-1").hide();
    jQuery(".home-banner .menulist-3").hide();
  });
  jQuery(document).on("click", ".home-banner .heading3", function () {
    jQuery(".home-banner .menulist-3").slideToggle();
    jQuery(".home-banner .menulist-1").hide();
    jQuery(".home-banner .menulist-2").hide();
  });

  jQuery(".header-section-menu .menulist-2").hide();
  jQuery(".header-section-menu .menulist-3").hide();
  jQuery(document).on("click", ".header-section-menu .heading1", function () {
    jQuery(".header-section-menu .menulist-1").slideToggle();
    jQuery(".header-section-menu .menulist-2").hide();
    jQuery(".header-section-menu .menulist-3").hide();
  });
  jQuery(document).on("click", ".header-section-menu .heading2", function () {
    jQuery(".header-section-menu .menulist-2").slideToggle();
    jQuery(".header-section-menu .menulist-1").hide();
    jQuery(".header-section-menu .menulist-3").hide();
  });
  jQuery(document).on("click", ".header-section-menu .heading3", function () {
    jQuery(".header-section-menu .menulist-3").slideToggle();
    jQuery(".header-section-menu .menulist-1").hide();
    jQuery(".header-section-menu .menulist-2").hide();
  });

  jQuery(document).on("click", ".search img", function () {
    jQuery(".search img").toggleClass("close");
    jQuery("body").toggleClass("position-fixed")
    //jQuery('body').attr('position' , 'fixed')
  });
  jQuery(document).on("click", ".hamburgur img", function () {
    jQuery(".hamburgur img").toggleClass("close");
    jQuery("body").toggleClass("position-fixed")
    //jQuery('body').css('position' , 'fixed')
  });

  if (window.matchMedia("(min-width: 992px)").matches) {
    jQuery(".section-three-desktop-viewport").show();
    jQuery(".section-three-mobile-viewport").hide();
    jQuery(".section-six-desktop-viewport").show();
    jQuery(".section-six-mobile-viewport").hide();

    jQuery(".home-banner .menulist-2").hide();
    jQuery(".home-banner .menulist-3").hide();

    jQuery(document).on("click", ".search", function () {
      jQuery(".search-bar-div").toggle();
    });

    jQuery(document).scroll(function () {
      var scroll_counter = jQuery(this).scrollTop();
      if (scroll_counter > 1) {
        jQuery(".hamburgur").removeClass("p-3");
        jQuery(".logo").removeClass("p-3");
        jQuery(".search").removeClass("p-3");
        jQuery(".logo img").css('height','50px');
      } else {
        jQuery(".hamburgur").addClass("p-3");
        jQuery(".logo").addClass("p-3");
        jQuery(".search").addClass("p-3");
        jQuery(".logo img").css('height','100%');
      }
    });
  } else {
    jQuery(".section-three-desktop-viewport").hide();
    jQuery(".section-three-mobile-viewport").show();
    jQuery(".section-six-desktop-viewport").hide();
    jQuery(".section-six-mobile-viewport").show();

    jQuery(".home-banner .menulist-1").hide();
    jQuery(".home-banner .menulist-2").hide();
    jQuery(".home-banner .menulist-3").hide();
  }

  jQuery(document).on("click", ".hamburgur", function () {
    jQuery(".header-section-menu").slideToggle();
  });
  //jQuery(".search").hide()

  jQuery(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      991: {
        items: 1,
        nav: true,
        dots: false,
        dotsEach: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
        dots: false,
        dotsEach: false,
      },
    },
  });
});

$(document).on('ready', function() {
  $(".slick-top").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false
        }
      }
    ]
  });
  
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      items: 4,
      nav: true,
      dots: false,
      navText: ['<div class="nav-buttons nav-prev"></div>','<div class="nav-buttons nav-next"></div>'],
      responsive : {
        0: {
          items: 1,
          dots: false,
          nav: false
        },
        480: {
          items: 2,
          dots: false,
          nav: false
        },
        992: {
          items: 4
        },
        1200: {
          items: 4
        }
    }
    });
  });
  $(".slick-our-purposes").slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    margin: 30,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="assets/img/our-purposes-prev-btn.png"></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="assets/img/our-purposes-next-btn.png"></button>',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false
        },
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
  $(".slick-news").slick({
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="assets/img/our-purposes-prev-btn.png"></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="assets/img/our-purposes-next-btn.png"></button>',
    responsive: [
      {
        breakpoint: 1299,
        settings: {
          arrows: true
        },
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
  $(".slick-feedbacks").slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      }
    ]
  });
  $('#service-types-big-text').text('1');
  $('#service-types-big-text').css('cssText', 'color: rgba(0, 0, 0, 0) !important');
  // $('').css('color', 'transparent');
  $('.owl-service-types .owl-item').on('click', function() {
    var elem = $(this);
    $(this).siblings().removeClass('activated');
    $(this).addClass('activated');
    if ($(elem).find('h4.service-type').text() != $('#service-types-big-text').text()) {
      $('#service-types-big-text').fadeOut(function() {
        $(this).text($(elem).find('h4.service-type').text());
        if ($(this).css('color') == "rgba(0, 0, 0, 0)") {
          // css("cssText", "height: 650px !important;");
          $(this).css('cssText', 'color: #fff !important');
        }
      }).fadeIn();
    }
  });
});

$('#mobile-menu-toggle').on('click', function() {
  $('.mobile-menu').fadeToggle()
  if ($('.mobile-menu').hasClass('active')) {
    $('.mobile-menu').removeClass('active');
  } else {
    $('.mobile-menu').addClass('active');
  }
})

$(window).on('resize', function() {
  if (window.innerWidth <=767) {
    
  } else {
    
  }
})


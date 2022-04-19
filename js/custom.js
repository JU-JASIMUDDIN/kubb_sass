// sticky-header start
$(window).scroll(function () {
    var scrolling = $(this).scrollTop();
  
    if (scrolling > 100) {
      $('.navbar').addClass('bg');
    }
    else {
      $('.navbar').removeClass('bg');
    }
  });
  // sticky-header start

  $('.banner_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: false,
    speed:3000,
    arrows:false,
  });

  

  
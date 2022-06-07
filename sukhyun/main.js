$(function(){
  /* GNB slide up down when mouse enter & leave */
  $('.gnb > li > a').mouseenter(function(){
    $('.gnb_bg').stop().slideDown(400);
    $('.gnb_sub').stop().slideDown(400);
  });
  $('.gnb_bg').mouseleave(function(){
    $('.gnb_bg').stop().slideUp(400);
    $('.gnb_sub').stop().slideUp(400);
  });
  $('section').click(function(){
    $('.gnb_bg').stop().slideUp(400);
    $('.gnb_sub').stop().slideUp(400);
  })

  /* Mobile Menu Button Click*/
  $('.menu_btn').click(function(){
    $(this).toggleClass('active');
    $('.mobile_nav').toggleClass('active');
  });
  $('section').click(function(){
    $('.mobile_nav').removeClass('active');
  })
  /* for toggle sub menu */
  $('.mobile_gnb > li > a').click(function(){
    $('.mobile_gnb > li > a').next('.mobile_gnb_sub').slideUp();
    $(this).next('.mobile_gnb_sub').slideToggle();
  });
  /* Change header style when scroll */
  $(window).on('scroll',function(){
    if($(window).scrollTop()){
      $('header').css('border-bottom','1px solid #ccc');
    }
  })
  /* Media Section Slick Slide */
  $('.media_slide').slick({
    infinite: true,
    slidesToScroll: 2,
    autoplay: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 640,
        settings: {
          variableWidth: false,
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          dots: false
        }
      }
    ]
  });

  $('.gallery_slide').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,     
        }
      }
    ]
  });
})
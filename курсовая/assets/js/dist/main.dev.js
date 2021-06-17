"use strict";

$(document).ready(function () {
  var slider = $("#lightSlider").lightSlider({
    item: 2,
    slideMove: 1,
    slideMargin: 80,
    controls: false
  });
  $('#slider_prev').on('click', function () {
    slider.goToPrevSlide();
  });
  $('#slider_next').on('click', function () {
    slider.goToNextSlide();
  });
  /*шапка*/

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  /*modal*/

  $(".btn_hero").on('click', function (e) {
    //почему не работает, я хочу на всю кнопку нажимать
    e.preventDefault();
    console.log($(this).children(".modal_link"));
    $('#my_modal').addClass("open");
  });
  $(".modal_close").on('click', function () {
    $(this).parents(".modal_wrap").removeClass("open");
  });
  $(".btn_send_contacts").on('click', function () {
    $(this).parents(".modal_wrap").removeClass("open");
  });
});
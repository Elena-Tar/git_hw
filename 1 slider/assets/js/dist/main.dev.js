"use strict";

$(function () {
  var slider = $('.slider').lightSlider({
    // item: 2,
    // auto: true,
    controls: false,
    loop: true,
    //листается закольцовано
    responsive: [{
      breakpoint: 600,
      settings: {
        item: 2
      }
    }, {
      breakpoint: 510,
      settings: {
        item: 1
      }
    }]
  }); //сначала весь слайдер ьерем в какую-то переменную

  $('#slider_prev').on('click', function () {
    slider.goToPrevSlide();
  });
  $('#slider_next').on('click', function () {
    slider.goToNextSlide();
  });
});
lightGallery($('.slider'));
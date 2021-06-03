"use strict";

// $(".tabs_list a").on('click', function (e) {
//     e.preventDefault();
//     if ($(this).hasClass("active") === false) {
//         $(".tabs_list a.active").removeClass("active");
//         $(this).addClass("active");
//         $(".tab.active").removeClass("active");
//         $($(this).attr("href") + '_tab').addClass("active");
//     }
// });
$('.tabs').on('click', '.tab', function () {
  // $(".tabs .tab").removeClass("active");
  $(".tabs").find(".active").removeClass("active");
  console.log($(this).index());
  $(this).addClass('active');
  /*метод .eq() выбирает элемент с конкретным индексом из набора выбранных элементов*/
  // $('.tabs_block .content').eq($(this).index()).addClass("active");

  $(".tabs_block").find(".active").removeClass("active");
  $('.tabs_block .content').eq($(this).index()).addClass("active"); // console.log(($('.tabs_block .content').eq($(this).index())));
});
/*star плагин*/

$(".my-rating").starRating({
  starSize: 24,
  initialRating: 4,
  useFullStars: true,
  emptyColor: '#4b536b',
  hoverColor: '#ffdd3f',
  ratedColor: '#ffdd3f',
  starShape: 'rounded',
  callback: function callback(currentRating, $el) {}
});
/**плагин кружка*/

$(function () {
  $('.chart').easyPieChart({
    barColor: '#1ae681',
    //  нужен градиенд это цвестастое
    trackColor: '#787c9b',
    // серый кусок
    // scaleColor: '#dfe0e0',
    scaleLength: 0,
    //палочки по бокам
    lineCap: 'round',
    lineWidth: 5,
    // trackWidth: undefined,
    trackWidth: 2,
    size: 74,
    rotate: 0,
    // in degrees
    animate: {
      duration: 1000,
      enabled: true
    },
    easing: function easing(x, t, b, c, d) {
      // easing function
      t = t / (d / 2);

      if (t < 1) {
        return c / 2 * t * t + b;
      }

      return -c / 2 * (--t * (t - 2) - 1) + b;
    }
  });
});
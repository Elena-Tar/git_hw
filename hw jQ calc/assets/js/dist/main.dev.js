"use strict";

$('.btn').on('click', function () {
  $('.calc_screen').text($('.calc_screen').text() + this.value);
});
$(".btn_clear").on('click', function () {
  $(".calc_screen").text('');
});
$('.btn_back').on('click', function () {
  var res = $('.calc_screen').text();
  $('.calc_screen').text(res.substring(0, res.length - 1));
});
$('.btn_equally').on('click', function () {
  // debugger;
  var a = $('.calc_screen').text();
  console.log(a);
  $('.calc_screen').text(eval(a));
});
$('.btn_comma').on('click', function () {
  // debugger;
  var x = $('.calc_screen').text();

  if (x.indexOf(",") > -1) {
    $('.calc_screen').text();
  } else {
    $('.calc_screen').text($('.calc_screen').text() + this.value);
  }
});
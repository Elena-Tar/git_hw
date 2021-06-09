"use strict";

$(window).on('scroll', function () {
  if ($(window).scrollTop() > 100) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
});
$(".hamburger, .menu_shadow").on('click', function () {
  $(".hamburger").toggleClass("is-active");
  $("body").toggleClass("open");
});
$(".mobile_menu a").on('click', function () {
  $(".hamburger").removeClass("is-active");
  $("body").removeClass("open");
});
$(".mobile_menu a, main_menu a").click(function (e) {
  e.preventDefault();
  var top = $($(this).attr("href")).offset().top;
  $("html, body").animate({
    scrollTop: top
  }, 400);
});
$(".to_top").on('click', function () {
  $("html, body").animate({
    scrollTop: 0
  }, 400);
});
$(".modal_link").on('click', function (e) {
  e.preventDefault();
  $($(this).attr("href")).addClass("open");
});
$(".modal_close").on('click', function () {
  $(this).parents(".modal_wrap").removeClass("open");
});
/*первый слайдер*/

$(function () {
  var slider = $('.slider').lightSlider({
    item: 1,
    controls: false,
    vertical: true,
    slideMargin: 0,
    loop: true,
    pause: 3000,
    verticalHeight: 800
  });
});
/**кнопка */

$(".scroll").click(function () {
  $('html, body').animate({
    scrollTop: $(".section_what_we_do").offset().top
  }, 1000);
});
$(document).ready(function () {
  var slider_1 = $('#autoWidth').lightSlider({
    autoWidth: true,
    loop: true,
    item: 3,
    slideMargin: 30,
    controls: false,
    onSliderLoad: function onSliderLoad() {
      $('#autoWidth').removeClass('cS-hidden');
    }
  }); // сначала весь слайдер берем в какую - то переменную

  $('#slider_prev').on('click', function () {
    slider_1.goToPrevSlide();
  });
  $('#slider_next').on('click', function () {
    slider_1.goToNextSlide();
  });
});
/*gallery*/

lightGallery(document.getElementById('animated-thumbnails'), {
  thumbnail: true
});
/*карта*/

function initMap() {
  map = L.map('my_map').setView([40.6744595720531, -73.94372050808373], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  /*создаем маркер*/

  var newIcon = L.icon({
    iconUrl: 'assets/img/Ellipse\ 11.png',
    // iconUrl: 'assets/img/leaf-green.png',
    iconSize: [110, 110],
    iconAnchor: [-20, 10],
    popupAnchor: [-3, -100]
  });
  L.marker([40.6744595720531, -73.94372050808373], {
    icon: newIcon
  }).addTo(map);
}

var map;
map_link.addEventListener('click', function () {
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute('href', 'assets/js/plagins/leaflet/leaflet.css');
  document.head.append(link);
  var script = document.createElement("script");
  script.setAttribute('src', 'assets/js/plagins/leaflet/leaflet.js');
  document.body.append(script);
  script.onload = initMap;
  map_link.remove();
  map_pic.remove();
});
var LeafIcon = L.Icon.extend({
  options: {
    iconUrl: '../img/Ellipse\ 9.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  }
});
/*форма залогинивания*/

function isValidEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

var send_btn = document.getElementById('send_btn');
send_btn.addEventListener('click', validateForm);

function validateForm(e) {
  debugger;
  e.preventDefault();
  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;
  var BOT_TOKEN = '1812836695:AAH79Qc2DHvUC8sWlVFylnBVznw4r7gCM7A';
  var CHAT_ID = '-1001285100881';
  var text = 'Поздравляю,' + name + '! Вы успешно подписались';
  console.log(text);
  var input_ml = document.getElementById('email');
  var input_nm = document.getElementById('name');

  if (email == "" || name == "") {
    if (email == "") {
      input_ml.setAttribute('style', 'border: 2px solid red;');
    } else if (name == "") {
      input_nm.setAttribute('style', ' border: 2px solid red;');
    }
  } else if (isValidEmail(email)) {
    input_ml.value = "";
    input_nm.value = "";
    $.get('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage?chat_id=' + CHAT_ID + '&text=' + text);
  } else {
    alert("enter corect email");
  }
}
"use strict";

$(document).ready(function () {
  var slider = $("#lightSlider").lightSlider({
    item: 1,
    slideMove: 1,
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
      $(".header_top").addClass("fixed");
    } else {
      $(".header_top").removeClass("fixed");
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
    //кнопка наверх)
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
  /*2й слайдер*/

  var slider_team = $("#lightSlider_team").lightSlider({
    item: 3,
    slideMove: 1,
    controls: false,
    slideMargin: 30,
    responsive: [{
      breakpoint: 900,
      settings: {
        item: 2
      }
    }, {
      breakpoint: 600,
      settings: {
        item: 1
      }
    }]
  });
  $('#slider_prev_team').on('click', function () {
    slider_team.goToPrevSlide();
  });
  $('#slider_next_team').on('click', function () {
    slider_team.goToNextSlide();
  }); // form

  $('#feedback_form').on('submit', function (e) {
    e.preventDefault();
    console.log($('#feedback_form').serialize()); //отправляется и по enter и по клику на кнопку

    sendMessage($(this)); //вызов функции sendMessage и передать в нее форму
  });
  $('input, textarea').on('focus', function () {
    // добавили слушатель событий на элементы форм 
    if ($(this).parents('.form_row').hasClass("has_err")) {
      //если нажали в поле с классом has_err
      $(this).parents('.form_row').removeClass("has_err"); // то обводку убрать

      $(this).siblings('.form-text').text("");
    }
  });
});

function isValidEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function sendMessage($form) {
  // принимает в себя объект формы
  var BOT_TOKEN = '1812836695:AAH79Qc2DHvUC8sWlVFylnBVznw4r7gCM7A';
  var CHAT_ID = '-1001285100881';
  var text = 'Поздравляю! Вы успешно подписались';
  var valid = true; //проходим по форме и ищем обязательные поля для заполнения
  // *[data-required] все элементы с таким атрибутом

  $form.find('*[data-required]').each(function () {
    //после того как айдет все поля пойдем циклом .each для каждого выполнить опр-ю функцию
    if ($(this).val() === "") {
      valid = false; //отправлять ничего не будем

      $(this).parents('.form_row').addClass("has_err");
      $(this).siblings('.form-text').text("Field is required");
    } else {
      //если поле заполнено и там есть email нам надо его проверить
      if ($(this).attr("name") === "email") {
        if (!isValidEmail($(this).val())) {
          valid = false;
          $(this).parents('.form_row').addClass("has_err");
          $(this).siblings('.form-text').text("Invalid email address");
        }
      }
    }
  });

  if (valid) {
    axios.get('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage?chat_id=' + CHAT_ID + '&text=' + text).then(function (resp) {
      // console.log(resp);
      // console.log(resp.status);
      if (resp.status === 200) {
        alert('ok');
      } else {
        alert('ne ok');
      }
    });
  }
}
/** parallax */


var parallax = document.getElementById("parallax");
window.addEventListener("scroll", function () {
  var offset = window.pageYOffset; // console.log(offset);
  // console.log('Offset * 0.7: ' + offset * 0.7);

  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});
$.ajax({
  // dataType: "json",
  url: "team.json",
  // data: data,
  success: function success(data) {
    var html = '';
    data.forEach(function (element) {
      html += "\n            <li>\n            <div class=\"slider_item\">\n                <div class=\"null\">\n                    <div class=\"wrap_pic\">\n                        <img class=\"round\" src=\"assets/img/".concat(element.photo, ".png\" alt=\"#\">\n                    </div>\n                </div>\n                <div class=\"content\">\n                    <h3>").concat(element.name, "</h3>\n                    <h4>").concat(element.position, "</h4>\n                    <div class=\"wrap_socials\">\n                    \n                    <ul>\n                        <li>\n                            <a href=\"https://www.behance.net/\" target=\"_blank\" rel=\"nofollow\" title=\"Behance\">\n                                <svg>\n                                    <use xlink:href=\"assets/svg/sprite.svg#").concat(element.social.b, "\"></use>\n                                </svg>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"https://www.linkedin.com/\" target=\"_blank\" rel=\"nofollow\" title=\"Linkedin\">\n                                <svg>\n                                    <use xlink:href=\"assets/svg/sprite.svg#").concat(element.social.l, "\"></use>\n                                </svg>\n                            </a>\n    \n                        </li>\n                        <li>\n                            <a href=\"https://www.google.com/\" target=\"_blank\" rel=\"nofollow\" title=\"Google\">\n                                <svg>\n                                    <use xlink:href=\"assets/svg/sprite.svg#").concat(element.social.g, "\"></use>\n                                </svg>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"https://www.facebook.com/\" target=\"_blank\" rel=\"nofollow\" title=\"Facebook\">\n                                <svg>\n                                    <use xlink:href=\"assets/svg/sprite.svg#").concat(element.social.f, "\"></use>\n                                </svg>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"https://twitter.com/\" target=\"_blank\" rel=\"nofollow\" title=\"Twitter\">\n                                <svg>\n                                    <use xlink:href=\"assets/svg/sprite.svg#").concat(element.social.t, "\"></use>\n                                </svg>\n                            </a>\n                        </li>\n                     </ul>\n                    </div>\n                </div>\n            </div>\n\n        </li>\n        ");
    });
    $(".one").html(html);
  }
});
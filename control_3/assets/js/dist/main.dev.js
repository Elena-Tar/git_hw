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
  // form

  $('#feedback_form').on('submit', function (e) {
    e.preventDefault(); // console.log($('#feedback_form').serialize())  //отправляется и по enter и по клику на кнопку

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
  getTeam();
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
    // axios
    //     .get('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage?chat_id=' + CHAT_ID + '&text=' + text)
    //     .then((resp) => {
    //         // console.log(resp);
    //         // console.log(resp.status);
    //         if (resp.status === 200) {
    //             alert('ok');
    //         } else {
    //             alert('ne ok');
    //         }
    //     })
    $.ajax({
      url: 'https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage?chat_id=' + CHAT_ID + '&text=' + text,
      type: 'get',
      success: function success(resp) {
        // console.log(resp.ok);
        if (resp.ok == true) {
          alert('ok');
          $('#feedback_form').trigger('reset');
        } else {
          alert('ne ok');
        }
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

function getTeam() {
  $.ajax({
    // dataType: "json",
    url: "assets/data/team.json",
    // data: data,
    success: function success(data) {
      var html = '';
      data.forEach(function (element) {
        html += "\n            <li>\n            <div class=\"slider_item\">\n                <div class=\"null\">\n                <div class=\"wrap_pic\">\n                <img  data-src=\"assets/img/".concat(element.photo, ".png\" alt=\"#\">\n                \n            </div>\n                </div>\n                <div class=\"content\">\n                    <h3>").concat(element.name, "</h3>\n                    <h4>").concat(element.position, "</h4>\n                    <div class=\"wrap_socials\">\n                    \n                    <ul>\n                    ");

        for (var i in element.social) {
          // console.log(data);
          // console.log(element.social);
          // console.log(element.social[i].title);
          html += "\n                    <li>\n                        <a href=\"".concat(element.social[i].href, "\" target=\"_blank\" rel=\"nofollow\" title=\"").concat(element.social[i].title, "\">\n                            <svg>\n                                <use xlink:href=\"assets/svg/sprite.svg#").concat(element.social[i].icon, "\"></use>\n                            </svg>\n                        </a>\n                    </li>\n                    ");
        }

        html += "\n                     \n                     </ul >\n                    </div >\n                </div >\n            </div >\n        </li >\n                    ";
      });
      $(".one").html(html);
      $(".one").html(html);
      var slider_team = $("#lightSlider_team").lightSlider({
        item: 3,
        slideMove: 1,
        controls: false,
        slideMargin: 30,
        onSliderLoad: function onSliderLoad(el) {
          var showActiveSlides = function showActiveSlides(entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
              }
            });
          };

          var imageWidth = el.find(".wrap_pic").outerWidth() + "px";
          var observer = new window.IntersectionObserver(showActiveSlides, {
            root: el.parent()[0],
            rootMargin: "0px " + imageWidth + " 0px " + imageWidth
          });
          el.find(".wrap_pic img").each(function () {
            observer.observe(this);
          });
        }
      });
      $('#slider_prev_team').on('click', function () {
        slider_team.goToPrevSlide();
      });
      $('#slider_next_team').on('click', function () {
        slider_team.goToNextSlide();
      });
    }
  });
}
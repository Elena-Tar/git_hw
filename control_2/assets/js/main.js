/*шапка и меню*/

$(window).on('scroll', function () {
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() > 100) {
        $("header").addClass("fixed");
    } else {
        $("header").removeClass("fixed");
    }
});

$(".hamburger, .menu_shadow").on('click', function () {   //кликая на .hamburger 
    $(".hamburger").toggleClass("is-active");              // добавляется сlass "is-active"
    $("body").toggleClass("open");                           // добавляется сlass "open"
});

$(".mobile_menu a").on('click', function () {
    $(".hamburger").removeClass("is-active");
    $("body").removeClass("open");
});

$(".mobile_menu a, main_menu a").click(function (e) {
    e.preventDefault();
    let top = $($(this).attr("href")).offset().top;
    $("html, body").animate({ scrollTop: top }, 400);
});

$(".to_top").on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
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
    const slider = $('.slider').lightSlider({
        item: 1,
        // auto: true,
        controls: false,
        vertical: true,
        slideMargin: 0,
        loop: true, //по кольцу через каждые 3 сек
        pause: 3000,
        verticalHeight: 800,
    });
});
/**кнопка */
$(".scroll").click(function () { // откуда кливаем
    $('html, body').animate({
        scrollTop: $(".section_what_we_do").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});


$(document).ready(function () {
    const slider_1 = $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        item: 3,
        slideMargin: 30,
        controls: false,

        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
    // сначала весь слайдер берем в какую - то переменную
    $('#slider_prev').on('click', function () {
        slider_1.goToPrevSlide()
    });
    $('#slider_next').on('click', function () {
        slider_1.goToNextSlide()
    });
});




/*gallery*/
lightGallery(document.getElementById('animated-thumbnails'), {
    thumbnail: true,
});





/*карта*/

function initMap() {
    map = L.map('my_map').setView([40.6744595720531, -73.94372050808373], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    /*создаем маркер*/
    let newIcon = L.icon({
        iconUrl: 'assets/img/Ellipse\ 11.png',
        // iconUrl: 'assets/img/leaf-green.png',
        iconSize: [110, 110],
        iconAnchor: [-20, 10],
        popupAnchor: [-3, -100]
    });

    L.marker([40.6744595720531, -73.94372050808373], { icon: newIcon }).addTo(map);
}

let map;
map_link.addEventListener('click', function () {
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute('href', 'assets/js/plagins/leaflet/leaflet.css');
    document.head.append(link);
    let script = document.createElement("script");
    script.setAttribute('src', 'assets/js/plagins/leaflet/leaflet.js');
    document.body.append(script);
    script.onload = initMap;

    map_link.remove();
    map_pic.remove();
})

let LeafIcon = L.Icon.extend({
    options: {
        iconUrl: '../img/Ellipse\ 9.png',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    }
});




/*форма залогинивания*/

function isValidEmail(email) {   //регулярка проверки валидности email (скопировали с github)
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}


let email = document.getElementById('email');
let name_1 = document.getElementById('name');

function sendMassege(e) {
    e.preventDefault();
    const BOT_TOKEN = '1812836695:AAH79Qc2DHvUC8sWlVFylnBVznw4r7gCM7A';
    const CHAT_ID = '-1001285100881';
    const text = 'Поздравляю,' + name_1.value + '! Вы успешно подписались';
    if (isValidEmail(email)) {
        console.log(text);
        axios
            .get('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage?chat_id=' + CHAT_ID + '&text=' + text);
    } else {
        alert("Enter valid email address");
    }
}


let send_btn = document.getElementById('send_btn')
send_btn.addEventListener('click', sendMassege);


$(document).ready(function () {
    $("#lightSlider").lightSlider({
        item: 2,
        slideMove: 1,
        slideMargin: 20,
    });


    /*шапка*/
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
    });




    $('.services .button').mouseover(function () {  //передвигаем мышь над обектом
        // alert("hello")
        $(this).removeClass('btn')
        $(this).addClass('btn')
    });

    $('.services .button').mouseout(function () {  //передвигаем мышь над обектом
        // alert("hello")
        $(this).removeClass('btn')
    });









});


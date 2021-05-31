$(document).ready(function () {
    $('#imageGallery').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        thumbItem: 8,
        slideMargin: 0,
        enableDrag: false,
        currentPagerPosition: 'left',
        onSliderLoad: function (el) {
            lightGallery(el[0], { selector: '#imageGallery .lslide' });
        }
    });
});


// $(document).ready(function () {
//     $('#imageGallery').lightSlider({
//         gallery: true,
//         item: 1,
//         loop: true,
//         thumbItem: 9,
//         slideMargin: 0,
//         enableDrag: false,
//         currentPagerPosition: 'left',
//         onSliderLoad: function (el) {
//             el.lightGallery({
//                 selector: '#imageGallery .lslide'
//             });
//         }
//     });
// });



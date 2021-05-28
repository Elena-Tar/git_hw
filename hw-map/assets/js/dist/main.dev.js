"use strict";

// let map = L.map('my_map').setView([46.4877175216722, 30.7414794942193], 13);
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);
// L.marker([46.4877175216722, 30.7414794942193]).addTo(map)  // можно добавить маркер
//     .bindPopup(`<ul class ="workTime">
//      <li>пн-пт: 08:00 -18:00 </li>
//      <li>сб: 08:00 -15:00 </li>
//      <li>вс: выходной </li>
//     </ul>`); //сюда можно запихивать html
// .openPopup();
// map.getZoom() //посмотреть размер карты в консоль    
// map.setZoom(10);// изменить масштаб
// marker.openPopop()
var PLACES = [{
  lat: 46.45138471829015,
  lng: 30.746073289609843,
  pic: 'assets/img/тигренок.jpg',
  title: "Говорова 1/2",
  descr: 'daescript text',
  type: 'orange'
}, {
  lat: 46.44958085559362,
  lng: 30.744175638358346,
  pic: 'assets/img/тигренок.jpg',
  title: "№154 З Яслами Днз",
  descr: 'daescript text',
  type: 'orange'
}, {
  lat: 46.4549646175883,
  lng: 30.768155223046193,
  pic: 'assets/img/тигренок.jpg',
  title: "True Man",
  descr: 'daescript text',
  type: 'orange'
}, {
  lat: 46.45132839583046,
  lng: 30.748100146803395,
  pic: 'assets/img/тигренок.jpg',
  title: "Supermarket Oven",
  descr: 'daescript text',
  type: 'orange'
}, {
  lat: 46.44609290196972,
  lng: 30.74251154596593,
  pic: 'assets/img/тигренок.jpg',
  title: "Спортивный клуб Тигренок",
  descr: 'daescript text',
  type: 'orange'
}, {
  lat: 46.44244472708234,
  lng: 30.7714850478152,
  pic: 'assets/img/тигренок.jpg',
  title: "Скалодром",
  descr: 'daescript text',
  type: 'orange'
}, {
  lat: 46.4492214523199,
  lng: 30.750369209741777,
  pic: 'assets/img/тигренок.jpg',
  title: "Спортивный комплекс ОНПУ",
  descr: 'daescript text',
  type: 'red'
}, {
  lat: 46.44817993146787,
  lng: 30.752135695059028,
  pic: 'assets/img/тигренок.jpg',
  title: "Парк Победы",
  descr: 'daescript text',
  type: 'red'
}, {
  lat: 46.416089761215325,
  lng: 30.71198687931333,
  pic: 'assets/img/тигренок.jpg',
  title: "City Center",
  descr: 'daescript text',
  type: 'green'
}, {
  lat: 46.45549875779822,
  lng: 30.766208737326714,
  pic: 'assets/img/тигренок.jpg',
  title: "Трасса Здоровья",
  descr: 'daescript text',
  type: 'green'
}];
/*делаем другие картинки

// let map = L.map('map').setView([46.4877175216722, 30.7414794942193], 13);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);



// let LeafIcon = L.Icon.extend({
//     options: {
//         shadowUrl: 'assets/img/leaf-shadow.png',
//         iconSize: [38, 95],
//         shadowSize: [50, 64],
//         iconAnchor: [22, 94],
//         shadowAnchor: [4, 62],
//         popupAnchor: [-3, -76]
//     }
// });

// let greenIcon = new LeafIcon({ iconUrl: 'assets/img/leaf-green.png' }),
//     redIcon = new LeafIcon({ iconUrl: 'assets/img/leaf-red.png' }),
//     orangeIcon = new LeafIcon({ iconUrl: 'assets/img/leaf-orange.png' });

// L.marker([46.45138471829015, 30.746073289609843], { icon: greenIcon }).addTo(map).bindPopup("I am a green leaf.");
// L.marker([46.45132839583046, 30.748100146803395], { icon: redIcon }).addTo(map).bindPopup("I am a red leaf.");
// L.marker([46.45549875779822, 30.766208737326714], { icon: orangeIcon }).addTo(map).bindPopup("I am an orange leaf.");
*/

var LeafIcon = L.Icon.extend({
  options: {
    shadowUrl: 'assets/img/leaf-shadow.png',
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
  }
});

function go() {
  map = L.map('map').setView([46.48791187801183, 30.725645058845835], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  var markers = L.markerClusterGroup({
    disableClusteringAtZoom: 17
  });

  for (var i = 0; i < PLACES.length; i++) {
    var marker = L.marker([PLACES[i].lat, PLACES[i].lng], {
      icon: new LeafIcon({
        iconUrl: 'assets/img/leaf-' + PLACES[i].type + '.png'
      })
    });
    marker.bindPopup("<ul class = \"comment\">\n             <li><img src=\"".concat(PLACES[i].pic, "\" alt=\"#\"> </li> \n             <li class=\"pic_img\">").concat(PLACES[i].title, " </li>\n            </ul>\n            "));
    markers.addLayer(marker);
  }

  map.addLayer(markers);
}

go(); // работает
// function go() {
//     map = L.map('map').setView([46.48791187801183, 30.725645058845835], 13);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);
//     let markers = L.markerClusterGroup({ disableClusteringAtZoom: 17 });
//     for (let i = 0; i < PLACES.length; i++) {
//         let marker = L.marker([PLACES[i].lat, PLACES[i].lng]);//.addTo(map)  // можно добавить маркер
//         marker.bindPopup(`<ul class = "comment">
//              <li>${PLACES[i].title} </li>
//              <li>${PLACES[i].descr} </li>
//             </ul>
//             `);
//         markers.addLayer(marker);
//     }
//     map.addLayer(markers);
// }
// go();
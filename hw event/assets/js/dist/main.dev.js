"use strict";

var text = document.createElement('div');
document.body.prepend(text);
text.setAttribute('style', 'border: 1px solid red; height:60px; width:500px');
text.innerText = "Чтобы редактировать текст нажмите Ctrl + e ; Чтобы сохранить Ctrl + s";
var textAr = document.createElement('textarea');
document.body.prepend(textAr);
textAr.setAttribute('style', 'display:none');
document.addEventListener("keydown", function (e) {
  console.log(e);

  if (e.ctrlKey == true && e.key == "e") {
    e.preventDefault(); // alert('not allowed');

    text.setAttribute('style', 'display:none');
    textAr.setAttribute('style', 'display:block');
    textAr.innerText = text.innerText;
  }

  if (e.ctrlKey == true && e.key == "s") {
    e.preventDefault(); // alert('not allowed');

    textAr.setAttribute('style', 'display:none');
    text.setAttribute('style', 'display:block');
    text.innerText = textAr.value;
  }
}, false);
/*3я*/

var text_div = document.getElementById("div_text");
var arrow = document.getElementById("arrow");
arrow.addEventListener('mousedown', go_start);
document.body.addEventListener('mousemove', go_end);
var w;
var h;
var width;
var height;
var width_n;
var height_n;
var flag = false;

function go_start(event) {
  w = event.clientX;
  h = event.clientY;
  width = window.getComputedStyle(text_div, "").width;
  height = window.getComputedStyle(text_div, "").height;
  flag = true;
}

function go_end(event) {
  if (flag == true) {
    text_div.style.width = parseInt(width) + (event.clientX - w) + 'px';
    text_div.style.height = parseInt(height) + (event.clientY - h) + 'px';
  }
}

document.body.addEventListener('mouseup', go_end1);

function go_end1() {
  flag = false;
}
/*2я*/


var allTR = document.getElementsByTagName("tr"); // console.log(allTR);

var btn_age = document.getElementById("s_age");
btn_age.addEventListener('click', func1);
var x;
var y;
var a = false;

function func1() {
  for (var i = 1; i < allTR.length - 1; i++) {
    // console.log(allTR);
    console.log(allTR[1]);
    x = allTR[i].getElementsByTagName("TD")[4];
    y = allTR[i + 1].getElementsByTagName("TD")[4];

    if (parseInt(x.innerText) > parseInt(y.innerHTML)) {
      allTR[i].parentNode.insertBefore(allTR[i + 1], allTR[i]);
    }
  }
}

var btn_s_ln = document.getElementById("s_ln");
btn_s_ln.addEventListener('click', func2);
var arr_ln = [];

function func2() {
  for (var i = 1; i < allTR.length - 1; i++) {
    // console.log(allTR);
    // console.log(allTR[1]);
    x = allTR[i].getElementsByTagName("TD")[2];
    y = allTR[i + 1].getElementsByTagName("TD")[2];

    if (x.innerText > y.innerHTML) {
      allTR[i].parentNode.insertBefore(allTR[i + 1], allTR[i]);
    }
  }
} // let allTH = document.getElementsByTagName("th");
// for (let j = 1; j < allTH.length - 1; j++) {
//     // console.log(allTH);
//     allTH[j].addEventListener('click', func2);
//     function func2() {
//         for (let i = 1; i < allTR.length - 1; i++) {
//             // console.log(allTR);
//             // console.log(allTR[1]);
//             x = allTR[i].getElementsByTagName("TD")[j];
//             console.log(j);
//             y = allTR[i + 1].getElementsByTagName("TD")[j];
//             if (parseInt(x.innerText) > parseInt(y.innerHTML) || x.innerText >= y.innerHTML) {
//                 allTR[i].parentNode.insertBefore(allTR[i + 1], allTR[i]);
//             }
//         }
//     }
// }
// console.log(x.innerText);
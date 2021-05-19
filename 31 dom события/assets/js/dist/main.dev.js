"use strict";

// let elems = document.getElementsByTagName("input");
// for (let i = 0; i < elems.length; i++) {
//     elems[i].onclick = func;
// }
// function func() {
//     alert(this.value);
// }
// var elem = document.getElementById('test');
// elem.addEventListener('click', func1);
// elem.addEventListener('click', func2);
// function func1() {
//     alert('1');
// }
// function func2() {
//     alert('2');
// }
// let elem = document.getElementById("test");
// elem.addEventListener("click", func);
// function func() {
//     alert(this.value);
// }
// var elem1 = document.getElementById('test1');
// elem1.addEventListener('click', func);
// var elem2 = document.getElementById('test2');
// elem2.addEventListener('click', func);
// var elems = document.getElementsByTagName('input');
// for (var i = 0; i < elems.length; i++) {
//     elems[i].addEventListener('click', func);
// }
// function func() {
//     alert(this.value);
// }
// var elem = document.getElementById('test');
// elem.addEventListener('click', func1);
// elem.addEventListener('click', func2);
// elem.addEventListener('click', func3);
// function func1() {
//     alert('1');
//     //Отвяжем функцию func1:
//     this.removeEventListener('click', func1);
// }
// function func2() {
//     alert('2');
//     //Отвяжем функцию func2:
//     this.removeEventListener('click', func2);
// }
// function func3() {
//     alert('3');
// }
// var elems = document.getElementsByTagName('input');
// for (var i = 0; i < elems.length; i++) {
//     elems[i].addEventListener('click', func);
// }
// function func() {
//     alert(this.value);
//     this.removeEventListener('click', func);
// }
// let elems = document.getElementsByTagName("img");
// for (let i = 0; i < elems.length; i++) {
//     elems[i].addEventListener("click", func);
// }
// function func() {
//     alert(this.getAttribute('src'));
// }
// let elems = document.getElementsByTagName("a");
// for (let i = 0; i < elems.length; i++) {
//     elems[i].addEventListener("mouseover", func);
// }
// function func() {
//     this.innerHTML = this.innerHTML + `(${this.href})`;
//     this.removeEventListener('mouseover', func);
// }
// let elems = document.getElementsByTagName("a");
// for (i = 0; i < elems.length; i++) {
//     elems[i].addEventListener("mouseover", func);
// }
// function func() {
//     this.title = this.innerHTML;
//     alert(this.title);
// }
// let elems = document.getElementsByTagName("input");
// let text = document.getElementById("text");
// for (i = 0; i < elems.length; i++) {
//     elems[i].addEventListener("mouseout", func);
// }
// function func() {
//     text.innerHTML = this.value;
// }
// let elems = document.getElementsByTagName("input");
// for (i = 0; i < elems.length; i++) {
//     elems[i].addEventListener("click", func);
// }
// function func() {
//     alert(this.value);
//     this.removeEventListener('click', func);
// }
// let elems = document.getElementsByTagName("p");
// for (i = 0; i < elems.length; i++) {
//     elems[i].addEventListener("click", func);
// }
// function func() {
//     let num = this.innerHTML;
//     let res = num * num;
//     this.innerHTML = res;
// }
// var elems = document.getElementsByTagName('p');
// for (var i = 0; i < elems.length; i++) {
//     elems[i].addEventListener('click', func);
// }
// function func() {
//     this.innerHTML = this.innerHTML * this.innerHTML;
// }
// let elems = document.getElementsByTagName("input");
// for (let i = 0; i < elems.length; i++) {
//     elems[i].addEventListener("mouseout", func);
// }
// function func() {
//     if (this.value.length == this.getAttribute('data-length')) {
//         this.setAttribute('style', 'border:5px solid yellow');
//     } else {
//         this.setAttribute('style', 'border:2px solid red');
//     }
// }
// let elems = document.getElementsByTagName("div");
// for (i = 0; i < elems.length; i++) {
//     elems[i].addEventListener("click", func);
// }
// function func() {
//     this.setAttribute('style', ' background: red;');
//     this.removeEventListener("click", func);
//     this.addEventListener("click", func2);
// }
// function func2() {
//     this.setAttribute('style', ' background: yellow;');
//     this.removeEventListener("click", func2);
//     this.addEventListener("click", func);
// }
// let elem2 = document.getElementById("elem");
// console.log(elem2);
// let length2 = elem2.classList.length;
// console.log(length2);
// let elem = document.getElementById("elem");
// console.log(elem.classList);  // по сути это объект с перечнем классов
// let objClass = elem.classList;
// for (let key of objClass) {
//     document.write(key + "<br>");
// }
// let elem = document.getElementById("elem");
// elem.classList.add("hhh");
// console.log(elem);
// elem.classList.remove("www");
// let objClass = elem.classList;
// for (let key of objClass) {
//     if (key == "www") {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }
// }
// let elem = document.getElementById("elem");
// let objClass = elem.classList;
// for (let key of objClass) {
//     if (key == "www") {
//         elem.classList.remove("www");
//         console.log(elem);
//     }
//     else {
//         elem.classList.add("ttt");
//         console.log(elem);
//     }
// }
// let elem = document.getElementById("elem");
// let num = elem.classList.length;
// console.log(num);
// let elem = document.getElementById("elem");
// let objClass = elem.classList;
// for (let key of objClass) {
//     document.write(key + "<br>");
// }

/*сортировка списка*/
// let elems = document.getElementsByTagName("li");
// let arrItem = [];
// let btn = document.getElementById("btn_sort");
// btn.addEventListener('click', func);
// function func() {
//     for (let i = 0; i < elems.length; i++) {
//         // console.log(elems[i].innerHTML);
//         arrItem[i] = elems[i].innerHTML;
//     }
//     console.log(arrItem);
//     let newArrItem = arrItem.sort(function (a, b) {
//         return a - b;
//     });
//     console.log(newArrItem);
//     for (let i = 0; i < elems.length; i++) {
//         elems[i].innerHTML = newArrItem[i];
//     }
// }
// let arr = [9, 2, 3];
// function mysort() {
//     let newArr = arr.sort(function (a, b) {
//         return a - b;
//     });
//     console.log(newArr);
// }
// mysort()
var age_elems = document.getElementsByClassName("age");
var age_arrItem = [];
var btn_age = document.getElementById("s_age");
btn_age.addEventListener('click', func1);

function func1() {
  for (var i = 0; i < age_elems.length; i++) {
    age_arrItem[i] = age_elems[i].innerHTML;
  }

  console.log(age_arrItem);
  var newAge_arrItem = age_arrItem.sort(function (a, b) {
    return a - b;
  });
  console.log(newAge_arrItem);

  for (var _i = 0; _i < age_elems.length; _i++) {
    age_elems[_i].innerHTML = newAge_arrItem[_i];
  }
}

var first_name_elems = document.getElementsByClassName("first_name");
var first_name_arrItem = [];
var btn_first_name = document.getElementById("s_first_name");
btn_first_name.addEventListener('click', func2);

function func2() {
  for (var i = 0; i < first_name_elems.length; i++) {
    first_name_arrItem[i] = first_name_elems[i].innerHTML;
  }

  var newFirst_name_arrItem = first_name_arrItem.sort();

  for (var _i2 = 0; _i2 < first_name_elems.length; _i2++) {
    first_name_elems[_i2].innerHTML = first_name_arrItem[_i2];
  }
}

var last_name_elems = document.getElementsByClassName("last_name");
var last_name_arrItem = [];
var btn_last_name = document.getElementById("s_last_name");
btn_last_name.addEventListener('click', func3);

function func3() {
  for (var i = 0; i < last_name_elems.length; i++) {
    last_name_arrItem[i] = last_name_elems[i].innerHTML;
  }

  var newLast_name_arrItem = last_name_arrItem.sort();

  for (var _i3 = 0; _i3 < last_name_elems.length; _i3++) {
    last_name_elems[_i3].innerHTML = newLast_name_arrItem[_i3];
  }
}

var patronymic_elems = document.getElementsByClassName("patronymic");
var patronymic_arrItem = [];
var btn_patronymic = document.getElementById("s_patronymic");
btn_patronymic.addEventListener('click', func4);

function func4() {
  for (var i = 0; i < patronymic_elems.length; i++) {
    patronymic_arrItem[i] = patronymic_elems[i].innerHTML;
  }

  var newPatronymic_arrItem = patronymic_arrItem.sort();
  console.log(newPatronymic_arrItem);

  for (var _i4 = 0; _i4 < patronymic_elems.length; _i4++) {
    patronymic_elems[_i4].innerHTML = newPatronymic_arrItem[_i4];
  }
}
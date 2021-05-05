"use strict";

var auto = {
  Manufacturer: "Audi",
  Model: "A5",
  "Year of issue": 2020,
  "Average speed": 100,
  inform_car: function inform_car() {
    var rez = "<ul>";

    for (var k in auto) {
      if (typeof auto[k] !== "function") {
        rez += "<li>".concat(k, ": ").concat(auto[k], "</li>"); // h +="<li>"+k+": "+auto[k]+"</li>"; //одно и тоже
      }
    }

    rez += "</ul>";
    document.getElementById("inform_car_rez").innerHTML = rez;
  },
  time: function time() {
    var km = document.getElementById("distance").value !== "" ? parseFloat(document.getElementById("distance").value) : 0;
    var travel_time = km / auto["Average speed"];
    var h = 0;

    while (travel_time >= 4) {
      travel_time = travel_time - 4;
      h++;
    }

    var rez = km / auto["Average speed"] + h;
    document.getElementById("time_rez").innerHTML = rez;
  }
};
/*2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

Функция сложения 2-х объектов-дробей;

Функция вычитания 2-х объектов-дробей;

Функция умножения 2-х объектов-дробей;

Функция деления 2-х объектов-дробей;

Функция сокращения объекта-дроби.*/

var drob = {
  d1: {
    c: 12,
    z: 4
  },
  d2: {
    c: 3,
    z: 5
  },
  summ: function summ(a, b) {
    // debugger;
    var rez = {
      c: 0,
      z: 0
    };

    if (this.d1.z === this.d2.z) {
      rez.c = this.d1.c + this.d2.c;
      rez.z = this.d1.z;
    } else if (this.d1.z !== this.d2.z) {
      rez.c = this.d1.c * this.d2.z + this.d1.z * this.d2.c;
      rez.z = this.d1.z * this.d2.z;
    }

    return this.reduce(rez);
  },
  subtraction: function subtraction(a, b) {
    var rez = {
      c: 0,
      z: 0
    };

    if (this.d1.z === this.d2.z) {
      rez.c = this.d1.c - this.d2.c;
      rez.z = this.d1.z;
    } else if (this.d1.z !== this.d2.z) {
      rez.c = this.d1.c * this.d2.z - this.d1.z * this.d2.c;
      rez.z = this.d1.z * this.d2.z;
    }

    return this.reduce(rez);
  },
  multiplication: function multiplication(a, b) {
    var rez = {
      c: 0,
      z: 0
    };
    rez.c = this.d1.c * this.d2.c;
    rez.z = this.d1.z * this.d2.z;
    return this.reduce(rez);
  },
  division: function division(a, b) {
    var rez = {
      c: 0,
      z: 0
    };
    rez.c = this.d1.c * this.d2.z;
    rez.z = this.d1.z * this.d2.c;
    return this.reduce(rez);
  },
  reduce: function reduce(obj) {
    // debugger;
    var gcd = function gcd(a, b) {
      var rez_gcd = 0;

      while (a != 0 && b != 0) {
        if (a > b) {
          a = a % b;
        } else {
          b = b % a;
        }

        rez_gcd = a + b;
      }

      return rez_gcd;
    };

    var rez = gcd(obj.c, obj.z);
    return [obj.c / rez, obj.z / rez];
  }
};
/*ответы к 2й задаче*/
// console.log( drob.summ(drob.d1, drob.d2));
// console.log( drob.subtraction(drob.d1, drob.d2));
// console.log( drob.multiplication(drob.d1, drob.d2));
// console.log( drob.division(drob.d1, drob.d2));
// console.log(drob.reduce(drob.d1));

/*3 задача*/

$(function () {
  $('#data_time_input').mask('99:99:99');
});
$(function () {
  $('#change_time_input').mask('99:99:99');
});
var objTime = {
  h: 0,
  m: 0,
  s: 0,
  get: function get(k) {
    return this[k];
  },
  set: function set(k, newTime) {
    this[k] = newTime;
  },
  data_time: function data_time() {
    debugger;
    var t = document.getElementById("data_time_input").value;
    var tArr = t.split(":");
    var h_new = parseInt(tArr[0]);
    var m_new = parseInt(tArr[1]);
    var s_new = parseInt(tArr[2]);
    objTime.set(["h"], h_new); //зачем ему кавычки????????

    objTime.set(["m"], m_new);
    objTime.set(["s"], s_new); // console.log(objTime);

    var rez = addZero(this.get("h")) + ":" + addZero(this.get("m")) + ":" + addZero(this.get("s"));
    document.getElementById("data_time_rez").innerHTML = rez;
  },
  data_time_change: function data_time_change() {
    debugger;
    var t_change = document.getElementById("change_time_input").value;
    var arr_change = t_change.split(":");
    var h_ch = parseInt(arr_change[0]);
    var m_ch = parseInt(arr_change[1]);
    var s_ch = parseInt(arr_change[2]);

    if (h_ch >= 0 && m_ch >= 0 && s_ch >= 0) {
      rez_t_ch = time_covertor(h_ch, m_ch, s_ch); //получили секунды изменяемого времени
    } else {
      alert("Enter correct data");
    } // let summ_s = rez_t_ch + rez_t_new;
    // let summ_norm = getTime(summ_s);
    // document.getElementById("change_time_rez").innerHTML = summ_norm;

  }
};
console.log(objTime.get("h"));
console.log(objTime["m"]);
console.log(objTime["s"]);

function addZero(n) {
  return n < 10 ? "0" + n : n;
}
/*Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.*/


function time_covertor() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var rez = 0;

  if (a > 0) {
    a = a * 60 * 60;
  }

  if (b > 0) {
    b = b * 60;
  }

  rez = a + b + c;
  return rez;
}
/*9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».*/


function getTime(s) {
  var m = 0;
  var h = 0;
  var rez = "";

  if (s > 59) {
    m = Math.floor(s / 60);
    s = s % 60;

    if (m > 59) {
      h = Math.floor(m / 60);
      m = m % 60;
    }
  }

  rez = addZero(h) + ":" + addZero(m) + ":" + addZero(s);
  return rez;
} // console.log(objTime.set(["h"], 20));
// console.log(objTime.set(["m"], 15));
// console.log(objTime.set(["s"], 10));
// console.log(objTime.get("h"));
// console.log(objTime.get("m"));
// console.log(objTime.get("s"));
// let change_time = {
//     h: 0,
//     m: 0,
//     s: 0,
//     get(k) {
//         return this[k];
//     },
//     set(k, new_time) {
//         let update = parseInt(new_time) > 60;
//         if (update) {
//             switch (k) {
//                 case 's':
//                     new_time -= 60;
//                     this['m'] = parseInt(this['m']) + 1;
//                     break;
//                 case 'm':
//                     new_time -= 60;
//                     this['h'] = parseInt(this['h']) + 1;
//                     break;
//             }
//         }
//         this[k] = new_time;
//     },
//     print(elem) {
//         elem.innerHTML = this.get("h") + ":" + this.get("m") + ":" + this.get("s");
//     }
// }
// function changeTime(el, prop) {
//     if (prop) {
//         change_time.set(prop, el.value);
//         change_time.print(document.getElementById("change_time_rez"));
//     } else {
//         let arr = el.value.split(':');
//         change_time.set('h', arr[0]);
//         change_time.set('m', arr[1]);
//         change_time.set('s', arr[2]);
//         change_time.print(document.getElementById("change_time_rez"));
//     }
// }
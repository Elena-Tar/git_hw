"use strict";

// let drob = {
//     d1: {
//         c:2,
//         z:4
//     },
//     d2: {
//         c:3,
//         z:5
//     },
//     gcf(a,b) {
//         debugger;
//         let rez =0;
//         while(a!=0 && b!=0){ 
//             if(a>b){
//                 a = a%b;
//             } else {
//                 b = b%a;
//             }
//             rez =(a+b);
//         }    
//         return rez;
//       },
//     reduce(obj){
//         // debugger;
//         let rez = gcd(obj.c, obj.z);
//         return [obj.c/rez, obj.z/rez];
//     }
// }
// console.log(drob.reduce(drob.d1));
// console.log( drob.summ(drob.d1, drob.d2));
// drob["milk"]=1; добавляем элемент
// console.log(cart["Bear Hike"]); //обращение к элементу
// cart.Milk = 10; изменяем элемент
// console.log(drob.summ);
// function reduce(numerator,denominator){
//     // debugger;
//     var gcd = function gcd(a,b){
//       return b ? gcd(b, a%b) : a;
//     };
//     gcd = gcd(numerator,denominator);
//     return [numerator/gcd, denominator/gcd];
//   }
//  console.log( reduce(2,4));
// function gcd(a,b) {
//   debugger;
//   let rez =0;
//   while(a!=0 && b!=0){ 
//       if(a>b){
//           a = a%b;
//       } else {
//           b = b%a;
//       }
//       rez =(a+b);
//   }    
//   return rez;
// }
var drob = {
  d1: {
    c: 12,
    z: 4
  },
  d2: {
    c: 3,
    z: 5
  },
  reduce: function reduce(obj) {
    // debugger;
    var rez = gcd(obj.c, obj.z);
    return [obj.c / rez, obj.z / rez];
  },
  summ: function summ(a, b) {
    debugger;
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

    return reduce(rez);
  }
}; // console.log(drob.reduce(drob.d1));
// console.log(drob.reduce(drob.d1));

console.log(drob.summ(drob.d1, drob.d2));

function gcd(a, b) {
  // debugger;
  var rez = 0;

  while (a != 0 && b != 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }

    rez = a + b;
  }

  return rez;
}

function reduce(obj) {
  // debugger;
  var rez = gcd(obj.c, obj.z);
  return [obj.c / rez, obj.z / rez];
}
"use strict";

var grocery_list = [{
  "product_name": "milk",
  "bought": true,
  "count": 3
}, {
  "product_name": "bread",
  "bought": false,
  "count": 2
}, {
  "product_name": "water",
  "bought": true,
  "count": 30
}];
grocery_list.sort(function (a, b) {
  if (a["bought"] !== true) {
    return 1;
  }

  return -1;
});
console.log(grocery_list); // function print(arr) {
//     console.log
//         ('dsfghdgguhjklm;l');
//     arr.sort((a, b) => {
//         if (a["bought"]) {
//             return 1;
//         }
//         return -1;
//     }).forEach(element => console.log(element));
// }
// print(grocery_list);
// function add(obj, arr) {
//     let res = arr.find((element, ind, array) => obj["product_name"] == element["product_name"]);
//     if (res) {
//         res["count"] += obj["count"];
//     } else
//         arr.push(obj);
// }
// add({
//     "product_name": "Bread",
//     "bought": false,
//     "count": 4
// }, grocery_list);
// add({
//     "product_name": "milk1",
//     "bought": false,
//     "count": 4
// }, grocery_list);
// print(grocery_list);
// /*Покупка продукта. Функция принимает название продукта и отмечает его как купленный.*/
// /*найти продукт*/
// console.log("000000000");
// console.log(grocery_list);
// console.log(grocery_list[0].product_name);
// function pokupka(obj, arr) {
//     arr.find()
// }
// pokupka({
//     "product_name": "Bread"
// });
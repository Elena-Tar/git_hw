"use strict";

var topPanel = {
  info: function info() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    this.showPanel(text, "info", autoclose);
  },
  success: function success() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    this.showPanel(text, "success", autoclose);
  },
  danger: function danger() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.showPanel(text, "danger", autoclose);
  },
  warning: function warning() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.showPanel(text, "warning", autoclose);
  },
  showPanel: function showPanel(text, type, autoclose) {
    var btn = autoclose ? "" : '<button onclick="topPanel.closePanel()>&times;</button>';
    var h = "<div id=\"top_panel\" class=\"panel_".concat(type, "\">\n          <p>").concat(text, "</p>").concat(btn, "<div></div>");

    if (document.getElementById("top_panel") !== null) {
      this.closePanel();
    }

    document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", h);

    if (autoclose) {
      var _this = this;

      setTimeout(function () {
        _this.closePanel();
      }, 3000);
    }
  },
  closePanel: function closePanel() {
    document.getElementById("top_panel").remove();
  }
};
/*
{
title: "",
price:0.00,
qty:0,
buy: false
}
*/

var CART = [];
var cartAction = {
  add: function add($prod) {
    // $prod переменная, просто объект
    $prod.buy = false; // CART.find(function ()); //find содержит в себе функцию котороя должна вернуть результат
    // CART.find(function (el) { }); // эта функция аргументом принимает текущий элемент в массиве а в {тело функции} 
    // if (el.title == $prod.title) {         //если в элементе el поле title равно тому что нам пришло в объекте $prod по ключу title нам нужно вернуть элемент
    // return el;                         // результат возвращается в find, а find должен его присвоить в кокую-то переменную, ее надо объявить let isset_prod 
    // }
    // итого получили
    // let isset_prod = CART.find(function (el) {
    //     if (el.title == $prod.title) {
    //         return el;
    //     }
    // });
    // let isset_prod = CART.find((el) => el.title == $prod.title);  //тоже самое стрелочная функция

    var isset_prod = CART.find(function (el) {
      return el.title == $prod.title;
    } // function , избавляемся от стрелки, ставим квадратные скобки, в конце точку с запятой и return
    );

    if (isset_prod !== undefined) {
      var new_qty = $prod.qty + isset_prod.qty;
      var prod_ind = CART.findIndex(function (el) {
        return el.title === $prod.title;
      });
      CART[prod_ind].qty = new_qty;
      CART[prod_ind].buy = false;
    } else {
      CART.push($prod);
    } // console.log(isset_prod);
    // CART.push($prod);

  },
  buyed: function buyed(k) {
    if (CART[k].buy) {
      CART[k].buy = false;
    } else {
      CART[k].buy = true;
    }

    printCart(); //чтобы увидеть результаты
  },
  dlt: function dlt(k) {
    if (!CART[k].buy) {
      if (confirm("Ready dalete product: " + CART[k].title + "?")) {
        CART.splice(k, 1);
        printCart();
      }
    } else {
      topPanel.warning("Product already buyed", true);
    }
  },
  maxTotal: function maxTotal() {
    var max_key = 0;
    var max_total = CART[0].price * CART[0].qty;

    for (var _i = 1; _i < CART.length; _i++) {
      if (CART[_i].price * CART[_i].qty > max_total) {
        max_total = CART[_i].price * CART[_i].qty;
        max_key = _i;
      }
    }

    return {
      title: CART[max_key].title,
      total: max_total
    };
  },
  letSort: function letSort(arr) {
    arr.sort(function (a, b) {
      if (a.buy !== false) {
        return 1;
      } else {
        return -1;
      }
    }); // console.log(arr);

    printCart();
  }
};

function mySort() {
  cartAction.letSort(CART);
}

function maxTotalProduct() {
  var prod = cartAction.maxTotal();
  var res = "\n    <p><b> ".concat(prod.title, "</b> ").concat(prod.total.toFixed(2), "</p>\n    ");
  document.getElementById("max_prod").innerHTML = res;
}

function addToCart() {
  var title = document.getElementById("prod_name").value,
      //взяли значения из полей
  price = parseFloat(document.getElementById("prod_price").value),
      qty = parseInt(document.getElementById("prod_qty").value);
  var valid = true,
      //валидируем(проверяем) эти значения
  errMsg = []; // объявили переменную в которую будем записывать ошибки потом добавим join  , и будем выводить сразу все ошибки

  if (title === "") {
    //дальше проверка если title равен пустой строке
    valid = false;
    errMsg.push("Enter product name."); //мы в массив  errMsg передаем текст(елемент)
  }

  if (isNaN(price) || price <= 0) {
    valid = false;
    errMsg.push("Enter product price");
  }

  if (qty <= 0) {
    valid = false;
    errMsg.push("Enter product qty.");
  }

  if (valid) {
    // если все данные валидные значит valid= true, то мы добавляем товар
    cartAction.add({
      title: title,
      // первый title ключ - второй title это переменная 
      price: price,
      qty: qty // buy: false

    });
    document.getElementById("prod_name").value = ""; // нет разницы можно до  printCart() можно послеж

    document.getElementById("prod_price").value = "";
    document.getElementById("prod_qty").value = "1";
    document.getElementById("prod_name").focus();
    printCart(); // после того как добавили товары функция чтобы вывести этот товар на экран
  } else {
    // иначе valid = false и мы выводим ошибку
    topPanel.warning(errMsg.join(""), true);
  }
}

function printCart() {
  //метод который будет печатать состояние корзины
  var res = "<ul>",
      cart_total = 0;
  qty_total = 0;

  for (var _i2 = 0; _i2 < CART.length; _i2++) {
    var prod = CART[_i2];
    var is_buy = prod.buy ? "<span class=\"badge bg-success\">&#10003;</span>" : "<span class=\"badge bg-danger\">&times;</span>";
    var prod_total = prod.qty * prod.price;
    cart_total += prod_total;
    qty_total += prod.qty;
    res += "\n        <li class=\"mb-3\">\n            ".concat(is_buy, " <b>").concat(prod.title, "<b>  ").concat(prod.qty, " x  ").concat(prod.price.toFixed(2), " =  ").concat(prod_total.toFixed(2), "\n            <div class=\"mt-2 text-end\">\n                <button type=\"button\" class =\"btn btn-info btn-sm mr-4\" onclick =\"cartAction.buyed(").concat(_i2, ")\">Buyed</button>     \n                <button type=\"button\" class =\"btn btn-danger btn-sm\" onclick =\"cartAction.dlt(").concat(_i2, ")\">Delete</button>     \n            </div>\n           \n        </li> ");
  } //добавили  2 кнопку для покупки и удаления на ннее навешали onclick в к-й передается ключ объекта 


  res += "<li> <b> TOTAL: <b>".concat(cart_total.toFixed(2), "</li>");
  res += "<li> <b> Avg_positions: <b>".concat((cart_total / CART.length).toFixed(2), "</li>");
  res += "<li> <b> Avg_units: <b>".concat((cart_total / qty_total).toFixed(2), "</li>");
  res += "</ul>";
  document.getElementById("cart_list").innerHTML = res;
} // function printCart() {    //метод который будет печатать состояние корзины
//     let res = `<ul>`;
//     for (let i = 0; i < CART.length; i++) {
//         res += `
//         <li>
//              <b>${CART[i].title}<b>  // выводим название товара
//              ${CART[i].qty} *         // выводим название количество 
//              ${CART[i].price} =           // выводим название стоимость
//              ${CART[i].qty * CART[i].price}     // сразу перемножаем
//         </li>
//         `;
//     }
//     res += `</ul>`;
//     document.getElementById("cart_list").innerHTML = res;
// }

/*задача 3*/


var arr_style = [{
  prop: "color",
  value: "red"
}, {
  prop: "font-size",
  "value": 30
}, {
  prop: "text-align",
  "value": "center"
}, {
  prop: "text-decoration",
  value: "underline"
}];

function myStyle() {
  var mytext = document.getElementById("text_style").value;
  debugger;
  var stl = "";

  for (i = 0; i < arr_style.length; i++) {
    stl += "".concat(arr_style[i].prop, ":").concat(arr_style[i].value, ";\n       "); // console.log(stl);
  }

  var res = "<p style=\"".concat(stl, "\"> ").concat(mytext, "</p>");
  document.getElementById("res_style").innerHTML = res;
}

;
/*задача 4*/

var arrAudience = [{
  numb_name: "first audience",
  quantity: 19,
  faculty_name: "Department of Economics"
}, {
  numb_name: "second audience",
  quantity: 12,
  faculty_name: "Faculty of Cybersecurity"
}, {
  numb_name: "third audience",
  quantity: 16,
  faculty_name: "Faculty of Business"
}, {
  numb_name: "fourth audience",
  quantity: 18,
  faculty_name: "Faculty of Automation and Electronics"
}, {
  numb_name: "fifth audience",
  quantity: 20,
  faculty_name: "Faculty of Tourism"
}];

function printAudience1(arr) {
  var res = "<ul>";

  for (var _i3 = 0; _i3 < arr.length; _i3++) {
    res += "<li> \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0430\u0443\u0434: ".concat(arr[_i3].numb_name, ";  \u041A\u043E\u043B.\u043C\u0435\u0441\u0442: ").concat(arr[_i3].quantity, ";  \u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442:").concat(arr[_i3].faculty_name, ";  </li>");
  }

  res += "</ul>";
  return res;
}

function printAudience() {
  var res = printAudience1(arrAudience);
  document.getElementById("res_print").innerHTML = res;
}

;

function search_by_faculty() {
  var data_faculty = document.getElementById("for_faculty").value; // let isset_el = arrAudience.find(function (el) {
  //     if (el.faculty_name == data_faculty) {
  //         return el;
  //     }
  // });

  var isset_id = arrAudience.findIndex(function (el) {
    if (el.faculty_name == data_faculty) {
      return el;
    }
  }); // console.log(isset_id);
  // console.log(arrAudience[isset_id]);

  var res = arrAudience[isset_id].numb_name;
  document.getElementById("res_faculty").innerHTML = res;
}

function search_by_characteristics() {
  var numb = document.getElementById("for_characteristics_1").value,
      qty = document.getElementById("for_characteristics_2").value,
      faculty = document.getElementById("for_characteristics_3").value;
  var isset_id = arrAudience.findIndex(function (el) {
    if (el.numb_name == numb && el.quantity >= qty && el.faculty_name == faculty) {
      return el;
    }
  });
  var res = "".concat(arrAudience[isset_id].numb_name, "; ").concat(arrAudience[isset_id].quantity, " ").concat(arrAudience[isset_id].faculty_name, " ");
  document.getElementById("res_characteristics").innerHTML = res;
}

function sort_audience() {
  // debugger;
  var arrnew = arrAudience.sort(function (a, b) {
    if (a.quantity > b.quantity) {
      return 1;
    } else if (a.quantity < b.quantity) {
      return -1;
    } else if (a.quantity == b.quantity) {
      return 0;
    }
  });
  var res = printAudience1(arrnew);
  document.getElementById("res_sort").innerHTML = res;
}

function sort_audience_alphabet() {
  var arrnew = arrAudience.sort(function (a, b) {
    if (a.numb_name > b.numb_name) {
      return 1;
    } else if (a.numb_name < b.numb_name) {
      return -1;
    } else if (a.numb_name == b.numb_name) {
      return 0;
    }
  });
  var res = printAudience1(arrnew);
  document.getElementById("res_sort_alphabet").innerHTML = res;
}
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// /*домашка*/
var Circle =
/*#__PURE__*/
function () {
  function Circle(options) {
    _classCallCheck(this, Circle);

    this.radius = options.radius;
  }

  _createClass(Circle, [{
    key: "ariaCircle",
    value: function ariaCircle() {
      var s = (Math.PI * Math.pow(this.radius, 2)).toFixed(2); // document.write(`<p>площадь: ${s}</p>`);

      return s;
    }
  }, {
    key: "circumference",
    value: function circumference() {
      var P = (2 * Math.PI * this.radius).toFixed(2); // document.write(`<p>длину окружности: ${P}</p>`);

      return P;
    }
  }, {
    key: "radiusInfo",
    get: function get() {
      return this.radius;
    },
    set: function set(newRadius) {
      this.radius = newRadius;
    }
  }, {
    key: "diameterInfo",
    get: function get() {
      var d = (2 * this.radius).toFixed(2); // document.write(`<p> диаметр: ${d}</p>`);

      return d;
    }
  }]);

  return Circle;
}();

var r1 = new Circle({
  radius: 6
}); // console.log(r1);
// console.log(r1.diameterInfo);
// console.log(r1.ariaCircle());
// console.log(r1.circumference());

var res1_1 = document.getElementById('res_radius');
res1_1.innerHTML = "Радиус окружности равен: " + r1.radius;
var res1_2 = document.getElementById('res_diameter');
res1_2.innerHTML = "Диаметр окружности равен: " + r1.diameterInfo;
var res1_3 = document.getElementById('res_aria');
res1_3.innerHTML = "Площадь окружности равна: " + r1.ariaCircle();
var res1_4 = document.getElementById('res_circumference');
res1_4.innerHTML = "Длина окружности равна " + r1.circumference();
var WORKERS = [{
  name: "Vasya1",
  position: "cashier",
  experience: 2
}, {
  name: "Vasya2",
  position: "administrator",
  experience: 4
}, {
  name: "Vasya3",
  position: "manager",
  experience: 8
}];
workers = new EmpTable(WORKERS);
workers.getHTML(document.getElementById("list_of_employees_res"));

var Marker =
/*#__PURE__*/
function () {
  function Marker(options) {
    _classCallCheck(this, Marker);

    this.color = options.color;
    this.quantity = options.quantity;
  }

  _createClass(Marker, [{
    key: "print",
    value: function print(text) {
      var style = "color: ".concat(this.color);
      var d = document.getElementById('res_text2');
      d.innerHTML = "<p style=\"".concat(style, "\">").concat(text, "</p>");
    }
  }, {
    key: "color_text",
    value: function color_text(text) {
      // debugger;
      var style = "color: ".concat(this.color);
      var a = this.quantity;
      var str = "";

      for (var i = 0; i < text.length; i++) {
        if (a !== 0) {
          if (text[i] !== " ") {
            a = a - 1;
          }

          str += text[i];
        } else {
          alert("Чернила закончились! Заправьте маркер!");
          break;
        }
      }

      this.print(str);
    }
  }]);

  return Marker;
}();

var blueText = new Marker({
  color: "blue",
  quantity: 2
});

function go_marker() {
  debugger;
  var text_1 = document.getElementById('text').value;

  if (text_1 !== "") {
    blueText.color_text(text_1);
    var btn = document.getElementById('btn-c');
    btn.classList.add('close');
  } else {
    alert("Введите текст");
  }
}

var Fill_marker =
/*#__PURE__*/
function (_Marker) {
  _inherits(Fill_marker, _Marker);

  function Fill_marker() {
    _classCallCheck(this, Fill_marker);

    return _possibleConstructorReturn(this, _getPrototypeOf(Fill_marker).apply(this, arguments));
  }

  _createClass(Fill_marker, [{
    key: "fill",
    value: function fill() {
      this.quantity += 10;
      console.log(this.quantity);
    }
  }]);

  return Fill_marker;
}(Marker);

var redText = new Fill_marker({
  color: "blue",
  quantity: 2
});

function fill_m() {
  debugger;
  var text_1 = document.getElementById('text').value;
  redText.fill(10);
  redText.color_text(text_1);
} // blueText.fill()
// blueText.color_text('a bb0000');
// function fill_marker() {
//     debugger;
//     let text_1 = document.getElementById('text').value;
//     blueText.fill(30);
//     blueText.color_text(text_1);
// }
// // blueText.fill();
// color_text(text) {
//     // debugger;
//     let style = `color: ${this.color}`;
//     let a = this.quantity;
//     let str = "";
//     for (let i = 0; i < text.length; i++) {
//         if (a !== 0) {
//             if (text[i] !== " ") {
//                 a = a - 1;
//             }
//             str += text[i];
//             // document.write(`<p style="${style}">${str}</p>`);
//             // this.print(text)
//             // console.log(str);
//         } else {
//             alert("Заправьте маркер");
//             break;
//         }
//     }
//     this.print(str)
// }
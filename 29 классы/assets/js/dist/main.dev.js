"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*домашка*/
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
      var s = (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
      document.write("<p>\u043F\u043B\u043E\u0449\u0430\u0434\u044C: ".concat(s, "</p>"));
      return s;
    }
  }, {
    key: "circumference",
    value: function circumference() {
      var P = (2 * Math.PI * this.radius).toFixed(2);
      document.write("<p>\u0434\u043B\u0438\u043D\u0443 \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0438: ".concat(P, "</p>"));
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
      var d = (2 * this.radius).toFixed(2);
      document.write("<p> \u0434\u0438\u0430\u043C\u0435\u0442\u0440: ".concat(d, "</p>"));
      return d;
    }
  }]);

  return Circle;
}();

var r1 = new Circle({
  radius: 6
});
console.log(r1);
console.log(r1.diameterInfo);
console.log(r1.ariaCircle());
console.log(r1.circumference());

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
      document.write("<p style=\"".concat(style, "\">").concat(text, "</p>"));
    }
  }, {
    key: "color_text",
    value: function color_text(text) {
      // debugger;
      var style = "color: ".concat(this.color);
      var a = this.quantity / 100;
      var res_text = 0;

      for (var i = a; i > 0; i = i - 0.05) {
        res_text++;
        console.log(res_text);
      }

      if (text.length <= res_text) {
        var res = text;
        document.write("<span style=\"".concat(style, "\"> ").concat(res, " <span>"));
      } else if (text.length > res_text) {
        var res1 = text.substr(0, res_text);
        console.log(res1);
        var res2 = text.substr(res_text);
        document.write("<span style=\"".concat(style, "\">").concat(res1, "</span><span >").concat(res2, " </span>"));
      }
    }
  }]);

  return Marker;
}();

var blueText = new Marker({
  color: "red",
  quantity: 100
});
blueText.color_text("Д лДлДлДлДлДллДлДлДлДлДллДлДлДлДлДллДлДлДлДлДллДлДлДлДлДллДлДлДлДлДл"); // class Refueling extends Marker {
//     constructor(options) {
//         super(options);
//     }
//     go_marker() {
//         this.quantity = 10;
//     }
// }
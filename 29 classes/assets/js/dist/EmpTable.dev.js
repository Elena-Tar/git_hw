"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EmpTable =
/*#__PURE__*/
function () {
  function EmpTable(news_list) {
    _classCallCheck(this, EmpTable);

    this.news_list = news_list;
  }

  _createClass(EmpTable, [{
    key: "getHTML",
    value: function getHTML(obj) {
      var res = "";

      for (var i = 0; i < this.news_list.length; i++) {
        res += "\n            <div class=\"my\">Name: ".concat(this.news_list[i].name, "</div>\n            <div class=\"my\">Position: ").concat(this.news_list[i].position, "</div>\n            <div class=\"my\">Work experience: ").concat(this.news_list[i].experience, "</div>   \n            <br>\n            ");
      }

      obj.innerHTML = res;
    }
  }]);

  return EmpTable;
}();
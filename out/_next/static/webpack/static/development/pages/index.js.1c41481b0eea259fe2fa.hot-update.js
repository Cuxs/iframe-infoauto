webpackHotUpdate("static/development/pages/index.js",{

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/*! exports provided: customFetch, prepareArraySelect, thousands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customFetch", function() { return customFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareArraySelect", function() { return prepareArraySelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thousands", function() { return thousands; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var format_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! format-number */ "./node_modules/format-number/index.js");
/* harmony import */ var format_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(format_number__WEBPACK_IMPORTED_MODULE_5__);






var customFetch = function customFetch(url, method, token, body) {
  var contentType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'application/json';
  var options = {
    headers: {
      'Content-Type': contentType,
      Accept: 'application/json'
    },
    method: method
  };

  if (token) {
    options.headers.Authorization = "Bearer ".concat(token);
  }

  if (body) {
    options.body = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(body);
  }

  return fetch(url, options).then(
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(response) {
      var resp, message;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (response.ok) {
                _context.next = 7;
                break;
              }

              _context.next = 3;
              return response.json();

            case 3:
              resp = _context.sent;
              console.error('Error completo: ', resp);
              message = resp.message;
              return _context.abrupt("return", _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.reject(new Error("Ocurri\xF3 un error en la ruta ".concat(url, ": ").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(resp.errors) || message))));

            case 7:
              return _context.abrupt("return", response.json());

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()).then(function (responseData) {
    return responseData;
  })["catch"](function (e) {
    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.reject(e);
  });
};
var prepareArraySelect = function prepareArraySelect(array, rowValue, rowLabel) {
  var newArray = [];
  Object(lodash__WEBPACK_IMPORTED_MODULE_4__["each"])(array, function (item) {
    var objectItem = {};
    objectItem.value = item[rowValue];
    objectItem.label = item[rowLabel];
    newArray.push(objectItem);
  });
  return newArray;
};
var thousands = function thousands(number, decimals) {
  var decPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
  var thousandsSep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
  return format_number__WEBPACK_IMPORTED_MODULE_5___default()({
    round: decimals,
    integerSeparator: thousandsSep,
    decimal: ','
  })(number);
};

/***/ })

})
//# sourceMappingURL=index.js.1c41481b0eea259fe2fa.hot-update.js.map
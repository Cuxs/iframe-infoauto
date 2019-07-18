webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PricesForm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_select_animated__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select/animated */ "./node_modules/react-select/animated/dist/react-select.browser.esm.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _queries_tauto_queries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../queries/tauto.queries */ "./queries/tauto.queries.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");








var _jsxFileName = "/Users/mariano/Trabajo/MAH/iframeInfoAuto/pages/index.js";









var customStyles = {
  input: function input(base) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, base);
  },
  valueContainer: function valueContainer(base) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, base, {
      minHeight: '50px'
    });
  },
  control: function control(base) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, base, {
      borderRadius: '0px',
      maxWidth: '250px'
    });
  }
};

var PricesForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PricesForm, _React$Component);

  function PricesForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PricesForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PricesForm).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "client", new apollo_boost__WEBPACK_IMPORTED_MODULE_13__["default"]({
      uri: "https://api.miautohoy.com/graphql"
    }));

    _this.state = {
      brand: '',
      model: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PricesForm, [{
    key: "handleChange",
    value: function handleChange(field, value) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, field, value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_12__["ApolloProvider"], {
        client: this.client,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container text-center form-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_12__["Query"], {
        query: _queries_tauto_queries__WEBPACK_IMPORTED_MODULE_14__["AllBrandsQuery"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, "Error :(");
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
          onSubmit: _this2.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
          className: "mb-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, "Completa los datos para obtener el precio del veh\xEDculo"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onChange: function onChange(_ref2) {
            var value = _ref2.value;
            return _this2.handleChange('brand', value);
          },
          placeholder: "Selecciona la marca",
          components: Object(react_select_animated__WEBPACK_IMPORTED_MODULE_10__["default"])(),
          options: Object(_helpers__WEBPACK_IMPORTED_MODULE_15__["prepareArraySelect"])(data.AllBrands, 'ta3_nmarc', 'ta3_marca'),
          styles: customStyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_12__["Query"], {
          query: _queries_tauto_queries__WEBPACK_IMPORTED_MODULE_14__["GroupsQuery"],
          skip: !_this2.state.brand,
          variables: {
            gru_nmarc: _this2.state.brand
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, function (_ref3) {
          var loading = _ref3.loading,
              error = _ref3.error,
              data = _ref3.data;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }, "Loading...");
          if (error) return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }, "Error :(");
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_11__["default"], {
            onChange: function onChange(_ref4) {
              var value = _ref4.value;
              return _this2.handleChange('model', value);
            },
            placeholder: "Selecciona el grupo",
            components: Object(react_select_animated__WEBPACK_IMPORTED_MODULE_10__["default"])(),
            options: data ? Object(_helpers__WEBPACK_IMPORTED_MODULE_15__["prepareArraySelect"])(data.Group, 'gru_cgrup', 'gru_ngrup') : [],
            styles: customStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          });
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          type: "submit",
          className: "btn-primary",
          value: "Submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, "Ver precio"));
      })));
    }
  }]);

  return PricesForm;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.82e8ac94970b505d6140.hot-update.js.map
(function () {
  var __webpack_modules__ = {
    "./src/js/format.js": function (module) {
      const format = (str) =>
        str.replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,");
      module.exports = { format };
    },
    "./src/js/math.js": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        mul: function () {
          return mul;
        },
        sum: function () {
          return sum;
        },
      });
      const sum = (a, b) => {
        return a + b;
      };
      const mul = (a, b) => {
        return a * b;
      };
    },
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (__webpack_module_cache__[moduleId] = { exports: {} });
    if (!(moduleId in __webpack_modules__)) {
      delete __webpack_module_cache__[moduleId];
      var e = new Error("Cannot find module '" + moduleId + "'");
      e.code = "MODULE_NOT_FOUND";
      throw e;
    }
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }
  !(function () {
    __webpack_require__.n = function (module) {
      var getter =
        module && module.__esModule
          ? function () {
              return module["default"];
            }
          : function () {
              return module;
            };
      __webpack_require__.d(getter, { a: getter });
      return getter;
    };
  })();
  !(function () {
    __webpack_require__.d = function (exports, definition) {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();
  !(function () {
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
  })();
  !(function () {
    __webpack_require__.r = function (exports) {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
  })();
  var __webpack_exports__ = {};
  !(function () {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var _js_format_js__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__("./src/js/format.js");
    var _js_format_js__WEBPACK_IMPORTED_MODULE_0___default =
      __webpack_require__.n(_js_format_js__WEBPACK_IMPORTED_MODULE_0__);
    const math = __webpack_require__("./src/js/math.js");
    console.log(math.sum(1, 2));
    console.log(math.mul(1, 2));
    console.log(
      _js_format_js__WEBPACK_IMPORTED_MODULE_0___default()("1234567890"),
    );
  })();
})();

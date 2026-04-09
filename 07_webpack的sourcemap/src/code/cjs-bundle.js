var __webpack_modules__ = {
  /***/ "./src/js/format.js": /***/ function (module) {
    const format = (str) =>
      str.replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,");
    module.exports = {
      format,
    };
  },
};
var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  var module = (__webpack_module_cache__[moduleId] = {
    exports: {},
  });
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
  const { format } = __webpack_require__("./src/js/format.js");
  console.log(format("1234567890"));
})();
//# sourceMappingURL=bundle.js.map

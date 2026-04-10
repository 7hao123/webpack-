import "./math";
console.log("123");
console.log("index.js");

if (module.hot) {
  module.hot.accept("./math.js", function () {
    console.log("math.js更新了");
  });
}

const path = require("path");
const resolveApp = require("./path").resolveApp;
const merge = require("webpack-merge");
module.exports = function (env) {
  console.log(env);
  //   { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true, production: true }
  const isProduction = env.production;
  process.env.NODE_ENV = isProduction ? "production" : "development";
  const commonConfig = {
    entry: "./src/main.js",
    output: {
      path: resolveApp("./build"),
      clean: true,
    },
    resolve: {
      extensions: [".js", ".ts", ".jsx", ".tsx"],
      alias: {
        "@": resolveApp("./src"),
      },
    },
  };
  const devConfig = {};
  const prodConfig = {};
  return isProduction
    ? merge(commonConfig, prodConfig)
    : merge(commonConfig, devConfig);
};

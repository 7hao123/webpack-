const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "utils.js",
    // 兼容多种环境 AMd/cjs/浏览器
    libraryTarget: "umd",
    library: "myutils",
  },
};

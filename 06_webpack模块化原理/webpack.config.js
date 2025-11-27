const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    // 必须是绝对路径
    path: path.resolve(__dirname) + "/build",
    filename: "bundle.js",
    // assetModuleFilename: "img/[name][hash:8][ext]",
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new DefinePlugin({
      // 定义全局变量
      BASE_URL: "'./'",
    }),
  ],

};

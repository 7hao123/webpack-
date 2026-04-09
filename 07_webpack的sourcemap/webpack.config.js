const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "cheap-source-map",
  output: {
    // 必须是绝对路径
    path: path.resolve(__dirname) + "/build",
    filename: "bundle.js",
    // assetModuleFilename: "img/[name][hash:8][ext]",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
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

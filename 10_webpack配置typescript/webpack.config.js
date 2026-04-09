const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "cheap-source-map",
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
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
      {
        test: /\.ts$/,
        exclude: /node_modules/, // 排除 node_modules 目录
        use: "ts-loader",
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack TypeScript Example",
      template: "./index.html", // 指定 HTML 模板
    }),
    new DefinePlugin({
      // 定义全局变量
      BASE_URL: "'./'",
    }),
  ],
};

const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/build",
  },
  //可以改变webpack-dev-server的默认路径
  devServer: {
    devMiddleware: {
      publicPath: "/test/",
    },
    // static: {
    //   directory: __dirname + "/public",
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Plugin Example",
      template: "./index.html",
    }),
  ],
};

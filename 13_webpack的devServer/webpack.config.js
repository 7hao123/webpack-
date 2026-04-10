const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/build",
  },
  resolve: {
    extensions: [".js", ".ts"],
    alias: {
      "@": "/src",
    },
  },
  //可以改变webpack-dev-server的默认路径
  devServer: {
    devMiddleware: {
      publicPath: "/test/",
    },
    // static: {
    //   directory: __dirname + "/public",
    // },
    open: true,
    hot: true,
    hotOnly: true, // 只在模块热更新失败依然热更新
    compress: true, //压缩
    port: 8080,
    host: "0.0.0.0", //其他电脑也能访问
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" }, //重写路径
        secure: false, //是否验证ssl证书
        changeOrigin: true, //是否改变请求头中的host
      },
    },
    historyApiFallback: true, // 解决单页应用刷新404问题
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Plugin Example",
      template: "./index.html",
    }),
  ],
};

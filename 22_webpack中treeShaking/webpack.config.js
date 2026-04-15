const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const cssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
module.exports = {
  entry: {
    main: "./src/main.js",
    // index: "./src/index.js",
  },
  mode: "development",
  devtool: "source-map",
  // entry: {
  //   main: { import: "./src/main.js", dependOn: "lodash" },
  //   index: { import: "./src/index.js", dependOn: "lodash" },
  //   lodash: "lodash",
  // },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/build",
    chunkFilename: "[name].[contenthash:6].chunk.js",
    clean: true,
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
  optimization: {
    usedExports: true, //启用tree shaking,标注哪些函数是没有被使用的，有魔法注释，terser会优化，production默认开启
    // concatenateModules: true, //scope hosting
    // runtimeChunk: "single", //将运行时代码单独分离成一个chunk
    chunkIds: "named", //开发环境推荐
    // deterministic: 生产环境默认值，基于模块内容生成一个短的hash作为id，保证在模块内容不变的情况下id不变
    splitChunks: {
      // chunks: "async", //默认值，表示只对异步加载的模块进行分割
      // chunks: "initial", //表示对入口文件和同步加载的模块进行分割
      chunks: "all", //表示对所有模块进行分割，包括入口文件、同步加载和异步加载的模块
      // minSize: 20000, //分割的最小大小，单位为字节
      // maxSize: 70000, //将大于minSize的包拆分成不小于minSize的包
      minChunks: 1, //分割前必须共享模块的最小次数
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          filename: "[id]._vendors.js",
          priority: -10, //优先级，数值越大优先级越高
        },
        bar: {
          test: /bar_/,
          filename: "[id].bar.js",
        },
        default: {
          minChunks: 2,
          filename: "common_[id].js",
          priority: -20,
        },
      },
    },
    minimize: true, //启用代码压缩
    minimizer: [
      new TerserPlugin({
        extractComments: false, //是否将注释提取到单独的文件中
        terserOptions: {
          mangle: true, //是否启用变量和函数名的混淆
          compress: {
            pure_funcs: ["console.log"],
          },
        },
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Plugin Example",
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new cssMinimizerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        sideEffects: true, //标记css文件有副作用，不会被tree shaking删除
      },
    ],
  },
};

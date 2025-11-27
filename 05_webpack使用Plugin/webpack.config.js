const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
console.log(path.resolve(__dirname, "public/index.html"));
module.exports = {
  entry: "./src/index.js",
  output: {
    // 必须是绝对路径
    path: path.resolve(__dirname) + "/build",
    filename: "bundle.js",
    // assetModuleFilename: "img/[name][hash:8][ext]",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        // use: [{loader: 'style-loader'，options: {sourceMap: true}}, 'css-loader']
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // 解决css中引入其他css的问题
              importLoaders: 1,
              sourceMap: true,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        // type: "asset/resource",
        type: "asset",
        generator: {
          filename: "img/[name][hash:8][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb的图片转化成base64
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name][hash:8][ext]",
        },
      },
      // {
      //     test: /\.js$/,
      //     exclude: /node_modules/,
      //     use: {
      //     loader: "babel-loader",
      //     options: {
      //         presets: ["@babel/preset-env"],
      //     },
      //     },
      // },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack Plugin Example",
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new DefinePlugin({
      // 定义全局变量
      BASE_URL: "'./'",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          // to: path.resolve(__dirname, "build"),
          globOptions: {
            ignore: ["**/index.html"], // 忽略index.html
          },
        },
      ],
    }),
    // new plugin(),
  ],

};

// module.exports = {
//   presets: [
//     [
//       "@babel/preset-env",
//       {
//         targets: {
//           ie: "11",
//         },
//       },
//     ],
//   ],
//   plugins: [
//     [
//       "@babel/plugin-transform-runtime",
//       {
//         corejs: 3,
//       },
//     ],
//   ],
// };

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          ie: "11", // 或者你要兼容的浏览器
        },
        useBuiltIns: "usage", // 自动按需引入 polyfill
        corejs: 3, // 指定 core-js 版本
      },
    ],
  ],
};

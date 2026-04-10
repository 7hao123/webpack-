const express = require("express");
const webpack = require("webpack");
const webpakDevMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("./webpack.config");

const compiler = webpack(webpackConfig);

const server = new webpakDevMiddleware(compiler, {});
const app = express();
app.use(server);
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

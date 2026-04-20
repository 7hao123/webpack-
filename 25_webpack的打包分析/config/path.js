const path = require("path");

// 当前线程目录
const appDir = process.cwd();
console.log(appDir);
console.log(__dirname);
const resolveApp = (relativePath) => path.resolve(appDir, relativePath);
module.exports = { resolveApp };

const presets = [["@babel/preset-nev"], ["@babel/preset-react"]];
const plugins = [];

if (isDevelopment) {
  plugins.push("react-refresh/babel");
}

module.exports = {
  presets,
  plugins,
};

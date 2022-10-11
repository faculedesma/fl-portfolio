const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "production",
  devtool: "source-map",
};

module.exports = merge(commonConfig, devConfig);

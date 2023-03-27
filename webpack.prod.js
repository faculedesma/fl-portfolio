const { merge } = require("webpack-merge");
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};

module.exports = merge(commonConfig, prodConfig);

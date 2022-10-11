const { merge } = require("webpack-merge");
const path = require("path");
const commonConfig = require("./webpack.common");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [new BundleAnalyzerPlugin()],
};

module.exports = merge(commonConfig, devConfig);

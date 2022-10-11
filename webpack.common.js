const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = {
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|gif|ico|mp3|mp4)/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8192,
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "FL | Facundo Ledesma",
      filename: "index.html",
      template: "src/assets/template.html",
      favicon: "src/assets/logo.ico",
    }),
  ],
};

module.exports = commonConfig;

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "style.[contenthash].css" })],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
});

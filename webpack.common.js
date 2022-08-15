const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpeg|jpg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant page",
      template: "src/template.html",
    }),
  ],
};

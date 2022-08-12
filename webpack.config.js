const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpeg|jpg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

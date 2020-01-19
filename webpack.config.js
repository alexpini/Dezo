const webpack = require("webpack");

module.exports = {
  entry: ["@babel/polyfill", "./client/index.js"],
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map",
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.jpg$/,
        loader: ["file-loader"]
      }
    ]
  }
};

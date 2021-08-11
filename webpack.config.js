const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const stylesHandler = MiniCssExtractPlugin.loader;

module.exports = {
  mode: "production",
  // "externals": {
  //   react: {
  //     root: "React",
  //     commonjs2: "react",
  //     commonjs: "react",
  //     amd: "react",
  //     umd: "react",
  //   },
  //   "react-dom": {
  //     root: "ReactDOM",
  //     commonjs2: "react-dom",
  //     commonjs: "react-dom",
  //     amd: "react-dom",
  //     umd: "react-dom",
  //   },
  // },

  target: ["web", "es5"],
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "nir-components.js",
    libraryTarget: "commonjs2",
  },
  plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin()],
  devtool: false,
  stats: "normal",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    // alias: {
    //   react: path.resolve("./node_modules/react"),
    // },
    extensions: [
      ".js",
      ".jsx",
      ".sass",
      ".scss",
      ".css",
      ".wasm",
      ".web.js",
      ".mjs",
      ".json",
      ".web.jsx",
    ],
  },
};

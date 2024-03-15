const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    port: port,
    allowedHosts: "all",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    mainFiles: ["index", "Index"],
    extensions: [".js", ".jsx"],
    alias: {
      src: path.resolve(__dirname, "src/"),
      components: path.resolve(__dirname, "src/components"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};

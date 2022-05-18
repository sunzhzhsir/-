const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "main.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/chunk-[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|s[sc]ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
          {
            loader: "style-resources-loader",
            options: {
              patterns: path.join(__dirname, "./src/resources/color.less"),
            },
          },
        ],
        include: path.join(__dirname, "src"),
        exclude: /node_modules/,
      },
      {
        test: /.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/chunk-[contenthash].css",
      ignoreOrder: true,
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: [".vue", ".js", ".less"],
  },
  devServer: {
    open: true,
  },
};

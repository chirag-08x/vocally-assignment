const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    clean: true,
    assetModuleFilename: `[name][ext]`,
  },

  devtool: "source-map",

  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
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
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "public/index.html",
    }),
  ],
};

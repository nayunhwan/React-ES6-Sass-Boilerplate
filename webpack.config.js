module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],

  output: {
    path: __dirname + "/public/",
    filename: "bundle.js"
  },

  devServer: {
    inline: true,
    port: 7777,
    contentBase: __dirname + "/public/",
    historyApiFallback: true
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["es2015", "react", "stage-0"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=/public/icons/[name].[ext]"
      }
    ]
  }
};

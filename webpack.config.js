module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],

  output: {
    path: __dirname + "/build/",
    filename: "bundle.js"
  },

  devServer: {
    inline: true,
    port: 7777,
    contentBase: __dirname + "/build/",
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
        test: /\.s?css$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        options: {
          modules: true,
          minimize: true,
          localIdentName: "[name]__[local]__[hash:base64:3]",
          includePaths: ["node_modules", "src", "."]
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=/public/icons/[name].[ext]"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader"
      }
    ]
  }
};

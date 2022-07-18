const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'my-first-webpack-bundle.js',
  },    
  stats: 'errors-warnings',
  module: {
    rules: [      
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
    new MiniCssExtractPlugin()
  ],
  devServer: {    
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,    
  },
  
};
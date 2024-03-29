var webpack = require('webpack');

var path = require('path');  
// var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {  
  devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map' ,
  entry: [
    path.resolve(ROOT_PATH, 'app/src/index'),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot-loader/webpack', 'babel-loader', 'eslint-loader'],
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader','css-loader','sass-loader']
    }]
  },
  resolve: {
    extensions: [/*'', */'.js', '.jsx']
  },
  output: {
    path: process.env.NODE_ENV === 'production' ? path.resolve(ROOT_PATH, 'app/dist') : path.resolve(ROOT_PATH, 'app/build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'app/build'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new HtmlwebpackPlugin({
    //   title: 'Listlogs'
    // })
  ]
};

/*
* @Author: CH
* @Date:   2017-08-07 22:31:39
* @Last Modified by:   CH
* @Last Modified time: 2017-08-07 23:21:34
*/
'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/src/"
  },
  
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      include: __dirname,
      query: {
        presets: [ "es2015", "react" ]
      }
    }]
  }
}
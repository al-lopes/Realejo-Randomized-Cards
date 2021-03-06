const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
	devtool: 'source-map',
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
	module : {
     loaders : [
       {
         test : /\.js?/,
         include : APP_DIR,
         loader : 'babel-loader'
       }
     ]
   }
};

module.exports = config;

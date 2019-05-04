const path = require('path');
const modules = require('./module');
const alias = require('./alias');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  // building a bundle for nodejs
  target: 'node',

  // tell webpack the root file of our server application
  entry: path.resolve(__dirname, '../src/server'),

  // tell webpack where to output the file
  output: {
    filename: 'bundle.js',
    // work out where I want this folder to be
    path: path.resolve(__dirname, '../build'),
  },

  // don't include node modules in our server bundle file
  externals: [webpackNodeExternals()],

  // import shared parts
  module: modules,
  resolve: { alias }
};

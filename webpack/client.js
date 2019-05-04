const path = require('path');
const modules = require('./module');
const alias = require('./alias');

module.exports = {
  // tell webpack the root file of our server application
  entry: path.resolve(__dirname, '../src/app'),

  // tell webpack where to output the file
  output: {
    filename: 'bundle.js',
    // work out where I want this folder to be
    path: path.resolve(__dirname, '../public'),
  },

  // import shared parts
  module: modules,
  resolve: { alias }
};

const path = require('path');

module.exports = {
  // building a bundle for nodejs
  target: 'node',

  // tell webpack the root file of our server application
  entry: path.resolve(__dirname, 'index.js'),

  // tell webpack where to output the file
  output: {
    filename: 'bundle.js',
    // work out where I want this folder to be
    path: path.resolve(__dirname, '../../build'),
  },

  // tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }
};

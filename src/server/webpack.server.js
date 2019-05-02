const path = require('path');

module.exports = {
  // building a bundle for nodejs
  target: 'node',

  // tell webpack the root file of our server application
  entry: './index.js',

  // tell webpack where to output the file
  output: {
    filename: 'bundle.js',
    path: path.resulve(__dirname, 'build'),
  },

  // tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] }}],
          ]
        }
      }
    ]
  }
};

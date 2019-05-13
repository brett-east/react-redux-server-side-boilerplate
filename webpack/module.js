module.exports = {
  rules: [
    {
      test: /\.js?$/,
      use: [
        {
          loader: 'babel-loader',
          query: {
            babelrc: true,
          },
        },
      ],
      exclude: /node_modules/,
    },
  ],
};

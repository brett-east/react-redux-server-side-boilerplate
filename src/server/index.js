const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const App = require('../app/app').default;

const app = express();

app.get('/', (res, req) => {
  const content = renderToString(<App />);

  res.send(content);
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});

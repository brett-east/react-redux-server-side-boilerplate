import express from 'express';
import renderer from './renderer';
import createStore from './createStore';

const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});

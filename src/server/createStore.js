import { createStore, applyMiddleware } from 'redux';
import { createSagaMiddleware } from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    reducers,
    {},
    applyMiddleware(sagaMiddleware),
  );

  return store;
}

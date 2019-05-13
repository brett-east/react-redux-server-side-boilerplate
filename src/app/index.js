// Start point for client side app
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import sagas from './sagas';
import Routes from '../routes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(sagas);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

// Start point for client side app
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

console.log('hey');

ReactDOM.hydrate(<App />, document.getElementById('root'));

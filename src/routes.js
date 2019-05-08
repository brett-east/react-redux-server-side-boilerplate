import React from 'react';
import { Route } from 'react-router-dom';
import App from './app/app';

export default () => {
  return (
    <>
      <Route exact path="/" component={App} />
    </>
  );
}

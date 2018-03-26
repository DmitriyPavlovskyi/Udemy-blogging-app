import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './root/reducer';
import promise from 'redux-promise';
// We need feed redux-promise to applyMiddleware to use it
import Root from './root/app';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Root />
  </Provider>
  , document.querySelector('.container'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './state/store.js';
import App from './components/App.jsx';

const rootElement = document.getElementById('page');

import selectProduct from './state/actions/selectProduct';
store.dispatch(selectProduct(16060));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
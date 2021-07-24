import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './state/store.js';
import App from './components/App.jsx';

const rootElement = document.getElementById('page');

import selectProduct from './state/actions/selectProduct';
import setProductInfo from './state/actions/setProductInfo';
import setStyleInfo from './state/actions/setStyleInfo';

ReactDOM.render(
  <Provider store={store}>
    <App productID={16060}/>
  </Provider>,
  rootElement
);
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './state/store.js';
import App from './components/App.jsx';

const rootElement = document.getElementById('page');

var product = 16060;
ReactDOM.render(
  <Provider store={store}>
    <App product={product}/>
  </Provider>,
  rootElement
);
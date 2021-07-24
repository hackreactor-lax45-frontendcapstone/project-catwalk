import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import AtelierAPI from './lib/atelierAPI';

import createStore from './state/store.js';
import App from './components/App.jsx';

const rootElement = document.getElementById('page');

var product = 16060;
axios({
  url: `${AtelierAPI.url}/products/${product}`,
  method: 'get',
  headers: AtelierAPI.headers,
})
  .then(productInfo => {
    return {
      cart: [],
      style: '',
      size: '',
      quantity: '',
      thumbnail: '',
      api: {
        product: productInfo.data,
      }
    };
  })
  .then(initialState => {
    console.log(initialState);
    var store = createStore(initialState);
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      rootElement
    );
  })
  .catch(err => console.error(err));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './state/store.js';
import App from './components/App.jsx';

const rootElement = document.getElementById('page');

ReactDOM.render(
  <Provider store={store}>
    <App product={16060}/>
  </Provider>,
  rootElement
);
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './state/store.js';
import App from './components/App.jsx';
import ClickTracker from './components/ClickTracker.jsx';

const rootElement = document.getElementById('page');

ReactDOM.render(
  <Provider store={store}>
    <ClickTracker
      render={(handleInteraction) => {
        return <App handleInteraction={handleInteraction}/>;
      }}/>
  </Provider>,
  rootElement
);
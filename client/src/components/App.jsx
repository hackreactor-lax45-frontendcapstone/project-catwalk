import React from 'react';

import Overview from './Overview.jsx';
import RelatedItems from './RelatedItems.jsx';
import QuestionAnswer from './QuestionAnswer.jsx';
import RatingsReviews from './RatingsReviews.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../state/action-creators/index.js';

/*
How to access state and action creators in a different file
  import { useSelector, useDispatch } from 'react-redux';
  import { bindActionCreators } from 'redux';
  import actionCreators from '../state/action-creators/index.js';

  const state = useSelector(state => state);

  const boundActions = bindActionCreators(actionCreators, useDispatch());
  const { selectStyle, selectThumbnail, selectSize, selectQuantity } = boundActions;
*/

const App = () => {
  return (
    <div id="app">
      <div id="app-header">
        <Header />
      </div>
      <div id="app-body">
        <Overview />
        <RelatedItems />
        <QuestionAnswer />
        <RatingsReviews />
        <Footer />
      </div>
    </div>
  );
};

export default App;
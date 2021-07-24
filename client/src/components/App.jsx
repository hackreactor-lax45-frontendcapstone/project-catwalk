import React from 'react';
import { useDispatch } from 'react-redux';

import Overview from './Overview.jsx';
import RelatedItems from './RelatedItems.jsx';
import QuestionAnswer from './QuestionAnswer.jsx';
import RatingsReviews from './RatingsReviews.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

/*
How to access state and actions in a different file
  import { useSelector, useDispatch } from 'react-redux';
  import actions from '../state/actions/index.js';

  const state = useSelector(state => state);
  const dispatch = useDispatch();
  // onClick={() => dispatch(actions.selectThumbnail(2))}
*/

import setProductInfo from '../state/actions/setProductInfo.js';

export default ({ product }) => {

  setProductInfo(useDispatch(), product);

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
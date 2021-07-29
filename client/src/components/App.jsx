import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Overview from './Overview.jsx';
import Header from './Header.jsx';
import RelatedItems from './RelatedItems.jsx';
import QuestionAnswer from './QuestionAnswer.jsx';
import RatingsReviews from './RatingsReviews.jsx';
import Footer from './Footer.jsx';

/*
How to access state and actions in a different file
  import { useSelector, useDispatch } from 'react-redux';
  import actions from '../state/actions/index.js';

  const state = useSelector(state => state);
  OR
  const thumbnail = useSelector(state => state.thumbnail);

  const dispatch = useDispatch();
  var styleIndex = 0;
  // onClick={() => dispatch(actions.selectStyle(styleIndex))}
*/

import selectProduct from '../state/actions/selectProduct.js';

export default ({ productID }) => {

  const dispatch = useDispatch();
  selectProduct(dispatch, productID);

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
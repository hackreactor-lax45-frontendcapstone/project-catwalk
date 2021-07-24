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

import setProductInfo from '../state/actions/setProductInfo.js';
import setStyleInfo from '../state/actions/setStyleInfo.js';

export default () => {

  const productID = useSelector(state => state.productID);
  const dispatch = useDispatch();
  useEffect(() => {
    setProductInfo(dispatch, productID);
    setStyleInfo(dispatch, productID);
  }, [productID]);

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
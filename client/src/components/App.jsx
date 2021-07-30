import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Overview from './Overview.jsx';
import Header from './Header.jsx';
import RelatedItems from './RelatedItems.jsx';
import QuestionAnswer from './QuestionAnswer.jsx';
import RatingsReviews from './RatingsReviews.jsx';
import Footer from './Footer.jsx';

import actions from '../state/actions/index.js';

export default (props) => {

  const product = useSelector(state => state.product.productID) || 16060;

  const dispatch = useDispatch();
  useEffect(() => {
    actions.selectProduct(dispatch, product);
    actions.setRelated(dispatch, product);
    actions.setReviews(dispatch, product);
  }, [product]);

  return (
    <div onClick={props.handleInteraction} id="app">
      <div id="app-header">
        <Header />
        <div id="announcements"></div>
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
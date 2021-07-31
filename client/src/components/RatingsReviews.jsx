import React, { useEffect } from 'react';

import KeywordSearch from './RatingsReviews/KeywordSearch.jsx';
import ProductBreakdown from './RatingsReviews/ProductBreakdown.jsx';
import RatingBreakdown from './RatingsReviews/RatingBreakdown.jsx';
import ReviewComponent from './RatingsReviews/ReviewComponent.jsx';
import SortOptions from './RatingsReviews/SortOptions.jsx';
import WriteNewReview from './RatingsReviews/WriteNewReview.jsx';
import LoadMoreReviews from './RatingsReviews/LoadMoreReviews.jsx';
import ReviewList from './RatingsReviews/ReviewList.jsx';
import '../../dist/styles/ratingsreviews/reviews.css';
import '../../dist/styles/ratingsreviews/ratings.css';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../state/actions';

export default () => {

  const product = useSelector(state => state.product.productID) || 16060;
  const dispatch = useDispatch();

  useEffect(() => {
    actions.setReviews(dispatch, product, 1, 2, 'relevant');
  }, [product]);

  if (!product) {
    return (<div>Loading...</div>);
  }
  return (
    <div id="body-reviews">
      <div id="review-top">
        <div id="review-top-left">
          RATINGS AND REVIEW
        </div>
        <div id="review-top-right">SEARCH AND SORT
          <div id="review-right-top">
            <KeywordSearch />
          </div>
          <div id="review-right-bottom">
            <SortOptions />
          </div>
        </div>
      </div>
      <div id="review-bottom">
        <div id="review-bottom-left">
          <RatingBreakdown />
          <ProductBreakdown />
        </div>

        <div id="review-bottom-right">
          <ReviewList productId={product} />

        </div>

      </div>



    </div>
  );
};
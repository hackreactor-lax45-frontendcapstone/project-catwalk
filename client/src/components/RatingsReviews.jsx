import React from 'react';

import KeywordSearch from './RatingsReviews/KeywordSearch.jsx';
import ProductBreakdown from './RatingsReviews/ProductBreakdown.jsx';
import RatingBreakdown from './RatingsReviews/RatingBreakdown.jsx';
import SortOptions from './RatingsReviews/SortOptions.jsx';
import ReviewList from './RatingsReviews/ReviewList.jsx';
import '../../dist/styles/ratingsreviews/reviews.css';
import '../../dist/styles/ratingsreviews/ratings.css';
import actions from '../state/actions';

export default () => {
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
        <ReviewList />
      </div>
    </div>
  );
};
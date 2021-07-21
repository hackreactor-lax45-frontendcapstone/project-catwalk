import React from 'react';

import KeywordSearch from './RatingsReviews/KeywordSearch.jsx';
import ProductBreakdown from './RatingsReviews/ProductBreakdown.jsx';
import RatingBreakdown from './RatingsReviews/RatingBreakdown.jsx';
import ReviewComponent from './RatingsReviews/ReviewComponent.jsx';
import ReviewsList from './RatingsReviews/ReviewsList.jsx';
import SortOptions from './RatingsReviews/SortOptions.jsx';
import WriteNewReview from './RatingsReviews/WriteNewReview.jsx';

export default props => {
  return (
    <div>
      <KeywordSearch />
      <ProductBreakdown />
      <RatingBreakdown />
      <ReviewComponent />
      <ReviewsList />
      <SortOptions />
      <WriteNewReview />
    </div>
  );
};
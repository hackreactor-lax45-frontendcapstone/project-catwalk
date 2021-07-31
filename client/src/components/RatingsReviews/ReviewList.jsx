import React from 'react';
import WriteNewReview from './WriteNewReview.jsx';
import LoadMoreReviews from './LoadMoreReviews.jsx';
import ReviewComponent from './ReviewComponent.jsx';

const ReviewList = (props) => {

  return (
    <div>
      <ReviewComponent productId={props.productId} />
      <div id="review-buttons">
        <WriteNewReview />
        <LoadMoreReviews productId={props.productId} />
      </div>
    </div>
  );
};

export default ReviewList;
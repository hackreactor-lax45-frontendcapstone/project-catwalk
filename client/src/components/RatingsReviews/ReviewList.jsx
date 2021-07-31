import React from 'react';
import WriteNewReview from './WriteNewReview.jsx';
import ReviewComponent from './ReviewComponent.jsx';
import { useDispatch } from 'react-redux';
import actions from '../../state/actions/index.js';

const ReviewList = (props) => {
  let count = 4;
  const dispatch = useDispatch();

  const moreReviews = () => {
    actions.setReviews(dispatch, props.productId, 1, count, 'relevant');
    count += 2;
  };


  return (
    <div>
      <ReviewComponent productId={props.productId} />
      <div id="review-buttons">
        <WriteNewReview />
        <button onClick={moreReviews} > More Reviews</button>
      </div>
    </div>
  );
};

export default ReviewList;
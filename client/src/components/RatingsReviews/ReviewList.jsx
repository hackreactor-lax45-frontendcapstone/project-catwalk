import React from 'react';
import ReviewComponent from './ReviewComponent.jsx';
import { useDispatch } from 'react-redux';
import actions from '../../state/actions/index.js';

const ReviewList = (props) => {
  let reviewsCount = 2;
  const dispatch = useDispatch();

  const totalReviews = 6;
  const totalClicks = Math.ceil(totalReviews / 2) - 1;
  let clicks = 1;

  const moreReviews = () => {
    if (totalClicks === clicks) {
      reviewsCount += 2;
      actions.setReviews(dispatch, props.productId, 1, reviewsCount, 'relevant');
      document.getElementById('more-reviews-button').hidden = true;
    } else {
      reviewsCount += 2;
      actions.setReviews(dispatch, props.productId, 1, reviewsCount, 'relevant');
      clicks++;
    }
  };

  return (
    <div className="review-bottom-right">
      <div className="review-list">
        <ReviewComponent productId={props.productId} />
      </div>
      <div className="review-buttons">
        <button className="more-reviews-button" id="more-reviews-button" onClick={moreReviews} > More Reviews</button>
        <button className="write-reviews-button">
          Write New Review
        </button>
        {/* {moreReviews()} */}
      </div>
    </div>
  );
};

export default ReviewList;
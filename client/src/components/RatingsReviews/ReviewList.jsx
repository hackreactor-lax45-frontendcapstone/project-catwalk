import React from 'react';
import ReviewComponent from './ReviewComponent.jsx';
import { useDispatch } from 'react-redux';
import actions from '../../state/actions/index.js';

const ReviewList = (props) => {
  let count = 4;
  // let reviewsCount = 2;
  const dispatch = useDispatch();
  const moreReviews = () => {
    actions.setReviews(dispatch, props.productId, 1, count, 'relevant');
    count += 2;
  };

  // const totalReviews = 5;
  // const totalClicks = Math.ceil(totalReviews / 2) - 1;
  // let clicks = 0;

  // const moreReviews = () => {
  //   if (totalClicks > clicks) {
  //     actions.setReviews(dispatch, props.productId, 1, reviewsCount, 'relevant');
  //     console.log('total clicccks', clicks);
  //     reviewsCount += 2;
  //     clicks++;
  //     return <button onClick={moreReviews} > More Reviews</button>;
  //   }
  // };

  return (
    <div className="review-bottom-right">
      <div className="review-list">
        <ReviewComponent productId={props.productId} />
      </div>
      <div className="review-buttons">
        <button className="more-reviews-button" onClick={moreReviews} > More Reviews</button>
        <button className="write-reviews-button">
          Write New Review
        </button>
        {/* {moreReviews()} */}
      </div>
    </div>
  );
};

export default ReviewList;
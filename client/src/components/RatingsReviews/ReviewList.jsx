/* eslint-disable indent */
import React, { useState } from 'react';
import ReviewComponent from './ReviewComponent.jsx';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../state/actions/index.js';

const ReviewList = (props) => {
  const state = useSelector(state => state.reviews.metadataInfo);
  const dispatch = useDispatch();
  const [reviewCount, setReviewCount] = useState(4);

  let totalReviews = 0;
  for (var key in state.ratings) {
    totalReviews += Number(state.ratings[key]);
  }

  let isRendered = (totalReviews <= 2);

  return (
    <div className="review-bottom-right">
      <div className="review-list">
        <ReviewComponent productId={props.productId} />
      </div>
      <div className="review-buttons">

        <button style={{display: (isRendered ? 'none' : 'inline')}} className="more-reviews-button" id="more-reviews-button" onClick={() => {
        if ((reviewCount - 2) <= totalReviews) {
            actions.setReviews(dispatch, props.productId, 1, reviewCount, 'relevant');
            setReviewCount(reviewCount + 2);
            if (reviewCount >= totalReviews) {
              const moreReviewsBtn = document.querySelector('#more-reviews-button');
              moreReviewsBtn.classList.add('disable');
            }
          }
        }} >More Reviews</button>
        <button className="write-reviews-button">
          Write New Review
        </button>

      </div>
    </div>
  );
};

export default ReviewList;
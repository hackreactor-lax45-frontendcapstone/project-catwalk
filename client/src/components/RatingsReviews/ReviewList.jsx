/* eslint-disable indent */
import React, { useState } from 'react';
import ReviewComponent from './ReviewComponent.jsx';
import AddAReview from './AddAReview.jsx';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../state/actions/index.js';

const ReviewList = () => {
  const state = useSelector(state => {
    return {
      metadata: state.reviews.metadataInfo,
      productId: state.product.productID,
      sortOption: state.sortOption
    };
  });
  const dispatch = useDispatch();
  const [reviewCount, setReviewCount] = useState(4);

  let totalReviews = 0;
  for (var key in state.metadata.ratings) {
    totalReviews += Number(state.metadata.ratings[key]);
  }

  let isRendered = (totalReviews <= 2);

  return (
    <div className="body-reviews-bottom">
      <div className="review-list">
        <ReviewComponent />
      </div>
      <div className="review-buttons">

        <button style={{display: (isRendered ? 'none' : 'inline')}} className="more-reviews-button" id="more-reviews-button" onClick={() => {
        if ((reviewCount - 2) <= totalReviews) {
            actions.setReviews(dispatch, state.productId, 1, reviewCount, state.sortOption);
            setReviewCount(reviewCount + 2);
            if (reviewCount >= totalReviews) {
              const moreReviewsBtn = document.querySelector('#more-reviews-button');
              moreReviewsBtn.classList.add('disable');
            }
          }
        }} >More Reviews</button>
          <AddAReview />

      </div>
    </div>
  );
};

export default ReviewList;
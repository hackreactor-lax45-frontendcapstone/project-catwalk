/* eslint-disable indent */
import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { FcCheckmark } from "react-icons/fc";

const ReviewComponent = () => {
  const reviews = useSelector((state) => {
    return {
      reviews: state.reviews.reviewInfo,
      metadata: state.reviews.metadataInfo
    };
  });

  const isRecommended = (boolean) => {
    if (boolean) {
      return (
        <div>USER RECOMMENDS!</div>
      );
    }
  };


  if (!reviews.reviews.results) {
    return (<div>Loading...</div>);
  }

  return (

    <div className="review-component">
      {reviews.reviews.results.map(review => {
        return (
          <div key={review.review_id}>
            <div className="review-component-top">
            <div className="body-overview-stars">STAR RATINGS</div>
              <div>{review.reviewer_name}</div>
              <div>VERIFIED USER</div>
              <div>{moment(review.date).format('MMMM DD, YYYY')}</div>
            </div>

            <div className="review-component-body">

              <div className="review-summary">{review.summary}</div>
              <div className="review-body">{review.body}</div>
              <div className="review-recommend">{isRecommended(review.recommend)}</div>

              <div className="review-component-helpful">
                <div className="helpful-col-1">Was this review helpful?</div>
                <div className="helpful-col-2">Yes ({review.helpfulness})</div>
                <div className="helpful-col-3">No (#)</div>
              </div>

              <div className="review-component-thumbnail">
              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
};

export default ReviewComponent;
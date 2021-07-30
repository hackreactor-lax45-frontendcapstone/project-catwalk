/* eslint-disable indent */
import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

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

  const getWidth = (ratingsData) => {
    let ratings = 0;
    let count = 0;
    for (var key in ratingsData) {
      count += Number(ratingsData[key]);
      ratings += (Number(key) * Number(ratingsData[key]));
    }
    let starPercentage = (ratings / count) / 5 * 100;
    if ((starPercentage % 5) < 2.5) {
      starPercentage -= (starPercentage % 5);
    } else {
      starPercentage += (5 - (starPercentage % 5));
    }
    return starPercentage;
  };


  if (!reviews.reviews.results) {
    return (<div>Loading...</div>);
  }

  return (

    <div className="review-component">
      {reviews.reviews.results.map(review => {
        return (
          <div key={review.review_id}>
            <div className="review-tile-top">

              <div id="review-tile-star">
                <div className="review-tile-star-outer">
                  <div className="review-tile-star-inner" style={{ width: `${getWidth(reviews.metadata.ratings)}%`}}></div>
                </div>
              </div>
              <div className="review-user-info">
                <div>{review.reviewer_name}</div>
                <div>VERIFIED USER</div>
                <div>{moment(review.date).format('MMMM DD, YYYY')}</div>
              </div>
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



            </div>
          </div>
        );
      })}

    </div>
  );
};

export default ReviewComponent;
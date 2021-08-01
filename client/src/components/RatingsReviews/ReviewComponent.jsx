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

  // const showAllBody = (body) => {
  //   return (<div>{body}</div>);
  // };

  const showOnly250ch = (body) => {
    if (body.length > 250) {
      return (
        <div className="review-body">
        {body.slice(0, 251)}...
        <div>Show More</div>
        </div>
      );
    }
    return (<div>{body}</div>);
  };

  const isRecommended = (boolean) => {
    if (boolean) {
      return (
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>

         </svg>
         I recommend this product
        </div>
      );
    }
  };

  const isVerifiedUser = () => {
    var randomBoolean = [true, false];
    var index = Math.floor(Math.random() * 2);
    console.log(index);
    if (randomBoolean[index]) {
      return (
        <div className="review-verified">Verified User</div>
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


  // if (!reviews.reviews.results) {
  //   return (<div>Loading...</div>);
  // }

  return (

    <div className="review-component">
      {reviews.reviews.results.map((review, index) => {
        return (
          // <div key={review.review_id}>
          <div key={index}>
            <div className="review-tile-top">

              <div id="review-tile-star">
                <div className="review-tile-star-outer">
                  <div className="review-tile-star-inner" style={{ width: `${getWidth(reviews.metadata.ratings)}%`}}></div>
                </div>
              </div>

              <div className="review-user-info">
                <div className="reviewer-name">{review.reviewer_name}</div>
                {isVerifiedUser()}
                <div className="review-date">{moment(review.date).format('MMMM DD, YYYY')}</div>
              </div>
            </div>

            <div className="review-component-body">
            <div className="review-summary">{review.summary}</div>
              {/* {showOnly250ch(review.body)} */}

              {showOnly250ch('mmmmmmmmmm mmmmmmmmmm mmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmm')}

              {/* <div></div> */}
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
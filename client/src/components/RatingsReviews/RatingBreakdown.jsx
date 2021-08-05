import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../state/actions';
import '../../../dist/styles/ratingsreviews/ratingBreakdown.css';

const ratingsBreakdown = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      filters: state.filters,
      metadata: state.reviews.metadataInfo,
    };
  });

  let totalRecommended = Math.round(Number(state.metadata.recommended.true) / (Number(state.metadata.recommended.true) + Number(state.metadata.recommended.false)) * 100);

  const getAverageRating = (metadataRatings) => {
    let ratings = 0;
    let count = 0;
    for (var key in metadataRatings) {
      count += Number(metadataRatings[key]);
      ratings += (Number(key) * Number(metadataRatings[key]));
    }
    let averageRating = Math.round((ratings / count * 10)) / 10;
    if (averageRating) {
      return averageRating;
    }
  };

  const getWidth = (metadataRatings) => {
    let ratings = 0;
    let count = 0;
    for (var key in metadataRatings) {
      count += Number(metadataRatings[key]);
      ratings += (Number(key) * Number(metadataRatings[key]));
    }
    let starPercentage = (ratings / count) / 5 * 100;
    if ((starPercentage % 5) < 2.5) {
      starPercentage -= (starPercentage % 5);
    } else {
      starPercentage += (5 - (starPercentage % 5));
    }
    return starPercentage;
  };

  // const filterMessage = () => {
  //   const filtersOn = [];
  //   for (var keys in state) {
  //     if (state[keys]) {
  //       filtersOn.push(Number(keys));
  //     }
  //   }
  //   console.log(filtersOn);
  // };

  return (
    <div className="rating-breakdown">
      RatingBreakdown
      <div>{getAverageRating(state.metadata.ratings)}</div>

      <span id="average-rating-star">
        <span className="average-rating-star-outer">
          <span className="average-rating-star-inner" style={{ width: `${getWidth(state.metadata.ratings)}%`}}></span>
        </span>
      </span>

      <div>{`${totalRecommended}% of reviews recommend this product`}</div>
      <div onClick={() => { (dispatch(actions.selectFilters(5))); }}>5 stars</div>
      <div onClick={() => { (dispatch(actions.selectFilters(4))); }}>4 stars</div>
      <div onClick={() => { (dispatch(actions.selectFilters(3))); }}>3 stars</div>
      <div onClick={() => { (dispatch(actions.selectFilters(2))); }}>2 stars</div>
      <div onClick={() => { (dispatch(actions.selectFilters(1))); }}>1 stars</div>

    </div>
  );
};

export default ratingsBreakdown;
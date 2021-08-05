import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../state/actions';

const ratingsBreakdown = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      filters: state.filters,
      metadata: state.reviews.metadataInfo
    };
  });


  const getAverageRating = () => {
    let ratings = 0;
    let count = 0;
    for (var key in state.metadata.ratings) {
      count += Number(state.metadata.ratings[key]);
      ratings += (Number(key) * Number(state.metadata.ratings[key]));
    }
    let averageRating = Math.round((ratings / count * 10)) / 10;
    return averageRating;
  };

  const filterMessage = () => {
    const filtersOn = [];
    for (var keys in state) {
      if (state[keys]) {
        filtersOn.push(Number(keys));
      }
    }
    console.log(filtersOn);
  };


  return (
    <div className="rating-breakdown">
      RatingBreakdown
      <div>{getAverageRating()}</div>

      <div onClick={() => { (dispatch(actions.selectFilters(5))); }}>5 stars</div>
      <div onClick={() => { (dispatch(actions.selectFilters(4))); }}>4 stars</div>
      <div onClick={() => { (dispatch(actions.selectFilters(3))); }}>3 stars</div>
      <div onClick={() => { (dispatch(actions.selectFilters(2))); }}>2 stars</div>
      <div onClick={() => { (dispatch(actions.selectFilters(1))); }}>1 stars</div>

    </div>
  );
};

export default ratingsBreakdown;
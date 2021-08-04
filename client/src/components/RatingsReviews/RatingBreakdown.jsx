import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../state/actions';

const ratingsBreakdown = () => {
  const dispatch = useDispatch();

  return (
    <div className="rating-breakdown">
      RatingBreakdown
      <div onClick={() => { (dispatch(actions.selectFilters(5))); }}>5 stars</div>
      <div onClick={() => { (dispatch(actions.selectFilters(4))); }}>4 stars</div>
      <div onClick={() => { (dispatch(actions.selectFilters(3))); }}>3 stars</div>
      <div onClick={() => { (dispatch(actions.selectFilters(2))); }}>2 stars</div>
      <div onClick={() => { (dispatch(actions.selectFilters(1))); }}>1 stars</div>

    </div>
  );
};

export default ratingsBreakdown;
import React from 'react';
import actions from '../../state/actions/index.js';
import { useDispatch, useSelector } from 'react-redux';

export default props => {

  const dispatch = useDispatch();
  const state = useSelector(state => {
    return {
      metadata: state.reviews.metadataInfo,
      productId: state.product.productID
    };
  });

  const onChange = (e) => {
    actions.setReviews(dispatch, state.productId, 1, 2, 'e.target.value');
  };

  return (
    <div>SortOptions
      <select id='review-sort-dropdown' onChange={onChange}>
        <option value='helpful'> Helpful </option>
        <option value='newest'> Newest </option>
        <option value='relevant'> Relevant </option>
      </select>
    </div>
  );
};
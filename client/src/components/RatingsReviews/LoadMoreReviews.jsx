import React, { useEffect } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../state/actions/index.js';

const LoadMoreReviews = () => {

  let dispatch = useDispatch();
  const product = useSelector(state => {
    return {
      productId: state.product.productID

    }
  }

  // actions.setReviews(dispatch, productID, page, 2, 'relevant');

  if (product.reviews.results)
  return (
    <div>
      <button onClick={() => console.log('clicked')}> More Reviews</button>
    </div>
  );
};

export default LoadMoreReviews;
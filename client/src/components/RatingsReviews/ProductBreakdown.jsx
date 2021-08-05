import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductBreakdown = () => {

  const state = useSelector(state => {
    return state.reviews.metadataInfo;
  });

  return (
    <div className="product-breakdown">ProductBreakdown</div>
  );
};

export default ProductBreakdown;
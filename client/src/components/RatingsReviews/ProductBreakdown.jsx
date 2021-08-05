import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductBreakdown = () => {

  const productInfo = useSelector(state => {
    return {
      metadata: state.reviews.metadataInfo
    };
  });

  const getProductBreakdown = (data) => {
    const charValues = [];
    for (let characteristic in data) {
      charValues.push(data[characteristic].value);
    }
    // console.log('valuess', charValues);

    // return charValues;
  };

  return (
    <div className="product-breakdown">ProductBreakdown
      {getProductBreakdown(productInfo.metadata.characteristics)}
    </div>
  );
};

export default ProductBreakdown;
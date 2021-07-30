import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductCard from './ProductCard.jsx';

export default () => {
  let product = useSelector(state => {
    return {
      productInfo: state.product.productInfo,
      styleInfo: state.product.styleInfo,
    };
  });

  return (
    <div>
      <div className='related-gallery'>
        <div className='related-products-card-container'>
          <ProductCard product={product}/>
          {/* <div className='related-products-card related-outfit-add'>
          </div> */}
        </div>
      </div>
    </div>
  );
};
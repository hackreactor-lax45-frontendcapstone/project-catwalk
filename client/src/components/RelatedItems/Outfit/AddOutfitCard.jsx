import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductCard from '../Product/ProductCard.jsx';
import actions from '../../../state/actions/index.js';

const ADD_ICON = '+';

export default ({ action }) => {

  const dispatch = useDispatch();
  let product = useSelector(state => {
    return {
      productInfo: state.product.productInfo,
      styleInfo: state.product.styleInfo,
    };
  });

  return (
    <div className='related-products-card-container'>
      <ProductCard product={product} action={action}/>
      <div
        className='related-products-card related-outfit-add'
        onClick={e => {
          dispatch(actions.selectOutfits.addOutfit(product));
          e.stopPropagation();
        }}>
        <span
          className='related-outfit-add-circle'>
          {ADD_ICON}
        </span>
      </div>
    </div>
  );
};
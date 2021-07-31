import React from 'react';
import { useDispatch } from 'react-redux';
import ProductSummary from './ProductSummary.jsx';
import ProductImage from './ProductImage.jsx';
import '../../../../dist/styles/relatedItems/ProductCard.css';
import actions from '../../../state/actions/index.js';

export default ({ product, isModal }) => {
  const dispatch = useDispatch();
  return (
    <div
      className='related-products-card'
      onClick={() => {
        actions.selectProduct(dispatch, product.productInfo.id);
        actions.setRelated(dispatch, product.productInfo.id);
      }}>
      <ProductImage product={product} isModal={isModal}/>
      <ProductSummary product={product}/>
    </div>
  );
};
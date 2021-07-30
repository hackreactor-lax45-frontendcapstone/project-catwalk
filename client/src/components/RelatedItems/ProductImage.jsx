import React from 'react';
import { useDispatch } from 'react-redux';
import '../../../dist/styles/relatedItems/ProductImage.css';
import actions from '../../state/actions/index.js';

export default ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="related-products-image-thumbnail"
      style={{
        backgroundImage: `url(${product.styleInfo.results[0].photos[0].thumbnail_url})`,
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}>
      <div
        className='related-products-image-modalopen'
        onClick={e => {
          dispatch(actions.modalView(product.productInfo));
          e.stopPropagation();
        }}>
      </div>
    </div>
  );
};
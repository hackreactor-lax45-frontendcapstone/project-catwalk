import React from 'react';
import { useDispatch } from 'react-redux';

import actions from '../../../state/actions/index.js';

export default ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div
      className='related-products-image-outfitremove'
      onClick={e => {
        // dispatch(actions.setViews.modalView(product.productInfo));
        e.stopPropagation();
      }}>
    </div>
  );
};
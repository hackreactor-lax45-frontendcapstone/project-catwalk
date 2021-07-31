import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../state/actions/index.js';
import ModalTable from './ModalTable.jsx';

import '../../../dist/styles/relatedItems/CompareModal.css';

export default () => {
  const state = useSelector(state => {
    return {
      related: state.related,
      product: state.product.productInfo,
      compare: state.related.compare,
    };
  });
  const dispatch = useDispatch();
  return (
    <div
      style={{display: (state.related.modal ? 'inline' : 'none')}}
      className='related-products-modal-overlay'>
      <div className='related-products-modal-background'>
        <span
          id='modal-close-button'
          onClick={e => {
            dispatch(actions.setViews.modalView());
            e.stopPropagation();
          }}>
          {'X'}
        </span>
      </div>
      <div id='related-products-table-container'>
        <ModalTable product={state.product} compare={state.compare}/>
      </div>
    </div>
  );
};

/*  */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../state/actions/index.js';
import ModalTable from './ModalTable.jsx';

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
    <div style={{display: 'flex', height: '350px', width: '100%'}}>
      <div
        style={{display: (state.related.modal ? 'inline' : 'none')}}
        className='related-products related-products-modal'>
        <span
          style={{cursor: 'pointer', float: 'right', padding: '5px 5px 0 0'}}
          onClick={e => {
            dispatch(actions.modalView());
            e.stopPropagation();
          }}>
          {'X'}
        </span>
      </div>
      <div
        style={{display: (state.related.modal ? 'inline' : 'none')}}
        id='related-products-modal-panel'>
        <ModalTable product={state.product} compare={state.compare}/>
      </div>
    </div>
  );
};
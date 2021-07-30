import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../state/actions/index.js';

export default () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div style={{display: 'flex', height: '350px', width: '100%'}}>
      <div
        style={{display: (state.related.modal ? 'inline' : 'none')}}
        className='related-products related-products-modal'
        onClick={e => {
          dispatch(actions.modalView());
          e.stopPropagation();
        }}>
      </div>
      <div
        style={{display: (state.related.modal ? 'inline' : 'none')}}
        id='related-products-modal-panel'>
      </div>
    </div>
  );
};
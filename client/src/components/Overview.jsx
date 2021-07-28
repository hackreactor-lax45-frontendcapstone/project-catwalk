import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductDescription from './Overview/ProductDescription.jsx';
import ProductShare from './Overview/ProductShare.jsx';

import TopView from './Overview/TopView.jsx';

export default () => {

  const state = useSelector(state => {
    return {
      style: state.product.styleInfo.results[state.style],
      thumbnail: state.thumbnail,
      defaultView: state.defaultView,
    };
  });

  return (
    <div id="body-overview">
      <TopView />
      <div id="body-overview-bottom">
        <div id="body-overview-bottom-left">
          <ProductDescription />
        </div>
        <div id="body-overview-bottom-right">
          <ProductShare />
        </div>
      </div>
    </div>
  );
};
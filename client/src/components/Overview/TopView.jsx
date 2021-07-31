import React from 'react';
import { useSelector } from 'react-redux';

import DefaultView from './ImageGallery-Default.jsx';
import ExpandedView from './ImageGallery-Expanded.jsx';

import ProductSummary from './ProductSummary.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ProductShare from './ProductShare.jsx';

export default () => {

  const state = useSelector(state => {
    return {
      style: state.product.styleInfo.results[state.style],
      thumbnail: state.thumbnail,
      view: state.view,
    };
  });

  if (!state.view.default) {
    return (
      <div id="body-overview-top">
        <ExpandedView state={state}/>
      </div>
    );
  }

  return (
    <div id="body-overview-top">
      <div id="body-overview-top-left">
        <DefaultView state={state}/>
      </div>
      <div id="body-overview-top-right">
        <ProductSummary />
        <StyleSelector />
        <AddToCart />
        <ProductShare />
      </div>
    </div>
  );
}
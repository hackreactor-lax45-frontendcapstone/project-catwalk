import React from 'react';

import ImageGallery from './Overview/ImageGallery.jsx';

import ProductSummary from './Overview/ProductSummary.jsx';
import StyleSelector from './Overview/StyleSelector.jsx';
import AddToCart from './Overview/AddToCart.jsx';

import ProductDescription from './Overview/ProductDescription.jsx';
import ProductShare from './Overview/ProductShare.jsx';

class Overview extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="body-overview">
        <div id="body-overview-top">
          <div id="body-overview-top-left">
            <ImageGallery />
          </div>
          <div id="body-overview-top-right">
            <ProductSummary />
            <StyleSelector />
            <AddToCart />
          </div>
        </div>
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
  }
}

export default Overview;
import React from 'react';

import AddToCart from './Overview/AddToCart.jsx';
import ImageGallery from './Overview/ImageGallery.jsx';
import ProductInfo from './Overview/ProductInfo.jsx';
import StyleSelector from './Overview/StyleSelector.jsx';

export default props => {
  return (
    <div>
      <AddToCart />
      <ImageGallery />
      <ProductInfo />
      <StyleSelector />
    </div>
  );
};
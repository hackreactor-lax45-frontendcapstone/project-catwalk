/* eslint-disable camelcase */
import React from 'react';
import AtelierApi from '../../lib/atelierAPI.js';
import { useSelector } from 'react-redux';

const ProductSummary = () => {

  const state = useSelector(state => {
    return {
      productInfo: state.product.productInfo,
      price: state.product.styleInfo.results[state.style]
    };
  });

  // to be removed at a later date when metadata available
  if (Math.random() > 0.5) {
    state.price.sale_price = (parseFloat(state.price.original_price) * 0.9).toFixed(2).toString();
  }

  const priceHelper = (price) => {
    if (price.sale_price === null) {
      return (
        <div id='body-overview-price-container'>
          <div id="body-overview-price">${price.original_price} USD</div>
        </div>
      );
    } else {
      return (
        <div id='body-overview-price-container'>
          <div id="body-overview-oldprice">${price.original_price}</div>
          <div id="body-overview-saleprice">${price.sale_price} USD</div>
        </div>
      );
    }
  };

  return (
    <div id="body-overview-productsummary">
      <div id="body-overview-star">
        <div className="stars-outer">
          <div className="stars-inner"></div>
        </div>
        <div id="body-overview-count">{`  Read all ${20} reviews`}</div>
      </div>

      <div id="body-overview-category">{state.productInfo.category}</div>
      <div id="body-overview-name">{state.productInfo.name}</div>
      {priceHelper(state.price)}
    </div>
  );

};

export default ProductSummary;
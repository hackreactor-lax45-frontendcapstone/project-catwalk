import React from 'react';
import axios from 'axios';
import AtelierApi from '../../lib/atelierAPI.js';
import { useSelector } from 'react-redux';

const ProductSummary = () => {

  const state = useSelector(state => {
    return {
      productInfo: state.product.productInfo,
      price: state.product.styleInfo.results[state.style]
    };
  });

  const priceHelper = (price) => {
    if (price.sale_price === null) {
      return (<div id="body-overview-price">${price.original_price} USD</div>);
    } else {
      return (
        <div>
          <div id="body-overview-oldprice">${price.original_price} USD</div>
          <div id="body-overview-saleprice">${price.sale_price} USD</div>
        </div>
      );
    }
  };

  return (
    <div id="body-overview-productsummary">
      <div id="body-overview-starrating">
        <div id="body-overview-star">
          <div className="stars-outer">
            <div className="stars-inner"></div>
          </div>
        </div>
        <div id="body-overview-count">Read all 20 reviews</div>
      </div>
      <div id="body-overview-category">{state.productInfo.category}</div>
      <div id="body-overview-name">{state.productInfo.name}</div>
      {priceHelper(state.price)}
      <hr></hr>
    </div>
  );

};

export default ProductSummary;
import React from 'react';
import axios from 'axios';
import AtelierApi from '../../lib/atelierAPI.js';
import { useSelector } from 'react-redux';

const ProductSummary = () => {
  const productInfo = useSelector((state) => state.product.productInfo);

  const styleInfo = useSelector(state => {
    if (state.product.styleInfo.results === undefined) {
      return undefined;
    }
    return {
      price: state.product.styleInfo.results[state.style],
    };
  });

  console.log(styleInfo);
  if (styleInfo && !styleInfo.price.sale_price) {
    return (
      <div id="body-overview-productsummary">
        <div id="body-overview-starrating">
          <div id="body-overview-star">
            <div className="stars-outer">
              <div className="stars-inner"></div>
            </div>
          </div>
          <div id="body-overview-count">Read all insert number reviews</div>
        </div>
        <div id="body-overview-category">{productInfo.category}</div>
        <div id="body-overview-name">{productInfo.name}</div>
        <div id="body-overview-price">${styleInfo.price.original_price} USD</div>
      </div>
    );
  } else if (styleInfo && !styleInfo.price.sale_price) {
    return (
      <div id="body-overview-productsummary">
        <div id="body-overview-starrating">
          <div id="body-overview-star">
            <div className="stars-outer">
              <div className="stars-inner"></div>
            </div>
          </div>
          <div id="body-overview-count">Read all insert number reviews</div>
        </div>
        <div id="body-overview-category">{productInfo.category}</div>
        <div id="body-overview-name">{productInfo.name}</div>
        <div id="body-overview-oldprice">${styleInfo.price.original_price} USD</div>
        <div id="body-overview-saleprice">${styleInfo.price.original_price - styleInfo.price.sale_price} USD</div>
      </div>
    );
  } else {
    return null;
  }

};

export default ProductSummary;
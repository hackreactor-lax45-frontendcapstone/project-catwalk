/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import '../../../dist/styles/relatedItems/ProductSummary.css';

const priceHelper = (price) => {
  if (price.sale_price === null) {
    return (<div id="related-products-price">${price.original_price} USD</div>);
  } else {
    return (
      <div>
        <div id="related-products-oldprice">${price.original_price} USD</div>
        <div id="related-products-saleprice">${price.sale_price} USD</div>
      </div>
    );
  }
};

export default ({ product }) => {
  var price = {
    original_price: product.styleInfo.results[0].original_price,
    sale_price: product.styleInfo.results[0].sale_price,
  };

  // to be removed at a later date when metadata available
  if (Math.random() > 0.8) {
    price.sale_price = (parseFloat(price.original_price) * 0.9).toFixed(2).toString();
  }

  let rating = (Math.random() * 0.5 + 0.5).toFixed(2) * 100;
  let reviews = Math.floor(Math.random() * 18 + 6);

  return (
    <div id='related-products-info'>
      <div>
        <div id="related-products-category">{product.productInfo.category}</div>
        <div id="related-products-name">{product.productInfo.name}</div>
        {priceHelper(price)}
      </div>
      <div id="related-products-star">
        <div className="related-products-star-outer">
          <div className="related-products-star-inner" style={{ width: `${rating}%` }}></div>
        </div>
      </div>
    </div>
  );
};
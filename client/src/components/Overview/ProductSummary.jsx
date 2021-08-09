/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';

const ProductSummary = () => {

  const state = useSelector(state => {
    return {
      productInfo: state.product.productInfo,
      price: state.product.styleInfo.results[state.style],
      metadata: state.reviews.metadataInfo
    };
  });


  const getWidth = (metadata) => {
    let ratings = 0;
    let sumRatings = 0;
    for (var key in metadata) {
      sumRatings += Number(metadata[key]);
      ratings += (Number(key) * Number(metadata[key]));
    }
    if (sumRatings === 0) {
      return 0;
    } else {
      let starPercentage = (ratings / sumRatings) / 5 * 100;
      if ((starPercentage % 5) < 2.5) {
        starPercentage -= (starPercentage % 5);
      } else {
        starPercentage += (5 - (starPercentage % 5));
      }
      return starPercentage;
    }
  };

  const getReviewsCount = (metadata) => {
    let ratings = 0;
    let sumRatings = 0;
    for (var key in metadata) {
      sumRatings += Number(metadata[key]);
      ratings += (Number(key) * Number(metadata[key]));
    }
    return sumRatings;
  };

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
          <div className="stars-inner" style={{ width: `${getWidth(state.metadata.ratings)}%`}}></div>
        </div>

        <div id="body-overview-count">{`  Read all ${getReviewsCount(state.metadata.ratings)} reviews`}</div>
      </div>

      <div id="body-overview-category">{state.productInfo.category}</div>
      <div id="body-overview-name">{state.productInfo.name}</div>
      {priceHelper(state.price)}
    </div>
  );

};

export default ProductSummary;
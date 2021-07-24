import React from 'react';
import '../../../dist/styles/overview/ProductInfo.css';
import { useSelector } from 'react-redux';

const ProductDescription = () => {

  const productInfo = useSelector((state) => state.product.productInfo);

  return (
    <div id="body-overview-main">
      <div id="body-overview-slogan">{productInfo.slogan}</div>
      <div id="body-overview-description">{productInfo.description}</div>
    </div>
  );
};

export default ProductDescription;

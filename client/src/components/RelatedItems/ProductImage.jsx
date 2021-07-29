import React from 'react';
import '../../../dist/styles/relatedItems/ProductImage.css';

export default ({ product }) => {
  return (
    <div
      className="related-products-image-thumbnail"
      style={{
        backgroundImage: `url(${product.styleInfo.results[0].photos[0].thumbnail_url})`,
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}>
      <div
        className='related-products-image-modalopen'
        onClick={e => e.stopPropagation()}>
      </div>
    </div>
  );
};
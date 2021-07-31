import React from 'react';
import '../../../../dist/styles/relatedItems/ProductImage.css';
import ModalElement from '../Compare/ModalElement.jsx';
import OutfitElement from '../Outfit/OutfitElement.jsx';

export default ({ product, isModal }) => {
  if (isModal) {
    var actionElement = <ModalElement product={product}/>;
  } else {
    var actionElement = <OutfitElement product={product}/>;
  }

  return (
    <div
      className="related-products-image-thumbnail"
      style={{
        backgroundImage: `url(${product.styleInfo.results[0].photos[0].thumbnail_url})`,
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}>
      {actionElement}
    </div>
  );
};
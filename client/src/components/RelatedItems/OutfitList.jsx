import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import ProductCard from './ProductCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx';

const IMAGE_WIDTH = 140;
const ARROW_LEFT = '<';
const ARROW_RIGHT = '>';

const scroll = (direction) => {
  let el = document.getElementById('related-outfits-gallery');
  let pos = el.scrollLeft + direction * IMAGE_WIDTH;
  el.scrollTo({
    top: 0,
    left: pos,
    behavior: 'smooth'
  });
};

const OutfitButton = ({ direction }) => {
  let arrow = direction < 0 ? ARROW_LEFT : ARROW_RIGHT;
  return (
    <button
      className='related-button'
      onClick={() => scroll(direction)}>
      {arrow}
    </button>
  );
};

const Outfits = outfits => {
  return _.map(outfits, (outfit, i) => <ProductCard
    key={i}
    product={outfit}
    isModal={false}/>
  );
};

const AddOutfitCheck = () => {
  let state = useSelector(state => {
    return {
      product: {
        productInfo: state.product.productInfo,
        styleInfo: state.product.styleInfo,
      },
      related: state.related,
    };
  });

  var productInOutfits = false;
  _.forEach(state.related.outfits, outfit => {
    if (outfit.productInfo.id === state.product.productInfo.id) {
      productInOutfits = true;
      return;
    }
  });

  if (productInOutfits) {
    return (
      <div className='related-outfits-gallery' id='related-outfits-gallery'>
        {Outfits(state.related.outfits)}
      </div>
    );
  }
  return (
    <div className='related-outfits-gallery' id='related-outfits-gallery'>
      <AddOutfitCard isModal={false}/>
      {Outfits(state.related.outfits)}
    </div>
  );
};

export default () => {
  return (
    <div className='related-gallery-container'>
      <OutfitButton direction={-1}/>
      <AddOutfitCheck />
      <OutfitButton direction={1}/>
    </div>
  );
};
import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import ProductCard from './Product/ProductCard.jsx';
import AddOutfitCard from './Outfit/AddOutfitCard.jsx';

const IMAGE_WIDTH = 140;
const ARROW_LEFT = '<';
const ARROW_RIGHT = '>';
const OUTFIT_ACTION = 'remove';

/* =============================================
             Helper Functions
============================================= */
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

/* =============================================
             Outfits
============================================= */
const Outfits = outfits => {
  return _.map(outfits, (outfit, i) =>
    <div key={i} className='related-products-card-container'>
      <ProductCard
        product={outfit}
        action={OUTFIT_ACTION}/>
    </div>
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
      <AddOutfitCard action={''}/>
      {Outfits(state.related.outfits)}
    </div>
  );
};

/* =============================================
             Component
============================================= */
export default () => {
  return (
    <div className='related-gallery-container'>
      <OutfitButton direction={-1}/>
      <AddOutfitCheck />
      <OutfitButton direction={1}/>
    </div>
  );
};
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

export default () => {
  let related = useSelector(state => state.related);
  return (
    <div className='related-gallery-container'>
      <OutfitButton direction={-1}/>
      <div className='related-outfits-gallery' id='related-outfits-gallery'>
        <AddOutfitCard isModal={false}/>
        {_.map(related.outfits, (outfit, i) => <ProductCard
          key={i}
          product={outfit}
          isModal={false}/>
        )}
      </div>
      <OutfitButton direction={1}/>
    </div>
  );
};
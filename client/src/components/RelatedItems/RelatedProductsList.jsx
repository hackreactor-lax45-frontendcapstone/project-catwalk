import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import '../../../dist/styles/relatedItems/RelatedProductsList.css';
import ProductCard from './ProductCard.jsx';
import CompareModal from './CompareModal.jsx';

const IMAGE_WIDTH = 140;
const ARROW_LEFT = '<';
const ARROW_RIGHT = '>';

const scroll = (direction) => {
  let el = document.getElementById('related-products-gallery');
  let pos = el.scrollLeft + direction * IMAGE_WIDTH;
  el.scrollTo({
    top: 0,
    left: pos,
    behavior: 'smooth'
  });
};

const RelatedProductButton = ({ direction }) => {
  let arrow = direction < 0 ? ARROW_LEFT : ARROW_RIGHT;
  return (
    <button
      className='related-button'
      onClick={() => scroll(direction)}>
      {arrow}
    </button>
  );
};

export default props => {
  const dispatch = useDispatch();
  const related = useSelector(state => state.related);
  return (
    <div className='related-gallery-container'>
      <RelatedProductButton direction={-1}/>
      <div className='related-products-gallery' id='related-products-gallery'>
        {_.map(related.ids, (id, i) => {
          return (
            <div
              key={i}
              id="related-products-card-container"
              className='related-container'>
              <ProductCard product={{
                productInfo: related.products[i],
                styleInfo: related.styles[i],
              }}/>
            </div>
          );
        })}
        <CompareModal />
      </div>
      <RelatedProductButton direction={1}/>
    </div>
  );
};
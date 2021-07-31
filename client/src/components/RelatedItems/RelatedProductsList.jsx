import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import '../../../dist/styles/relatedItems/RelatedProductsList.css';
import ProductCard from './Product/ProductCard.jsx';
import CompareModal from './Compare/CompareModal.jsx';

const IMAGE_WIDTH = 250;
const ARROW_LEFT = '<';
const ARROW_RIGHT = '>';
const COMPARE_ACTION = 'compare';

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
  const related = useSelector(state => state.related);
  return (
    <div className='related-gallery-container'>
      <CompareModal />
      <RelatedProductButton direction={-1}/>
      <div className='related-products-gallery' id='related-products-gallery'>
        {_.map(related.ids, (id, i) => {
          return (
            <div
              key={i}
              className='related-products-card-container'>
              <ProductCard
                product={{
                  productInfo: related.products[i],
                  styleInfo: related.styles[i],
                }}
                action={COMPARE_ACTION}/>
            </div>
          );
        })}
      </div>
      <RelatedProductButton direction={1}/>
    </div>
  );
};
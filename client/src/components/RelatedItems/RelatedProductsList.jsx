import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import '../../../dist/styles/relatedItems/RelatedProductsList.css';
import ProductCard from './ProductCard.jsx';

const IMAGE_WIDTH = 140;
const ARROW_LEFT = '<';
const ARROW_RIGHT = '>';

const scroll = (direction) => {
  let el = document.getElementById('related-products-container');
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
      className='related-products-button'
      onClick={() => scroll(direction)}>
      {arrow}
    </button>
  );
};

export default props => {
  const dispatch = useDispatch();
  const related = useSelector(state => state.related);
  return (
    <div id='related-products'>
      <RelatedProductButton direction={-1}/>
      <div id="related-products-container">
        {_.map(related.ids, (id, i) => <ProductCard key={i} product={{
          productInfo: related.products[i],
          styleInfo: related.styles[i],
        }}/>
        )}
      </div>
      <RelatedProductButton direction={1}/>
    </div>
  );
};
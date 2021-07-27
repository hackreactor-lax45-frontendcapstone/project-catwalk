import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../../dist/styles/relatedItems/Related-Products.css';

import AtelierAPI from '../../lib/atelierAPI.js';
import axios from 'axios';

import _ from 'lodash';

const IMAGE_WIDTH = 140;

const scroll = (direction) => {
  let el = document.getElementById('related-products-container');
  let pos = el.scrollLeft + direction * IMAGE_WIDTH;
  el.scrollTo({
    top: 0,
    left: pos,
    behavior: 'smooth'
  });
};

export default props => {

  const related = useSelector(state => state.related);

  if (!related.returned) {
    return (<div>Loading...</div>);
  }
  return (
    <div id='related-products'>
      <button
        className='related-products-button'
        onClick={() => {
          scroll(-1);
        }}>
        {'<'}
      </button>
      <div id="related-products-container">
        {_.map(related.styles, (style, i) => {
          return (
            <div key={i} className='related-products-card'>
              <div
                className="related-products-image-thumbnail"
                style={{
                  backgroundImage: `url(${style.results[0].photos[0].thumbnail_url})`,
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                }}>
              </div>
              <div className='related-products-info'>
                <div>Category</div>
                <div>Name</div>
                <div>Price</div>
                <div>Star Rating (# Reviews)</div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className='related-products-button'
        onClick={() => {
          scroll(1);
        }}>
        {'>'}
      </button>
    </div>
  );
};
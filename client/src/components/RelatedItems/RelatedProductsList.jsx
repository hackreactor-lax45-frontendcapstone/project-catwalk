import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../../dist/styles/relatedItems/Related-Products.css';

import ProductSummary from './ProductSummary.jsx';
import actions from '../../state/actions/index.js';

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

  const dispatch = useDispatch();
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
        {_.map(related.ids, (id, i) => {
          let product = {
            productInfo: related.products[i],
            styleInfo: related.styles[i],
          };
          return (
            <div
              key={i}
              className='related-products-card'
              onClick={() => {
                actions.selectProduct(dispatch, product.productInfo.id);
                actions.setRelated(dispatch, product.productInfo.id);
              }}>
              <div
                className="related-products-image-thumbnail"
                style={{
                  backgroundImage: `url(${product.styleInfo.results[0].photos[0].thumbnail_url})`,
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                }}>
              </div>
              <ProductSummary product={product}/>
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
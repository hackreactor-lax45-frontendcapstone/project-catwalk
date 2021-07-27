import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../../dist/styles/relatedItems/Related-Products.css';

import AtelierAPI from '../../lib/atelierAPI.js';
import axios from 'axios';

import _ from 'lodash';

const IMAGE_WIDTH = 140;

const scroll = (direction) => {
  let el = document.getElementById('related-image-container');
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
    <div id='wrapper'>
      <button
        className="prev"
        onClick={() => {
          scroll(-1);
        }}>
        {'<'}
      </button>
      <div className="related-image-container" id="related-image-container">
        {_.map(related.styles, (style, i) => {
          return (
            <div
              key={i}
              style={{
                backgroundImage: `url(${style.results[0].photos[0].thumbnail_url})`,
                backgroundRepeat: 'no-repeat',
                position: 'relative',
              }} className="related-image-thumbnail">
            </div>
          );
        })}
      </div>
      <button
        className="next"
        onClick={() => {
          scroll(1);
        }}>
        {'>'}
      </button>
    </div>
  );
};
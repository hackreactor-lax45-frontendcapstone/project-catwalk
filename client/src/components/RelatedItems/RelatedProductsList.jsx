import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../../dist/styles/relatedItems/Related-Products.css';

import AtelierAPI from '../../lib/atelierAPI.js';
import axios from 'axios';

import _ from 'lodash';

export default props => {

  const related = useSelector(state => state.related);

  if (!related.returned) {
    return (<div>Loading...</div>);
  }
  return _.map(related.styles, (style, i) => {

    return (
      <div id={`related-product-${i}`} key={i}>
        <div
          style={{
            backgroundImage: `url(${style.results[0].photos[0].thumbnail_url})`,
            backgroundRepeat: 'no-repeat',
            position: 'relative',
          }} className="related-thumbnail">
        </div>
      </div>
    );
  });
};
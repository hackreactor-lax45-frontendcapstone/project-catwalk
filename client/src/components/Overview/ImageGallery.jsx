import React from 'react';
import '../../../dist/styles/overview/ImageGallery.css';
import data from '../../data/product_styles.js';
import _ from 'lodash';

import { useSelector, useDispatch } from 'react-redux';

export default props => {

  var state = useSelector(state => state);
  console.log(state);

  return (
    <div id="body-overview-imagegallery-collapse">
      ImageGallery
    </div>
  );
};

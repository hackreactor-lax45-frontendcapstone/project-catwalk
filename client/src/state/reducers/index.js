import { combineReducers } from 'redux';

import style from './selectStyle';
import thumbnail from './selectThumbnail';
import size from './selectSize';
import quantity from './selectQuantity';
import cart from './addToCart';
import related from './related';

const allReducers = {
  style,
  thumbnail,
  size,
  quantity,
  cart,
  related,
};

export default combineReducers(allReducers);
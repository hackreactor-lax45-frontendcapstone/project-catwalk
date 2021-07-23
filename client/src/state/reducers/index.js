import { combineReducers } from 'redux';

import style from './selectStyle';
import thumbnail from './selectThumbnail';
import size from './selectSize';
import quantity from './selectQuantity';
import cart from './addToCart';

const allReducers = {
  style,
  thumbnail,
  size,
  quantity,
  cart,
};

export default combineReducers(allReducers);
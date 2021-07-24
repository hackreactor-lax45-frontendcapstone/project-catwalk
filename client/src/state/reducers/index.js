import { combineReducers } from 'redux';

import product from './selectProduct';
import style from './selectStyle';
import thumbnail from './selectThumbnail';
import size from './selectSize';
import quantity from './selectQuantity';
import cart from './addToCart';
import related from './setRelated';

const allReducers = {
  product,
  style,
  thumbnail,
  size,
  quantity,
  cart,
  related,
};

export default combineReducers(allReducers);
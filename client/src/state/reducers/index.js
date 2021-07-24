import { combineReducers } from 'redux';

import productID from './selectProduct';
import style from './selectStyle';
import thumbnail from './selectThumbnail';
import size from './selectSize';
import quantity from './selectQuantity';
import cart from './addToCart';
import related from './setRelated';
import productInfo from './setProductInfo';

const allReducers = {
  productID,
  style,
  thumbnail,
  size,
  quantity,
  cart,
  related,
  productInfo,
};

export default combineReducers(allReducers);
import { combineReducers } from 'redux';

import productID from './selectProduct';
import style from './selectStyle';
import thumbnail from './selectThumbnail';
import size from './selectSize';
import quantity from './selectQuantity';
import cart from './addToCart';
import related from './setRelated';
import productInfo from './setProductInfo';
import styleInfo from './setStyleInfo';

const allReducers = {
  productID,
  style,
  thumbnail,
  size,
  quantity,
  cart,
  related,
  productInfo,
  styleInfo,
};

export default combineReducers(allReducers);
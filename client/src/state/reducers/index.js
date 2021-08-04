import { combineReducers } from 'redux';

import product from './selectProduct';
import style from './selectStyle';
import thumbnail from './selectThumbnail';
import size from './selectSize';
import quantity from './selectQuantity';
import cart from './addToCart';
import related from './setRelated';
import view from './setViews';
import questions from './getQuestions';
import answers from './getAnswers';
import reviews from './setReviews';
import filters from './selectFilters.js';

const allReducers = {
  product, // object { productID: 16060, productInfo: { /products/:product_id }, styleInfo: { /products/:product_id/styles } }
  style, // number e.g., 0 corresponding to style index 0
  thumbnail, // number e.g., 0 corresponding to thumbnail index 0
  size, // string e.g., 'S', 'M', 'L'
  quantity, // number
  cart, // array of objects, each object representing a purchased product/style/size/qty
  related, // array of product_ids
  view, // object { default: (true = default view), zoomed: (false = expanded view) }
  questions, // boject
  answers,
  reviews, //reviewInfo: { /reviews/}, metadataInfo: {/reviews/meta}
  filters, // object with rating keys { 1: false}

};

export default combineReducers(allReducers);
/* eslint-disable camelcase */
import Redux from 'redux';

const initialState = {
  productID: undefined,
  productInfo: {
    id: undefined,
    slogan: '',
    description: '',
    category: '',
    default_price: '',
    created_at: '',
    updated_at: '',
    features: [
      {
        feature: '',
        value: ''
      },
    ]
  },
  styleInfo: {
    product_id: '',
    results: [
      {
        style_id: undefined,
        name: '',
        original_price: '',
        sale_price: null,
        default: true,
        photos: [
          {
            thumbnail_url: '',
            url: '',
          }
        ],
        skus: {
          '0': { quantity: 0, size: '' }
        }
      }
    ]
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'SELECT_PRODUCT':
    return action.payload;
  default:
    return state;
  }
};
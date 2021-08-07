/* eslint-disable camelcase */
import { url, Server } from '../../lib/Server';
const URL = url.reviews;

export default (dispatch, product_id, page, count, sort) => {
  let params = { product_id, page, count, sort };
  let reviewsQuery = Server.get(URL, { params });

  params = { product_id };
  let metadataQuery = Server.get(`${URL}/meta`, { params });

  Promise.all([
    reviewsQuery,
    metadataQuery
  ])
    .then(info => {
      let [reviews, metadata] = info;
      dispatch({
        type: 'SELECT_REVIEW',
        payload: {
          reviewInfo: reviews.data,
          metadataInfo: metadata.data
        }
      });
    })
    .catch(err => console.error(err));
};


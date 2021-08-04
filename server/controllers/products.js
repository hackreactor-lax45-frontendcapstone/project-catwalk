const axios = require('axios');

const API = require('../lib/AtelierAPI');
const URL = API.products;
const HEADERS = API.headers;

/*
    /api/products/
*/
module.exports = {
  list: (req, res) => {
    axios({
      url: `${URL}`,
      method: 'get',
      headers: HEADERS,
    })
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(response.status).json('Unable to retrieve products from \'/products/list\'');
      });
  },
  product: (req, res) => {
    axios({
      url: `${URL}/${req.params.product_id}`,
      method: 'get',
      headers: HEADERS,
    })
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(response.status).json('Unable to retrieve products from \'/products/:product_id\'');
      });
  },
  styles: (req, res) => {
    axios({
      url: `${URL}/${req.params.product_id}/styles`,
      method: 'get',
      headers: HEADERS
    })
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(response.status).json('Unable to retrieve products from \'/products/:product_id/styles\'');
      });
  },
  related: (req, res) => {
    axios({
      url: `${URL}/${req.params.product_id}/related`,
      method: 'get',
      headers: HEADERS
    })
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(response.status).json('Unable to retrieve products from \'/products/:product_id/related\'');
      });
  },
};
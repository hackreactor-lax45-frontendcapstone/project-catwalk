const axios = require('axios');

const API = require('../lib/AtelierAPI');
const URL = API.reviews;
const HEADERS = API.headers;

module.exports = {
  list: (req, res) => {
    axios({
      url: `${URL}`,
      params: req.query,
      method: 'get',
      headers: HEADERS,
    })
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(response.status).json('Unable to retrieve products from \'/reviews/list\'');
      });
  },
  meta: (req, res) => {
    res.status(200).json('r/meta');
  },
  create: (req, res) => {
    res.status(200).json('r/create');
  },
  helpful: (req, res) => {
    res.status(200).json('r/helpful');
  },
  report: (req, res) => {
    res.status(200).json('r/report');
  },
};
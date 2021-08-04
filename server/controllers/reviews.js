const axios = require('axios');

const API = require('../lib/AtelierAPI');
const URL = API.reviews;
const HEADERS = API.headers;

/*
    /api/reviews
*/
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
        res.status(404).json('Unable to retrieve products from \'/reviews/list\'');
      });
  },
  meta: (req, res) => {
    axios({
      url: `${URL}/meta`,
      params: req.query,
      method: 'get',
      headers: HEADERS,
    })
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(404).json('Unable to retrieve products from \'/reviews/meta\'');
      });
  },
  create: (req, res) => {
    axios({
      url: `${URL}`,
      method: 'post',
      data: req.body,
      headers: HEADERS,
    })
      .then(response => {
        console.log(response.status);
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(404).json('Unable to retrieve products from \'/reviews/meta\'');
      });
  },
  helpful: (req, res) => {
    res.status(200).json('r/helpful');
  },
  report: (req, res) => {
    res.status(200).json('r/report');
  },
};
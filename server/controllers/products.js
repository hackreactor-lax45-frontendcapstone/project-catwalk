const express = require('express');
const axios = require('axios');

const API = require('../lib/AtelierAPI');
const URL = API.products;
const HEADERS = API.headers;

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
        res.status(response.status).json('Unable to retrieve products from \'/products\'');
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
        res.status(response.status).json('Unable to retrieve products from \'/products\'');
      });
  },
  styles: (req, res) => {
    res.status(200).json('p/styles');
  },
  related: (req, res) => {
    res.status(200).json('p/related');
  },
};
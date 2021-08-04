const express = require('express');
const router = express.Router();

module.exports = {
  list: (req, res) => {
    res.status(200).json('p/list');
  },
  product: (req, res) => {
    res.status(200).json('p/product');
  },
  styles: (req, res) => {
    res.status(200).json('p/styles');
  },
  related: (req, res) => {
    res.status(200).json('p/related');
  },
};
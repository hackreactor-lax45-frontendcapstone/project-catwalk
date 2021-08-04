const express = require('express');
const router = express.Router();

const products = require('../controllers/products');

router
  .get('/', products.list)
  .get('/product', products.product)
  .get('/styles', products.styles)
  .get('/related', products.related);

module.exports = router;
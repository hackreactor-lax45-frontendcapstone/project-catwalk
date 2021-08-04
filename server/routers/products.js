const express = require('express');
const router = express.Router();

const products = require('../controllers/products');

/*
    /api/products
*/
router
  .get('/list', products.list)
  .get('/product/:product_id', products.product)
  .get('/styles/:product_id', products.styles)
  .get('/related/:product_id', products.related);

module.exports = router;
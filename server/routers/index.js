const express = require('express');
const router = express.Router();

const products = require('./products');
const reviews = require('./reviews');
const questions = require('./questions');
const cart = require('./cart');
const interactions = require('./interactions');

router
  .use('/products', products)
  .use('/reviews', reviews)
  .use('/questions', questions)
  .use('/cart', cart)
  .use('/interactions', interactions);

module.exports = router;
const express = require('express');
const router = express.Router();

const products = require('./products');
const reviews = require('./reviews');
const questions = require('./questions');
const answers = require('./answers');
const cart = require('./cart');
const interactions = require('./interactions');

/* ======================
    /api
====================== */
router
  .use('/products', products)
  .use('/reviews', reviews)
  .use('/qa/questions', questions)
  .use('/qa/answers', answers)
  .use('/cart', cart)
  .use('/interactions', interactions);

module.exports = router;
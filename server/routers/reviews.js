const express = require('express');
const router = express.Router();

const reviews = require('../controllers/reviews');

router
  .get('/', reviews.list)
  .get('/meta', reviews.meta);

router
  .post('/reviews', reviews.create);

router
  .put('/helpful', reviews.helpful)
  .put('/report', reviews.report);

export default router;
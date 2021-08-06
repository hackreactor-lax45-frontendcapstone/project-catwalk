const express = require('express');
const router = express.Router();

const reviews = require('../controllers/reviews');

/*
    /api/reviews
*/
router
  .get('/list', reviews.list)
  .get('/meta', reviews.meta);

router
  .post('/create', reviews.create);

router
  .put('/:review_id/helpful', reviews.helpful)
  .put('/:review_id/report', reviews.report);

module.exports = router;
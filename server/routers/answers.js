const express = require('express');
const router = express.Router();

const answers = require('../controllers/answers');

/*
    /api/qa/asnwers
*/
router
  .put('/:answer_id/helpful', answers.helpful)
  .put('/:answer_id/report', answers.report);

module.exports = router;
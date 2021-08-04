const express = require('express');
const router = express.Router();

const interactions = require('../controllers/interactions');

/*
    /api/interactions
*/
router
  .post('/', interactions.add);

module.exports = router;

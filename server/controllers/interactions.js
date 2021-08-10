const express = require('express');
const router = express.Router();

module.exports = {
  add: (req, res) => {
    res.status(200).json('i/add');
  },
};
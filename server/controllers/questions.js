const express = require('express');
const router = express.Router();

module.exports = {
  list: (req, res) => {
    res.status(200).json('q/list');
  },
  answers: (req, res) => {
    res.status(200).json('q/answers');
  },
  question: {
    ask: (req, res) => {
      res.status(200).json('q/ask');
    },
    answer: (req, res) => {
      res.status(200).json('q/answer');
    },
    helpful: (req, res) => {
      res.status(200).json('q/helpful');
    },
    report: (req, res) => {
      res.status(200).json('q/report');
    },
  },
  answer: {
    helpful: (req, res) => {
      res.status(200).json('a/helpful');
    },
    report: (req, res) => {
      res.status(200).json('a/report');
    },
  }
};
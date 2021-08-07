const axios = require('axios');

const SERVER = 'localhost';
const PORT = 3000;
const BASE_URL = `http://${SERVER}:${PORT}/api`;

const url = {
  products: 'products',
  review: 'reviews',
  questions: 'qa/questions',
  answers: 'qa/answers',
  cart: 'cart',
  interactions: 'interactions',
}

const Server = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    common: {
      'access-control-allow-origin': '*',
      'access-control-allow-headers': '*',
      'accept': 'application/json',
      'access-control-allow-methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Content-Type': 'application/json',
    }
  }
})

module.exports = { url, Server };

const SERVER = 'localhost';
const PORT = 3000;
const BASE_URL = `http://${SERVER}:${PORT}/api`;

const url = {
  products: 'products',
  review: 'reviews',
  questions: 'qa/questions',
  cart: 'cart',
  interactions: 'interactions',
}

let config = {
  baseURL: BASE_URL,
  headers: {
    'access-control-allow-origin': '*',
    'content-type': 'application/json',
  },
}

module.exports = { url, config };

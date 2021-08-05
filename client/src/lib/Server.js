const SERVER = 'localhost';
const PORT = 8000;
const BASE_URL = `http://${SERVER}:${PORT}/api`;

const url = {
  products: '/products',
  review: '/reviews',
  questions: '/qa/questions',
  cart: '/cart',
  interactions: '/interactions',
}

let config = {
  baseUrl: BASE_URL,
  headers: {
    'access-control-allow-origin': '*',
    'content-type': 'application/json',
  },
}

export default { url, config };
const SERVER = 'localhost';
const PORT = 3000;
const BASE_URL = `${SERVER}:${PORT}/api`;

export default {
  products: `${BASE_URL}/products`,
  review: `${BASE_URL}/reviews`,
  questions: `${BASE_URL}/qa/questions`,
  cart: `${BASE_URL}/cart`,
  interactions: `${BASE_URL}/interactions`,
}
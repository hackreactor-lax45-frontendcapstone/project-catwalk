const { url, Atelier } = require('../lib/AtelierAPI');
let URL = url.products;

/* ======================
    /api/products
====================== */
module.exports = {
  list: (req, res) => {
    Atelier.get(URL)
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(404).json('Unable to retrieve products from \'/products/list\'');
      });
  },
  product: (req, res) => {
    Atelier.get(`${URL}/${req.params.product_id}`)
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(404).json('Unable to retrieve products from \'/products/:product_id\'');
      });
  },
  styles: (req, res) => {
    Atelier.get(`${URL}/${req.params.product_id}/styles`)
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(404).json('Unable to retrieve products from \'/products/:product_id/styles\'');
      });
  },
  related: (req, res) => {
    Atelier.get(`${URL}/${req.params.product_id}/related`)
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(404).json('Unable to retrieve products from \'/products/:product_id/related\'');
      });
  },
};
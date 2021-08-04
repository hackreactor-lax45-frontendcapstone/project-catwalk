/* eslint-disable camelcase */
const { app } = require('../server/index');
const request = require('supertest');
const mockData = require('../data/index');

const PRODUCT = 16060;

describe('Products endpoint', () => {

  const productData = mockData.products;

  it('GET /api/products/list', done => {
    request(app)
      .get('/api/products/list')
      .expect(200)
      .then(response => {
        let data = response.body;
        expect(data.length).not.toEqual(0);
        expect(data[0].id).toEqual(productData.list[0].id);
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('GET /api/products/:product_id', done => {
    request(app)
      .get(`/api/products/${PRODUCT}`)
      .expect(200)
      .then(response => {
        let data = response.body;
        expect(data.id).toEqual(productData.info.id);
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('GET /api/products/:product_id/styles', done => {
    request(app)
      .get(`/api/products/${PRODUCT}/styles`)
      .expect(200)
      .then(response => {
        let data = response.body;
        expect(data.results.length).not.toEqual(0);
        expect(data.results[0].style_id).toEqual(productData.styles.results[0].style_id);
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('GET /api/products/:product_id/related', done => {
    request(app)
      .get(`/api/products/${PRODUCT}/related`)
      .expect(200)
      .then(response => {
        let data = response.body;
        expect(data.length).not.toEqual(0);
        expect(data[0]).toEqual(productData.related[0]);
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

});

describe('Reviews endpoint', () => {

  const reviewsData = mockData.reviews;

  it('GET /api/reviews/list', done => {
    request(app)
      .get('/api/reviews/list')
      .query({ product_id: PRODUCT })
      .expect(200)
      .then(response => {
        let data = response.body;
        expect(data.product.toString()).toEqual(reviewsData.list.product);
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('GET /api/reviews/meta', done => {
    request(app)
      .get('/api/reviews/meta')
      .query({ product_id: PRODUCT })
      .expect(200)
      .then(response => {
        let data = response.body;
        expect(data.product_id.toString()).toEqual(reviewsData.meta.product_id);
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('POST /api/reviews/meta', done => {
    request(app)
      .post('/api/reviews/review')
      .send({
        'product_id': 16060,
        'rating': 4,
        'summary': 'This is good',
        'body': '',
        'recommend': true,
        'name': 'Anonymous',
        'email': 'anonymous@gmail.com',
        'photos': ['image.png'],
        'characteristics': { '53854': 5 }
      })
      .expect(201)
      .then(response => {
        let data = response.body;
        expect(data).toEqual('Created');
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

});
/* eslint-disable camelcase */
const request = require('supertest');
const { app, server } = require('../server/index');
const mockData = require('../data/index');

server.close();
const PRODUCT = 16060;

describe('Products endpoint', () => {

  const productData = mockData.products;

  it('GET /api/products/list', done => {
    request(app)
      .get('/api/products')
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

  it('GET /api/reviews', done => {
    request(app)
      .get('/api/reviews')
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

  it('POST /api/reviews', done => {
    request(app)
      .post('/api/reviews')
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

  it('PUT /api/reviews/:review_id/helpful', done => {
    request(app)
      .put(`/api/reviews/${289100}/helpful`)
      .expect(204)
      .then(response => {
        let data = response.body;
        expect(data).toEqual({});
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('PUT /api/reviews/:review_id/report', done => {
    request(app)
      .put(`/api/reviews/${289100}/report`)
      .expect(204)
      .then(response => {
        let data = response.body;
        expect(data).toEqual({});
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

});

describe('Questions endpoint', () => {

  const questionsData = mockData.questions;

  it('GET /api/qa/questions', done => {
    request(app)
      .get('/api/qa/questions')
      .query({ product_id: PRODUCT })
      .expect(200)
      .then(response => {
        let data = response.body;
        expect(data.product_id.toString()).toEqual(questionsData.list.product_id);
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('GET /api/qa/questions/:question_id/answers', done => {
    request(app)
      .get(`/api/qa/questions/${183362}/answers`)
      .expect(200)
      .then(response => {
        let data = response.body;
        expect(data.question.toString()).toEqual(questionsData.answers.question);
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('POST /api/qa/questions', done => {
    request(app)
      .post('/api/qa/questions')
      .send({
        'body': 'A new question',
        'name': 'Anonymous',
        'email': 'anonymous@gmail.com',
        'product_id': 16060,
      })
      .expect(201)
      .then(response => {
        let data = response.body;
        expect(data).toEqual('Created');
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('POST /api/qa/questions/:question_id/answers', done => {
    request(app)
      .post(`/api/qa/questions/${183362}/answers`)
      .send({
        'body': 'A new question',
        'name': 'Anonymous',
        'email': 'anonymous@gmail.com',
        'photos': ['image.png'],
      })
      .expect(201)
      .then(response => {
        let data = response.body;
        expect(data).toEqual('Created');
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('PUT /api/qa/questions/:question_id/helpful', done => {
    request(app)
      .put(`/api/qa/questions/${183362}/helpful`)
      .expect(204)
      .then(response => {
        let data = response.body;
        expect(data).toEqual({});
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('PUT /api/qa/questions/:question_id/report', done => {
    request(app)
      .put(`/api/qa/questions/${183362}/report`)
      .expect(204)
      .then(response => {
        let data = response.body;
        expect(data).toEqual({});
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('PUT /api/qa/questions/:answer_id/helpful', done => {
    request(app)
      .put(`/api/qa/questions/${1992081}/helpful`)
      .expect(204)
      .then(response => {
        let data = response.body;
        expect(data).toEqual({});
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('PUT /api/qa/questions/:answer_id/report', done => {
    request(app)
      .put(`/api/qa/questions/${1992081}/report`)
      .expect(204)
      .then(response => {
        let data = response.body;
        expect(data).toEqual({});
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

});

describe('Cart endpoint', () => {

  const cartData = mockData.cart;

  it('POST /api/cart', done => {
    request(app)
      .post('/api/cart')
      .send(cartData[0])
      .expect(201)
      .then(response => {
        expect(response.body).toEqual('Created');
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('GET /api/cart', done => {
    request(app)
      .get('/api/cart')
      .expect(200)
      .then(response => {
        let data = response.body;
        expect(data[0].sku_id).toEqual(cartData[0].sku_id);
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

});
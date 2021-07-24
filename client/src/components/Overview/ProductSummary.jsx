import React from 'react';
import axios from 'axios';
import AtelierApi from '../../lib/atelierAPI.js';

export default class ProductSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      reviewMetadata: {},
      starPercentage: '',
      count: ''
    };
  }

  componentDidMount() {
    const productId = 16060;
    this.renderProductInfo(productId);
    this.renderReviewInfo(productId);
  }

  renderProductInfo(productId) {
    axios.get(`${AtelierApi.url}/products/${productId}`, {
      headers: AtelierApi.headers
    })
      .then(response => {
        this.setState({
          product: response.data
        });
      })
      .catch(err => console.log(err));
  }

  renderReviewInfo(productId) {
    axios.get(`${AtelierApi.url}/reviews/meta`, {
      // eslint-disable-next-line camelcase
      params: { product_id: productId },
      headers: AtelierApi.headers
    })
      .then(response => {
        this.setState({
          reviewMetadata: response.data
        });
      })
      .then(() => {
        let ratings = 0;
        let count = 0;
        const eachRating = this.state.reviewMetadata.ratings;
        for (var key in eachRating) {
          count += Number(eachRating[key]);
          ratings += (Number(key) * Number(eachRating[key]));
        }
        let starPercentage = (ratings / count) / 5 * 100;
        // console.log(starPercentage);
        if ((starPercentage % 5) < 2.5) {
          starPercentage -= (starPercentage % 5);
        } else {
          starPercentage += (5 - (starPercentage % 5));
        }

        this.setState({
          count: count,
          starPercentage: starPercentage
        }, () => {
          // console.log(this.state.starPercentage);
          document.querySelector('#body-overview-star .stars-inner').style.width = `${this.state.starPercentage}%`;
        });

      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="body-overview-productsummary">
        <div id="body-overview-starrating">
          <div id="body-overview-star">
            <div className="stars-outer">
              <div className="stars-inner"></div>
            </div>
          </div>
          <div id="body-overview-count">Read all {this.state.count} reviews</div>
        </div>
        <div id="body-overview-category">{this.state.product.category}</div>
        <div id="body-overview-name">{this.state.product.name}</div>
        <div id="body-overview-price">${this.state.product.default_price} USD</div>
      </div>
    );
  }

}

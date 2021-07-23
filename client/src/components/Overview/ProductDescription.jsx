import React from 'react';
import axios from 'axios';
import AtelierApi from '../../lib/atelierAPI.js';
import '../../../dist/styles/overview/ProductInfo.css';

export default class ProductDescription extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    const productId = 16056;
    this.renderProductInfo(productId);
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
  render() {

    return (
      <div id="body-overview-main">
        <div id="body-overview-slogan">{this.state.product.slogan}</div>
        <div id="body-overview-description">{this.state.product.description}</div>
      </div>
    );
  }
}

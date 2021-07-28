import React from 'react';
import axios from 'axios';
import AtelierApi from '../../lib/atelierAPI.js';
import { useSelector } from 'react-redux';

const ProductSummary = () => {

  const state = useSelector(state => {
    if (state.product.styleInfo.results === undefined) {
      return undefined;
    }
    return {
      productInfo: state.product.productInfo,
      price: state.product.styleInfo.results[state.style]
    };
  });

  const priceHelper = (price) => {
    if (price.sale_price === null) {
      return (<div id="body-overview-price">${price.original_price}</div>);
    } else {
      return (
        <div>
          <div id="body-overview-oldprice">${price.original_price}</div>
          <div id="body-overview-saleprice">${price.sale_price}</div>
        </div>
      );
    }
  };

  if (state) {
    return (
      <div id="body-overview-productsummary">
        <div id="body-overview-starrating">
          <div id="body-overview-star">
            <div className="stars-outer">
              <div className="stars-inner"></div>
            </div>
          </div>
          <div id="body-overview-count">Read all 20 reviews</div>
        </div>
        <div id="body-overview-category">{state.productInfo.category}</div>
        <div id="body-overview-name">{state.productInfo.name}</div>
        {priceHelper(state.price)}
        <hr></hr>
      </div>
    );

  } else if (!state) {
    return (<div>Loading...</div>);
  }

};

export default ProductSummary;


// Star ratings
// renderReviewInfo(productId) {
//       axios.get(`${AtelierApi.url}/reviews/meta`, {
//         // eslint-disable-next-line camelcase
//         params: { product_id: productId },
//         headers: AtelierApi.headers
//       })
//         .then(response => {
//           this.setState({
//             reviewMetadata: response.data
//           });
//         })
//         .then(() => {
//           let ratings = 0;
//           let count = 0;
//           const eachRating = this.state.reviewMetadata.ratings;
//           for (var key in eachRating) {
//             count += Number(eachRating[key]);
//             ratings += (Number(key) * Number(eachRating[key]));
//           }
//           let starPercentage = (ratings / count) / 5 * 100;
//           // console.log(starPercentage);
//           if ((starPercentage % 5) < 2.5) {
//             starPercentage -= (starPercentage % 5);
//           } else {
//             starPercentage += (5 - (starPercentage % 5));
//           }

//           this.setState({
//             count: count,
//             starPercentage: starPercentage
//           }, () => {
//             // console.log(this.state.starPercentage);
//             document.querySelector('#body-overview-star .stars-inner').style.width = `${this.state.starPercentage}%`;
//           });

//         })
//         .catch(err => console.log(err));
//     }

//     render() {
//       return (
//         <div id="body-overview-productsummary">
//           <div id="body-overview-starrating">
//             <div id="body-overview-star">
//               <div className="stars-outer">
//                 <div className="stars-inner"></div>
//               </div>
//             </div>
//             <div id="body-overview-count">Read all {this.state.count} reviews</div>
//           </div>
//           <div id="body-overview-category">{this.state.product.category}</div>
//           <div id="body-overview-name">{this.state.product.name}</div>
//           <div id="body-overview-price">${this.state.product.default_price} USD</div>
//         </div>
//       );
//     }

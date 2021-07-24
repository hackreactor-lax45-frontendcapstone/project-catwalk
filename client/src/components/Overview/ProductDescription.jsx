/* eslint-disable func-style */
import React from 'react';
import '../../../dist/styles/overview/ProductInfo.css';
import { useSelector } from 'react-redux';

const ProductDescription = () => {

  const productInfo = useSelector((state) => state.product.productInfo);

  return (
    <div id="body-overview-main">
      <div id="body-overview-slogan">{productInfo.slogan}</div>
      <div id="body-overview-description">{productInfo.description}</div>
    </div>
  );

};

export default ProductDescription;


// export default class ProductDescription extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       product: {}
//     };
//   }

//   componentDidMount() {
//     const productId = 16060;
//     this.renderProductInfo(productId);
//   }

//   renderProductInfo(productId) {
//     axios.get(`${AtelierApi.url}/products/${productId}`, {
//       headers: AtelierApi.headers
//     })
//       .then(response => {
//         this.setState({
//           product: response.data
//         });
//       })
//       .catch(err => console.log(err));
//   }
//   render() {

//     return(
//       <div id="body-overview-main">
//         <div id="body-overview-slogan">{this.state.product.slogan}</div>
//         <div id="body-overview-description">{this.state.product.description}</div>
//       </div>
//     );
//   }
// }



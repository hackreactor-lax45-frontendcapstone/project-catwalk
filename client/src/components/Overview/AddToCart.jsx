import React from 'react';
import SizeRenderEntry from './SizeRenderEntry.jsx';
import sampleData from './sampleData.js';


class AddToCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: sampleData
    }
  }

  render() {
    return (
      <div id="body-overview-addtocart">
      AddToCart
      <div>
        <select>
        <SizeRenderEntry list={this.state.data} />
        </select>
      </div>


      <div>
        <select>
        <option> Quantity Selector </option>
        </select>
      </div>


      <button>Add to Cart </button>
    </div>



    )
  }


}



export default AddToCart;



// <select>
//           <option value="small">S</option>
//           <option value="medium">M</option>
//           <option value="large">L</option>
//           <option value="xlarge">XL</option>
//         </select>
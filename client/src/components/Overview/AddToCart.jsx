import React from 'react';
import SizeRenderEntry from './SizeRenderEntry.jsx';
import QtyRenderEntry from './qtyRenderEntry.jsx';
import sampleData from './sampleData.js';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStyleData: sampleData,
      currentSkus: {},
      currentSelectSize: '',
      currentSelectQty: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) =>
    this.setState({currentSelectQty: event.target.value})

  render() {
    return (
      <div id="body-overview-addtocart">
      AddToCart
      <div>
        <SizeRenderEntry list={this.state.selectedStyleData} handleChange={this.handleChange} />
      </div>

      <div>
        <QtyRenderEntry qty={this.state.currentSelectQty}/>
      </div>

      <button>Add to Cart </button>

    </div>
    )
  }
}

export default AddToCart;


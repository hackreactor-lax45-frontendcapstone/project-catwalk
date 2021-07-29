import React from 'react';
import SizeRenderEntry from './sizeRenderEntry.jsx';
import sampleData from './sampleData.js';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
    this.state = {
      data: sampleData,
      currentSkus: {}
    };
=======
import { useSelector, useDispatch } from 'react-redux';
import SetSelectSize from '../../state/actions/selectSize.js'
import SetSelectQty from '../../state/actions/selectQuantity.js'
import setToCart from '../../state/actions/addToCart.js'

const AddToCart = () => {

  const dispatch = useDispatch();

  const state = useSelector(state => {
    return {
      style: state.product.styleInfo.results,
      selected: state.product.styleInfo.results[state.style],
      currentProduct: state.product,
      currentSize: state.size,
      currentQty: state.quantity,
    }
  })

  //local state to keep track of selected quantity, stock status, size selection status
  var [qty, updateQty] = useState(0)
  var [isOutofStock, updateStockStatus] = useState('false')
  var [isSizeSelected, updateIsSizeSelected] = useState('false')

  //this handler function should update global state of [size, qty, skus#]
  const handleChange = (event) => {
    if (event.target.value === 'outofstock') {
      updateIsSizeSelected('false')
      return null;

    } else {
      updateStockStatus('false')
      updateIsSizeSelected('true')
      var selectedStyle = JSON.parse(event.target.value)
      dispatch(SetSelectSize(selectedStyle.size))
      dispatch(SetSelectQty(selectedStyle.quantity))
    }
  }

  const handleSelectQty = (event) => {
    updateQty(event.target.value)
  }

  //this function is not completed
  const buttonHandlerNoSelected = () => {
    //If the default ‘Select Size’ is currently selected: Clicking this button should open the size dropdown,
    //and a message should appear above the dropdown stating “Please select size”.
  }

  const buttonHandler = () => {
    dispatch(setToCart(currentProduct['productID'], selected['style_id'],currentSize, qty))
  }

  const renderCartButton = function() {
    //if there's no stock, hide button
    if (isOutofStock === 'true') {
      updateIsSizeSelected('true')
      return <div></div>
    } else if (isSizeSelected === 'false') {
      return <button className='addtocart-button' onClick={buttonHandlerNoSelected} >Add to Cart</button>
    } else {
      return <button className='addtocart-button' onClick={buttonHandler} >Add to Cart</button>
    }
>>>>>>> 50987daf4837b48f9a2e178339dc55754a2d0c41
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
    );
  }
}

export default AddToCart;

// <select>
//           <option value="small">S</option>
//           <option value="medium">M</option>
//           <option value="large">L</option>
//           <option value="xlarge">XL</option>
//         </select>
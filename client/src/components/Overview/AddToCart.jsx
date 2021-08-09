/* eslint-disable semi */
import React, {useState, useEffect} from 'react';
import SizeRenderEntry from './sizeRenderEntry.jsx';
import QtyRenderEntry from './qtyRenderEntry.jsx';
import '../../../dist/styles/overview/AddToCart.css';
import { useSelector, useDispatch } from 'react-redux';
import SetSelectSize from '../../state/actions/selectSize.js'
import SetSelectQty from '../../state/actions/selectQuantity.js'
import setToCart from '../../state/actions/addToCart.js'

import { url, Server } from '../../lib/Server.js';
const URL = url.cart;

const AddToCart = () => {

  const dispatch = useDispatch();

  const state = useSelector(state => {
    return {
      style: state.product.styleInfo.results,
      selected: state.product.styleInfo.results[state.style],
      currentProduct: state.product,
      currentSize: state.size,
      currentQty: state.size.qty,
      isSizeSelected: state.size.isSizeSelected,
      selectedQty: state.quantity,
      styleThumbnail: state.style
    }
  })
  const [isOutofStock, setIsOutofStock] = useState(false);
  const [currentSkus, setcurrentSkus] = useState('');

  //this handler function should update global state of [size, qty, skus#]
  const handleChange = (event) => {
    if (event.target.value === 'outofstock') {
      setIsOutofStock(true)
      return null;
    } else {
      var selectedStyle = JSON.parse(event.target.value)
      setcurrentSkus(selectedStyle.key)
      dispatch(SetSelectSize(selectedStyle.size, selectedStyle.quantity))
      dispatch(SetSelectQty(1))
    }
  }

  const handleSelectQty = (event) => {
    dispatch(SetSelectQty(parseInt(event.target.value)))
  }

  if (!state) {
    return <div>Loading...</div>
  }

  let { style, selected, currentProduct, currentSize, currentQty, isSizeSelected, selectedQty, styleThumbnail } = state;

  //when different thumbnail selected, reset size and qty in global state
  const dropDownReset = () => {
    dispatch(SetSelectSize('', 0, false))
    dispatch(SetSelectQty(0))
  }
  useEffect(() => {
    dropDownReset();
  }, [styleThumbnail])

  ////////////***************** Add-TO-CART BUTTON *********************//////////
  const buttonHandlerNoSelected = () => {
  //If the default ‘Select Size’ is currently selected: Clicking this button should open the size dropdown,
  //and a message should appear above the dropdown stating “Please select size”.
    alert('Please select size')
  }

  //this is the function that size is selected and clicking the button
  const buttonHandler = () => {
    dispatch(setToCart(currentProduct['productID'], selected['style_id'], currentSize.size, selectedQty))
    Server.post(URL, { sku_id: currentSkus })
      .then(response => console.log(response.data));
  }

  const renderCartButton = function() {
  // if there's no stock, hide button
    if (isOutofStock === true) {
      return <div></div>
    } else if (isSizeSelected === false) {
      return <button className='addtocart-button' onClick={buttonHandlerNoSelected} >Add to Cart</button>
    } else {
      return <button className='addtocart-button' onClick={buttonHandler} >Add to Cart</button>
    }
  }

  return (
    <div id='body-overview-addtocart'>
      <div id='dropdowns'>
        <div>
          <SizeRenderEntry selected={selected} handleChange={handleChange} setIsOutofStock={setIsOutofStock}/>
        </div>
        <div>
          <QtyRenderEntry selectedQty={selectedQty} currentQty={currentQty} style={style} handleSelectQty={handleSelectQty} isSizeSelected={isSizeSelected}/>
        </div>
      </div>
      {renderCartButton(selectedQty)}
    </div>
  )
}

export default AddToCart;
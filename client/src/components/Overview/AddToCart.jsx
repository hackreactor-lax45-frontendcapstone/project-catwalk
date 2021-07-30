/* eslint-disable semi */
import React, {useState} from 'react';
import SizeRenderEntry from './sizeRenderEntry.jsx';
import QtyRenderEntry from './qtyRenderEntry.jsx';
import ReactBootstrap from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../../dist/styles/overview/AddToCart.css';

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
      currentQty: state.size.qty,
      isSizeSelected: state.size.isSizeSelected,
      isOutofStock: state.size.isOutofStock,
      selectedQty: state.quantity
    }
  })



  //this handler function should update global state of [size, qty, skus#]
  const handleChange = (event) => {
    if (event.target.value === 'outofstock') {
      updateIsSizeSelected('false')
      return null;
    }
   else if(JSON.parse(event.target.value) === 0) {
      dispatch(UpdateIsSizeSelected())
    } else {
      var selectedStyle = JSON.parse(event.target.value)
      dispatch(SetSelectSize(selectedStyle.size, selectedStyle.quantity))
      dispatch(SetSelectQty(1))
    }
  }


  const handleSelectQty = (event) => {
    dispatch(SetSelectQty(parseInt(event.target.value)))
  }


  //this function is not completed
  // const buttonHandlerNoSelected = () => {
  //   //If the default ‘Select Size’ is currently selected: Clicking this button should open the size dropdown,
  //   //and a message should appear above the dropdown stating “Please select size”.
  //   if (isSizeSelected === 'false') {
  //     return null
  //   } else {
  //     return <div>please select size</div>
  //   }
  // }


  const buttonHandler = () => {
    dispatch(setToCart(currentProduct['productID'], selected['style_id'],currentSize, selectedQty))
  }

  const renderCartButton = function() {
    // //if there's no stock, hide button
    // if ('isOutofStock' === 'true') {
    //   return <div></div>
    // if (isSizeSelected === 'false') {
    //   return <button className='addtocart-button' onClick={buttonHandlerNoSelected} >Add to Cart</button>
    // } else {
      return <button className='addtocart-button' onClick={buttonHandler} >Add to Carter</button>
    // }
  }




  if (state) {
    let { style, selected, currentProduct, currentSize, currentQty, isSizeSelected, isOutofStock, selectedQty } = state;
    return (
      <div id='body-overview-addtocart'>
        <div id='dropdowns'>
          <div>
            <SizeRenderEntry selected={selected} handleChange={handleChange} />
          </div>
          <div>
            <QtyRenderEntry selectedQty={selectedQty} currentQty={currentQty} style={style} handleSelectQty={handleSelectQty} isSizeSelected={isSizeSelected}/>
          </div>
        </div>
        {renderCartButton(selectedQty)}
    </div>
    )

  } else {
    return <div>Loading...</div>
  }


}

export default AddToCart;
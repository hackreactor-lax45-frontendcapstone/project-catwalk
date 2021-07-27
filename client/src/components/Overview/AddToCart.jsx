import React, {useState} from 'react';
import SizeRenderEntry from './SizeRenderEntry.jsx';
import QtyRenderEntry from './qtyRenderEntry.jsx';

import '../../../dist/styles/overview/AddToCart.css';

import { useSelector, useDispatch } from "react-redux";
import SetSelectSize from "../../state/actions/selectSize.js"
import SetSelectQty from "../../state/actions/selectQuantity.js"
import setToCart from '../../state/actions/addToCart.js'

const AddToCart = () => {

  const dispatch = useDispatch();


  const style = useSelector(state => {
    if (!state.product.styleInfo.results) {
      return undefined;
    }
    return state.product.styleInfo.results;
  });
  const selected = useSelector(state => {
    if (!style) {
      return undefined;
    }
    return style[state.style];
  });


  const currentProduct = useSelector(state => {return state.product})
  const currentSize = useSelector(state => {return state.size})
  const currentQty = useSelector(state => {return state.quantity})


//this handler function should update global state of [size, qty, skus#]
  const handleChange = (event) => {
    if (event.target.value === "outofstock") {
      updateIsSizeSelected("false")
      return null;

    } else {
      updateStockStatus("false")
      updateIsSizeSelected("true")
      var selectedStyle = JSON.parse(event.target.value)
        dispatch(SetSelectSize(selectedStyle.size))
        dispatch(SetSelectQty(selectedStyle.quantity))
    }
  }

  //local state to keep track of selected quantity, stock status, size selection status
  var [qty,updateQty] = useState(0)
  var [isOutofStock,updateStockStatus] = useState('false')
  var [isSizeSelected,updateIsSizeSelected] = useState('false')


  const handleSelectQty = (event) => {
    updateQty(event.target.value)
  }

  //this function is not completed
  const buttonHandlerNoSelected = () => {
    //If the default ‘Select Size’ is currently selected: Clicking this button should open the size dropdown,
    //and a message should appear above the dropdown stating “Please select size”.
  }

  const buttonHandler = () => {
    dispatch(setToCart(currentProduct["productID"], selected["style_id"],currentSize, qty))
  }

  const renderCartButton = function() {
    //if there's no stock, hide button
    if (isOutofStock === 'true') {
      updateIsSizeSelected('true')
      return <div></div>
    } else if (isSizeSelected === 'false') {
      return <button className="addtocart-button" onClick={buttonHandlerNoSelected} >Add to Cart</button>
    } else {
      return <button className="addtocart-button" onClick={buttonHandler} >Add to Cart</button>
    }
  }


  if(style && selected) {
    return (
      <div id="body-overview-addtocart">
        <div id="dropdowns">
          <div>
            <SizeRenderEntry selected={selected} handleChange={handleChange} updateStockStatus={updateStockStatus}/>
          </div>
          <div>
            <QtyRenderEntry qty={currentQty} handleSelectQty={handleSelectQty}/>
          </div>
        </div>
        {renderCartButton(qty)}
      </div>
    )
  } else {
    return <div>still loading...</div>
  }

}


export default AddToCart;



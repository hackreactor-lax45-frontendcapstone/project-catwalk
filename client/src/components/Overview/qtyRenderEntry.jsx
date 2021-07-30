import React from 'react';

var qtyRenderEntry = function(props) {
  //run for-loop to display qty from 1 to current qty or max 15
  var qtyArray = [];
  for (var i = 1; i <= props.currentQty && i <= 15; i++) {
    qtyArray.push(i);
  }



  if (props.isSizeSelected === false) {
    return (
      <select id="dropdown-qty" >
        <option> - </option>
      </select>
    )
  } else {
    return (
      <select id="dropdown-qty" onChange ={props.handleSelectQty} value={props.selectedQty} >
        {qtyArray.map((elm, i) => (
        <option key={i} value={elm}> {elm} </option>))}
      </select>
    )
  }


};
export default qtyRenderEntry;

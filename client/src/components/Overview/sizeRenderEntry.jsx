import React from 'react';

var SizeRenderEntry = function(props) {

  var skus = [];
  var qtyandSize = [];
  for (const [key, value] of Object.entries(props.selected.skus)) {
    skus.push({key});
    qtyandSize.push(value);
  }

  // create an array that contains objects list --> ex) [{key:[skus#], size: "9", quantity: "12"},{},{}...{}]
  var final = [];
  for (var i = 0; i < skus.length; i++) {
    var newobj = Object.assign(skus[i], qtyandSize[i]);
    final.push(newobj);
  }



  //if there's no remaining stock, the dropdown become inactive and read 'OUT OF STOCK"
  if (final.length === 0) {
    return (
      <select disabled="outofstock" id="dropdown-size">
        <option>OUT OF STOCK</option>
      </select>
    );
  } else {
    var selectInitial = 'Size';
    var sizeNotSelected ={
      key: "0",
      quantity: 0,
      size: ''
    }
    return (
      <select id='dropdown-size' onChange={props.handleChange}>
        <option value={JSON.stringify(sizeNotSelected)} > {selectInitial}</option>
        {final.map(elem => {
          return (<option key={elem.key} value={JSON.stringify(elem)} > {elem.size} </option>);
        })}
      </select>
    );
  }
};



export default SizeRenderEntry;


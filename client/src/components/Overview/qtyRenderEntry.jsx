import React from 'react';

var qtyRenderEntry = function(props) {

  // var skus = [];
  // var qtyandSize = [];
  // for (const [key, value] of Object.entries(props.list.results[0].skus)) {
  //   skus.push({key});
  //   qtyandSize.push(value);
  // }

  // // create an array that contains objects list --> ex) [{key:[skus#], size: "9", quantity: "12"},{},{}...{}]
  // var final = [];
  // for (var i = 0; i < skus.length; i++) {
  //   var newobj = Object.assign(skus[i], qtyandSize[i])
  //   final.push(newobj)
  // }

  // //if there's no remaining stock, the dropdown become inactive and read 'OUT OF STOCK"
  // if (final.length === 0) {
  //   console.log(final.length)
  //   return <select disabled="outofstock">
  //     <option>OUT OF STOCK</option>
  //   </select>
  // }

  // else {

    return (

      <select>
        <option value="uarefat">{props.qty}</option>
      </select>
    )
 }




export default qtyRenderEntry;



import React from 'react';

var SizeRenderEntry = function(props) {
  //create list in array

  var skus = [];
  var qtyandSize = [];


  for (const [key, value] of Object.entries(props.list.results[1].skus)) {
    skus.push({key});
    qtyandSize.push(value);
  }

  var final = [];
  for (var i = 0; i < skus.length; i++) {
    var newobj = Object.assign(skus[i], qtyandSize[i])
    final.push(newobj)
  }
  //if there's no remaining stock, the dropdown become inactive and read 'OUT OF STOCK"
  if (final.length === 0) {
    console.log(final.length)
    return <select disabled="outofstock">
      <option>OUT OF STOCK</option>
    </select>
  }

  else {

    return ( <select>
      {final.map(elem => {
        return <option key={elem.key} value={elem}> {elem.size} </option>
      })}
     </select> )
  }

}


export default SizeRenderEntry;



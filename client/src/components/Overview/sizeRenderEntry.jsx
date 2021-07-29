import React from 'react';

var SizeRenderEntry = function(props) {
  //create list in array

  var skus = [];
  var qtyandSize = [];

  for (const [key, value] of Object.entries(props.list.results[0].skus)) {
    skus.push({key});
    qtyandSize.push(value);
  }

  var final = [];
  for (var i = 0; i < skus.length; i++) {
    var newobj = Object.assign(skus[i], qtyandSize[i]);
    final.push(newobj);
  }

  //if there's no remaining stock, the dropdown become inactive and read 'OUT OF STOCK"
  if (final.length === 0) {
    console.log(final.length);
    props.updateStockStatus('true');
    return (
      <select disabled="outofstock">
        <option>OUT OF STOCK</option>
      </select>
    );
  } else {
    var selectInitial = 'Size';

    return (
      <select id="dropdown-size" onChange={props.handleChange}>
        <option value="outofstock" > {selectInitial}</option>
        {final.map(elem => {
          return (<option key={elem.key} value={JSON.stringify(elem)} > {elem.size} </option>);
        })}
      </select>
    );
  }
};


export default SizeRenderEntry;



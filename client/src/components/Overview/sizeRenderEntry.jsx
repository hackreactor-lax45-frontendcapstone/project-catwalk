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
    var newobj = Object.assign(skus[i], qtyandSize[i])
    final.push(newobj)
  }

  console.log(final)
  return (
    // <select name="sizes" id="sizes">
      final.map(elem => {
        return <option key={elem.key} value={elem}> {elem.size} </option>
      })

    // </select>

    )

}


export default SizeRenderEntry;



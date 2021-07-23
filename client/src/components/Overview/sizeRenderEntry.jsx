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

  return (
    <>
      {final.map(elem => {
        <option> {elem.size} </option>
      })
      }
    </>
  )
}

export default SizeRenderEntry;



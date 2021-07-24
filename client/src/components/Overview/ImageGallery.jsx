import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

export default props => {

  var state = useSelector(state => state);
  console.log(state);

  return (
    <div id="body-overview-imagegallery-collapse">
      ImageGallery
    </div>
  );
};
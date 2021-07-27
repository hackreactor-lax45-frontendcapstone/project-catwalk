import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../../dist/styles/relatedItems/Related-Products.css';

import _ from 'lodash';

export default props => {

  const related = useSelector(state => state.related);

  if (!related.returned) {
    return (<div>Loading...</div>);
  }
  return (
    <div>
      {_.map(related.products, (product, i) => {
        return <div key={i}>{i}</div>;
      })}
    </div>
  );
};
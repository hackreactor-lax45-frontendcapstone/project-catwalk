import React from 'react';
import _ from 'lodash';

const CHECK_MARK = '✓';

const ModalRow = ({ product, compare, feature }) => {
  return (
    <tr className='related-tr'>
      <td className='related-td'>{product[feature] ? product[feature] : ''}</td>
      <td className='related-mid related-td'>{feature}</td>
      <td className='related-td'>{compare[feature] ? compare[feature] : ''}</td>
    </tr>
  );
};

export default ({ product, compare }) => {
  if (!compare.features) {
    return (<div></div>);
  }

  var featureSet = new Set();

  let productFeatures = _.reduce(product.features, (memo, productFeature) => {
    featureSet.add(productFeature.feature);
    memo[productFeature.feature] = productFeature.value;
    return memo;
  }, {});

  let compareFeatures = _.reduce(compare.features, (memo, compareFeature) => {
    featureSet.add(compareFeature.feature);
    memo[compareFeature.feature] = compareFeature.value;
    return memo;
  }, {});

  let features = [...featureSet];

  return (
    <table id='related-products-table'>
      <thead>
        <tr className=' related-header'>
          <th className='related-th'>{product.name}</th>
          <th className='related-th-mid'>Feature</th>
          <th className='related-th'>{compare.name}</th>
        </tr>
      </thead>
      <tbody>
        {_.map(features, (feature, i) => {
          return <ModalRow
            key={i}
            product={productFeatures}
            compare={compareFeatures}
            feature={feature}/>;
        })}

      </tbody>
    </table>
  );
};
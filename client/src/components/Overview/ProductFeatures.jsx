import React from 'react';
import { useSelector } from 'react-redux';

import '../../../dist/styles/overview/ProductFeatures.css';

const FeatureRow = ({ feature }) => {
  return (
    <tr className='features-row'>
      <td className='features-col'>{feature.feature}</td>
      <td className='features-col'>{feature.value}</td>
    </tr>
  );
};

export default () => {
  let features = useSelector(state => state.product.productInfo.features);
  return (
    <div id='body-overview-features-container'>
      <span id='features-label'>Product Features</span>
      <table id='features-table'>
        <tbody id='features-tbody'>
          {_.map(features, (feature, i) => <FeatureRow key={i} feature={feature}/>)}
        </tbody>
      </table>
    </div>
  );
};
import React from 'react';
import '../../../dist/styles/overview/ProductFeatures.css';

export default () => {
  return (
    <div id='body-overview-features-container'>
      <table id='features-table'>
        <tbody id='features-tbody'>
          <tr className='features-row'>
            <td className='features-col features-firstcol'>a</td>
            <td className='features-col features-secondcol'>b</td>
          </tr>
          <tr className='features-row'>
            <td className='features-col features-firstcol'>a</td>
            <td className='features-col features-secondcol'>b</td>
          </tr>
          <tr className='features-row'>
            <td className='features-col features-firstcol'>a</td>
            <td className='features-col features-secondcol'>b</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
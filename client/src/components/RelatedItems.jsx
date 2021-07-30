import React from 'react';
import RelatedProductsList from './RelatedItems/RelatedProductsList.jsx';
import OutfitList from './RelatedItems/OutfitList.jsx';

export default () => {
  return (
    <div className='body-related'>
      <div className='body-related-products-container'>
        <RelatedProductsList />
      </div>
      <div className='body-related-outfits-container'>
        <OutfitList />
      </div>
    </div>
  );
};
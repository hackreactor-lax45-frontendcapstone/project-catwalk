import React from 'react';
import RelatedProductsList from './RelatedItems/RelatedProductsList.jsx';
import OutfitList from './RelatedItems/OutfitList.jsx';

export default () => {
  return (
    <div className='body-related'>
      <span id='body-related-products-title'>Related Items</span>
      <RelatedProductsList />
      <span id='body-related-outfits-title'>Your Outfit</span>
      <OutfitList />
    </div>
  );
};
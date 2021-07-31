import React from 'react';
import RelatedProductsList from './RelatedItems/RelatedProductsList.jsx';
import OutfitList from './RelatedItems/OutfitList.jsx';

export default () => {
  return (
    <div className='body-related'>
      <span>Related Items</span>
      <RelatedProductsList />
      <span>Your Outfit</span>
      <OutfitList />
    </div>
  );
};

{/* <div className='body-related-outfits-container'></div> */}
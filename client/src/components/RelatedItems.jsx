import React from 'react';
import RelatedProductsList from './RelatedItems/RelatedProductsList.jsx';
import OutfitList from './RelatedItems/OutfitList.jsx';

export default () => {
  return (
    <div>
      <div className='body-related'>
        <RelatedProductsList />
      </div>
      <div className='body-related'>
        <OutfitList />
      </div>
    </div>
  );
};
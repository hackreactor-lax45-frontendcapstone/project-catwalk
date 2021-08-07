import React from 'react';
import KeywordSearch from './RatingsReviews/KeywordSearch.jsx';
import ProductBreakdown from './RatingsReviews/ProductBreakdown.jsx';
import RatingBreakdown from './RatingsReviews/RatingBreakdown.jsx';
import SortOptions from './RatingsReviews/SortOptions.jsx';
import ReviewList from './RatingsReviews/ReviewList.jsx';
import '../../dist/styles/ratingsreviews/reviews.css';
import '../../dist/styles/ratingsreviews/ratings.css';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../state/actions';
import '../../dist/styles/ratingsreviews/ratingBreakdown.css';


export default () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      filters: state.filters,
      metadata: state.reviews.metadataInfo
    };
  });

  const getAverageRating = (metadata) => {
    let ratings = 0;
    let sumRatings = 0;
    for (var key in metadata) {
      sumRatings += Number(metadata[key]);
      ratings += (Number(key) * Number(metadata[key]));
    }
    let averageRating = Math.round((ratings / sumRatings * 10)) / 10;
    return averageRating;
  };

  const getWidth = (metadata) => {
    let ratings = 0;
    let sumRatings = 0;
    for (var key in metadata) {
      sumRatings += Number(metadata[key]);
      ratings += (Number(key) * Number(metadata[key]));
    }
    let starPercentage = (ratings / sumRatings) / 5 * 100;
    if ((starPercentage % 5) < 2.5) {
      starPercentage -= (starPercentage % 5);
    } else {
      starPercentage += (5 - (starPercentage % 5));
    }
    return starPercentage;
  };

  const filterMessage = (filters) => {
    const filtersOn = [];
    const message = ['Filters:'];

    for (var keys in filters) {
      if (filters[keys]) {
        filtersOn.push(keys);
      }
    }

    if (filtersOn.length > 0) {
      for (var i = 0; i < filtersOn.length; i++) {
        message.push(filtersOn[i]);
      }
      return (
        <div>
          <div>{message.join(' ')}</div>
          <div onClick={() => {
            for (var keys in state.filters) {
              if (state.filters[keys]) {
                dispatch(actions.selectFilters(keys));
              }
            }
          }}>Remove all filters</div>
        </div>
      );
    }
  };


  return (
    <div id="body-reviews">
      <div id="body-reviews-top">
        <div id="body-reviews-top-left">
          <div className="rating-title">Rating and Reviews</div>
          <div className="rating-title-average-container">
            <div className="rating-average">{getAverageRating(state.metadata.ratings)}</div>
            <span id='average-rating-star'>
              <span className='average-rating-star-outer'>
                <span className='average-rating-star-inner' style={{ width: `${getWidth(state.metadata.ratings)}%`}}></span>
              </span>
            </span>
          </div>
          <SortOptions />
          {filterMessage(state.filters)}

        </div>
        <div id="body-reviews-top-middle">
          <RatingBreakdown />
        </div>
        <div id="body-reviews-top-right">
          <ProductBreakdown />
        </div>
      </div>

        <ReviewList />

      {/* <KeywordSearch /> */}
    </div>
  );
};
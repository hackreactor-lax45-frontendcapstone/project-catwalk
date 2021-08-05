import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../state/actions';
import '../../../dist/styles/ratingsreviews/ratingBreakdown.css';

//TO CHANGE THE WIDTH OF GRAPH BARS, SEARCH 'fixedBarWidth' AND CHANGE VALUE; -JOOYOUNG-

const ratingsBreakdown = () => {
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

  let ratingsSum = 0;
  const convertData = (metadata) => {
    let ratingsArray = [];
    for (var key in metadata) {
      ratingsSum += Number(metadata[key]);
      ratingsArray.push({ name: key, value: metadata[key]});
    }
    return ratingsArray;
  };

  var convertedRatings = convertData(state.metadata.ratings);


  const BarGroup = function (d, barHeight) {
    var barPadding = 2;
    var barColour = '#192fbf';
    var barColour2 = '#348AA7';
    var fixedBarWidth = 130;
    var widthScale = d => (d / ratingsSum * fixedBarWidth);
    var width = widthScale(d.value);
    var yMid = barHeight * 0.5;

    return <g className='bar-group'>
      <text
        onClick={() => { (dispatch(actions.selectFilters(d.name))); }}
        className='name-label' x='-65' y={yMid} alignmentBaseline='middle' >{d.name} stars</text>
      <rect y={barPadding * 0.5} width={width} height={barHeight - barPadding} fill={barColour} />
      <rect y={barPadding * 0.5} x={width} width={fixedBarWidth-width} height={barHeight - barPadding} fill={barColour2} />
    </g>;
  };

  //bar size
  let barHeight = 15;
  let barGroups = convertedRatings.map((d, i) => <g key={i} transform={`translate(0, ${i * barHeight})`}>
    {BarGroup(d, barHeight)}
  </g>);




  return (
    <div className='rating-breakdown'>
      RatingBreakdown

      {filterMessage(state.filters)}
      <div>{getAverageRating(state.metadata.ratings)}</div>

      <span id='average-rating-star'>
        <span className='average-rating-star-outer'>
          <span className='average-rating-star-inner' style={{ width: `${getWidth(state.metadata.ratings)}%`}}></span>
        </span>
      </span>

      <svg width='300' height='200' >
        <g className='container'>
          <text className='title' x='10' y='30'>{ratingsSum} Review Ratings</text>
          <g className='chart' transform='translate(100,60)'>
            {barGroups}
          </g>
        </g>
      </svg>

    </div>
  );
};

export default ratingsBreakdown;



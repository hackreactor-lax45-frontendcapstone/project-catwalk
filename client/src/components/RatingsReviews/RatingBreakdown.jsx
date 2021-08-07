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

  let trueValues = Number(state.metadata.recommended.true);
  let falseValues = Number(state.metadata.recommended.false);
  let recommendedPercentage = parseInt(trueValues / (trueValues + falseValues) * 100);

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
    var barColour = '#3c2c2e';
    var barColour2 = '#f5edf0';
    var fixedBarWidth = 270;
    var widthScale = d => (d / ratingsSum * fixedBarWidth);
    var width = widthScale(d.value);
    var yMid = barHeight * 0.5;

    return <g className='bar-group'>
      <text
        onClick={() => { (dispatch(actions.selectFilters(d.name))); }}
        className='name-label' x='-65' y={yMid} alignmentBaseline='middle' >{d.name} star</text>
      <rect y={barPadding * 0.5} width={width} height={barHeight - barPadding} fill={barColour} />
      <rect y={barPadding * 0.5} x={width} width={fixedBarWidth-width} height={barHeight - barPadding} fill={barColour2} />
    </g>;
  };

  //bar size
  let barHeight = 20;
  let barGroups = convertedRatings.map((d, i) => <g key={i} transform={`translate(0, ${i * barHeight})`}>
    {BarGroup(d, barHeight)}
  </g>);

  return (
    <div className='rating-breakdown'>
      <svg className='svg-trash' width='90%' height='90%' >
        <g className='container' transform='translate(100,30)'>

          {barGroups}

        </g>
      </svg>
      <div className='review-recommendation'>{`${recommendedPercentage}% of reviews recommend this product`}</div>
    </div>
  );
};

export default ratingsBreakdown;

/* <g className='chart' transform='translate(100,60)'> */

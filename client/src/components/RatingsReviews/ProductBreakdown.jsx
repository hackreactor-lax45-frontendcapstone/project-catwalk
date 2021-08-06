import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductBreakdown = () => {
  const characteristics = useSelector(state => {
    return state.reviews.metadataInfo.characteristics;
  });

  const getChar = (data) => {
    let children = [];
    if (data.Size) {
      children.push(['Size', Math.round(data.Size.value), 'Too small', 'Perfect']);
    }
    if (data.Width) {
      children.push(['Width', Math.round(data.Width.value), 'Too narrow', 'Too wide']);
    }
    if (data.Comfort) {
      children.push(['Comfort', Math.round(data.Comfort.value), 'Uncomfortable', 'Perfect']);
    }
    if (data.Length) {
      children.push(['Length', Math.round(data.Length.value), 'Runs short', 'Runs long']);
    }
    if (data.Quality) {
      children.push(['Quality', Math.round(data.Quality.value), 'Poor', 'Perfect']);
    }
    if (data.Fit) {
      children.push(['Fit', Math.round(data.Fit.value), 'Too tight', 'Runs long']);
    }
    var barColour = '#192fbf';
    var width = 300;
    var height = 40;
    var xCenter = width / 2;


    return (
      <div>
        {children.map((elm, index) => {
          for (var ind in elm) {
            var calcRate = (elm[1] - 1) / 4;
            var pointer = (width * 0.67) * calcRate;
            var xTranslate = width * 0.3 / 2;
            return (
              <div className="product-characteristics" key={index}>
                <div className="characteristic-name">{elm[0]}</div>
                <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-down-fill" >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" transform={`translate(${pointer + xTranslate}, 0)`} />
                  <rect x={xTranslate} y='15' width={width * 0.7} height="10" fill={barColour}/>
                </svg>
                <div className="characteristic-selections">
                  <div>{elm[2]}</div>
                  <div>{elm[3]}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  };

  return (
    getChar(characteristics)
  );

};

export default ProductBreakdown;


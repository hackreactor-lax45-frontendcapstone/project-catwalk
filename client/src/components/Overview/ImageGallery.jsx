import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../state/actions/index.js';

import '../../../dist/styles/overview/ImageGallery.css';
import _ from 'lodash';

export default () => {

  const dispatch = useDispatch();
  const state = useSelector(state => {
    return {
      product: state.product,
      style: state.style,
    };
  });



  return (
    <div id="body-overview-imagegallery-default">

      {/* main image div */}
      <div id="imagegallery-default-main">
        <div id="imagegallery-default-main-button">
          <button className="imagegallery-button"></button>
          <button className="imagegallery-button"></button>
        </div>
        <div id="imagegallery-default-main-image">
          <img
            className="imagegallery-main"
            src={''}
          ></img>
        </div>
      </div>

      {/* thumbnails div */}
      <div id="imagegallery-default-thumbnails">
        <div id="imagegallery-default-thumbnails-button">
          <button
            className="imagegallery-button"
            onClick={(e) => console.log('left-thumb')}
          ></button>
          <button
            className="imagegallery-button"
            onClick={(e) => console.log('right-thumb')}
          ></button>
        </div>
        <div id="imagegallery-default-thumbnails-image">
          {_.map([], (thumbnail, i) => {
            // var imageClass = 'imagegallery-thumbnail' + (this.state.thumbnailIndex === i ? '-selected' : '');
            var imageClass = 'imagegallery-thumbnail';
            return <img
              key={i}
              id={`image-gallery-thumbnail-${i}`}
              className={imageClass}
              src={thumbnail}
              onClick={(e) => console.log(`select: ${i}`)}
            ></img>;
          })}
        </div>
      </div>

    </div>
  );
};
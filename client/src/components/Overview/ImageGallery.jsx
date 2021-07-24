import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../../dist/styles/overview/ImageGallery.css';
import actions from '../../state/actions/index.js';
import _ from 'lodash';

export default () => {

  const dispatch = useDispatch();

  const state = useSelector(state => {
    if (_.isNil(state.product.styleInfo.results)) {
      return undefined;
    }
    return {
      style: state.product.styleInfo.results[state.style],
      thumbnail: state.thumbnail,
    };
  });

  if (state) {
    return (
      <div id="body-overview-imagegallery-default">

        {/* main image div */}
        <div id="imagegallery-default-main">
          <div id="imagegallery-default-main-button">
            <button
              className="imagegallery-button"
              onClick={() => {
                var thumbnail = state.thumbnail - 1;
                if (thumbnail >= 0) {
                  dispatch(actions.selectThumbnail(thumbnail));
                }
              }}
            ></button>
            <button
              className="imagegallery-button"
              onClick={() => {
                var thumbnail = state.thumbnail + 1;
                var max = state.style.photos.length - 1;
                if (thumbnail <= max) {
                  dispatch(actions.selectThumbnail(thumbnail));
                }
              }}
            ></button>
          </div>
          <div id="imagegallery-default-main-image">
            <img
              className="imagegallery-main"
              src={state.style.photos[state.thumbnail].url}
            ></img>
          </div>
        </div>

        {/* thumbnails div */}
        <div id="imagegallery-default-thumbnails">
          <div id="imagegallery-default-thumbnails-button">
            <button className="imagegallery-button"></button>
            <button className="imagegallery-button"></button>
          </div>
          <div id="imagegallery-default-thumbnails-image">
            {_.map(state.style.photos, (photo, i) => {
              return <img
                key={i}
                id={`image-gallery-thumbnail-${i}`}
                className={`imagegallery-thumbnail${state.thumbnail === i ? '-selected' : ''}`}
                src={photo.thumbnail_url}
                onClick={() => dispatch(actions.selectThumbnail(i))}
              ></img>;
            })}
          </div>
        </div>
      </div>
    );
  }
  return (<div>Loading...</div>);

};
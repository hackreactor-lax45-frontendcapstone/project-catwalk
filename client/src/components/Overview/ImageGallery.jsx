import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../../dist/styles/overview/ImageGallery.css';
import actions from '../../state/actions/index.js';
import _ from 'lodash';

const IMAGE_WIDTH = 140;
const IMAGE_HEIGHT = 90;

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
    var gallery = document.getElementById('imagegallery-default-thumbnails-image');
    if (!_.isNil(gallery)) {
      gallery.scrollLeft = state.thumbnail.scrollLeft;
    }

    return (
      <div id="body-overview-imagegallery-default">

        {/* main image div */}
        <div id="imagegallery-default-main">
          <div id="imagegallery-default-main-button">
            <button
              disabled={false}
              className="imagegallery-button"
              onClick={() => dispatch(
                actions.selectThumbnail(
                  state.thumbnail.index - 1,
                  state.style.photos.length - 1,
                  document.getElementById('imagegallery-default-thumbnails-image').offsetWidth
                ))}
            >{'<'}</button>
            <button
              className="imagegallery-button"
              onClick={() => dispatch(
                actions.selectThumbnail(
                  state.thumbnail.index + 1,
                  state.style.photos.length - 1,
                  document.getElementById('imagegallery-default-thumbnails-image').offsetWidth
                ))}
            >{'>'}</button>
          </div>
          <div id="imagegallery-default-main-image">
            <img
              className="imagegallery-main"
              src={state.style.photos[state.thumbnail.index].url}
            ></img>
          </div>
        </div>

        {/* thumbnails div */}
        <div id="imagegallery-default-thumbnails">
          <div id="imagegallery-default-thumbnails-button">
            <button
              className="imagegallery-button"
              onClick={() => {
                var gallery = document.getElementById('imagegallery-default-thumbnails-image');
                gallery.scrollLeft -= IMAGE_WIDTH;
              }}
            >{'<'}</button>
            <button
              className="imagegallery-button"
              onClick={() => {
                var gallery = document.getElementById('imagegallery-default-thumbnails-image');
                gallery.scrollLeft += IMAGE_WIDTH;
              }}
            >{'>'}</button>
          </div>
          <div id="imagegallery-default-thumbnails-image">
            {_.map(state.style.photos, (photo, i) => {
              return <div key={i} className={'thumbnail-div'}>
                <img
                  className={'imagegallery-thumbnail'}
                  src={photo.thumbnail_url}
                  onClick={() => dispatch(
                    actions.selectThumbnail(
                      i,
                      state.style.photos.length - 1,
                      document.getElementById('imagegallery-default-thumbnails-image').offsetWidth
                    ))}
                ></img>
              </div>;
            })}
          </div>
        </div>
      </div>
    );
  }
  return (<div>Loading...</div>);

};
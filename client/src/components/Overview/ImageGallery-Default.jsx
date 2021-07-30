import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../../dist/styles/overview/ImageGallery-Default.css';
import actions from '../../state/actions/index.js';
import _ from 'lodash';

/* ============================================
                  Constants
============================================ */

const ARROW_RIGHT = '>';
const ARROW_LEFT = '<';
const IMAGE_WIDTH = 140;
const IMAGE_HEIGHT = 90;

const THUMBNAIL_BUTTON_DISABLED = 'imagegallery-thumbnail-button-disabled';
const THUMBNAIL_BUTTON_ENABLED = 'imagegallery-thumbnail-button';

/* ============================================
              Helper Functions
============================================ */
const getGallery = () => document.getElementById('imagegallery-default-thumbnails-image');

const updateThumbnailGallery = (direction) => {
  var gallery = getGallery();

  var previousScrollLeft = gallery.scrollLeft;
  getGallery().scrollLeft += direction * (IMAGE_WIDTH + 1);
  var scrollLeft = getGallery().scrollLeft;

  var left = document.getElementById('imagegallery-thumbnail-button-left');
  var right = document.getElementById('imagegallery-thumbnail-button-right');
  if (direction < 0 && (previousScrollLeft - scrollLeft) < IMAGE_WIDTH) {
    left.disabled = true;
    right.disabled = false;
    left.classList.remove(THUMBNAIL_BUTTON_ENABLED);
    left.classList.add(THUMBNAIL_BUTTON_DISABLED);
  } else if (direction > 0 && Math.round(scrollLeft - previousScrollLeft) < IMAGE_WIDTH) {
    left.disabled = false;
    right.disabled = true;
    right.classList.remove(THUMBNAIL_BUTTON_ENABLED);
    right.classList.add(THUMBNAIL_BUTTON_DISABLED);
  } else {
    getGallery().scrollLeft += direction;
    left.disabled = false;
    right.disabled = false;
    left.classList.remove(THUMBNAIL_BUTTON_DISABLED);
    right.classList.remove(THUMBNAIL_BUTTON_DISABLED);
    left.classList.add(THUMBNAIL_BUTTON_ENABLED);
    right.classList.add(THUMBNAIL_BUTTON_ENABLED);
  }
};

const dispatchThumbnail = (dispatch, direction, state) => {
  dispatch(
    actions.selectThumbnail(
      state.thumbnail.index + direction,
      state.style.photos.length - 1,
      getGallery().offsetWidth
    ));
};

/* ============================================
        Default Image Gallery
============================================ */

export default ({ state }) => {
  const dispatch = useDispatch();

  var gallery = getGallery();
  if (!_.isNil(gallery)) {
    gallery.scrollLeft = state.thumbnail.scrollLeft;
  }

  return (
    <div id="body-overview-imagegallery-default">

      <div id="imagegallery-default-main">
        <div id="imagegallery-default-main-button">
          <button
            disabled={state.thumbnail.index === 0}
            className={'imagegallery-button' + (state.thumbnail.index === 0 ? '-disabled' : '')}
            onClick={() => dispatchThumbnail(dispatch, -1, state)}>
            {ARROW_LEFT}
          </button>
          <button
            disabled={state.thumbnail.index === state.style.photos.length - 1}
            className={'imagegallery-button' + (state.thumbnail.index < (state.style.photos.length - 1) ? '' : '-disabled')}
            onClick={() => dispatchThumbnail(dispatch, 1, state)}>
            {ARROW_RIGHT}
          </button>
        </div>
        <div id="imagegallery-default-main-image">
          <img
            className="imagegallery-main"
            src={state.style.photos[state.thumbnail.index].url}
            onClick={() => dispatch(actions.setViews.defaultView())} />
        </div>
      </div>

      <div id="imagegallery-default-thumbnails">
        <div id="imagegallery-default-thumbnails-button">
          <button
            className='imagegallery-thumbnail-button-disabled'
            id='imagegallery-thumbnail-button-left'
            onClick={() => updateThumbnailGallery(-1)}>
            {ARROW_LEFT}
          </button>
          <button
            className='imagegallery-thumbnail-button'
            id='imagegallery-thumbnail-button-right'
            onClick={() => updateThumbnailGallery(1)}>
            {ARROW_RIGHT}
          </button>
        </div>
        <div id="imagegallery-default-thumbnails-image">
          {_.map(state.style.photos, (photo, i) => {
            return <div key={i} className={'imagegallery-thumbnail-container'}>
              <img
                className={'imagegallery-thumbnail-image'}
                src={photo.thumbnail_url}
                onClick={() => {
                  dispatch(
                    actions.selectThumbnail(
                      i,
                      state.style.photos.length - 1,
                      getGallery().offsetWidth));
                }} />
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};
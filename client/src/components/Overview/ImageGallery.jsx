import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../../dist/styles/overview/ImageGallery.css';
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

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       gallery ID helper
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const getGallery = () => document.getElementById('imagegallery-default-thumbnails-image');

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Scroll thumbnail gallery helper
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const updateThumnailGallery = (direction) => {
  // define gallery
  var gallery = getGallery();

  // capture previous scroll amount, then scroll appropriately
  var previousScrollLeft = gallery.scrollLeft;
  getGallery().scrollLeft += direction * (IMAGE_WIDTH + 1);

  // capture new scroll (automatically caps at max possible)
  var scrollLeft = getGallery().scrollLeft;

  // define left and right thumbnail gallery buttons
  var left = document.getElementById('imagegallery-thumbnail-button-left');
  var right = document.getElementById('imagegallery-thumbnail-button-right');

  // if scrolling left in gallery and the left most position is hit, disable left scroll button
  if (direction < 0 && (previousScrollLeft - scrollLeft) < IMAGE_WIDTH) {
    left.disabled = true;
    right.disabled = false;
    left.classList.remove(THUMBNAIL_BUTTON_ENABLED);
    left.classList.add(THUMBNAIL_BUTTON_DISABLED);

  // if scrolling right in gallery and the scroll difference between previous and current is less than expected,
  // disable the right scroll button
  } else if (direction > 0 && Math.round(scrollLeft - previousScrollLeft) < IMAGE_WIDTH) {
    left.disabled = false;
    right.disabled = true;
    right.classList.remove(THUMBNAIL_BUTTON_ENABLED);
    right.classList.add(THUMBNAIL_BUTTON_DISABLED);

  // otherwise no disabling of buttons
  } else {

    /*
    this is a minor cleanup to make sure we didn't move exactly the IMAGE_WIDTH
    above we moved +1 pixel more than desired because in the case where we move
    exactly the IMAGE_WIDTH, the button wouldn't disable until we clicked again
    and moved 0 pixels.
     */
    getGallery().scrollLeft += direction;

    //  enable everything and set appropriate classes
    left.disabled = false;
    right.disabled = false;
    left.classList.remove(THUMBNAIL_BUTTON_DISABLED);
    right.classList.remove(THUMBNAIL_BUTTON_DISABLED);
    left.classList.add(THUMBNAIL_BUTTON_ENABLED);
    right.classList.add(THUMBNAIL_BUTTON_ENABLED);
  }
};
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Scroll thumbnail gallery helper
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
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

export default () => {

  // define and use redux hooks
  const dispatch = useDispatch();
  const state = useSelector(state => {
    // if styleInfo hasn't been populated yet, return null
    if (_.isNil(state.product.styleInfo.results)) {
      return undefined;
    }

    // if style info has been populated, pull out relevant state
    return {
      style: state.product.styleInfo.results[state.style],
      thumbnail: state.thumbnail,
    };
  });

  // if state is not yet defined, just return a ...loading div
  if (!state) {
    return (<div>Loading...</div>);
  }

  // set the scrollLeft of thumbnail div (if exists)
  var gallery = getGallery();
  if (!_.isNil(gallery)) {
    gallery.scrollLeft = state.thumbnail.scrollLeft;
  }

  return (
    // container for image-gallery-default
    <div id="body-overview-imagegallery-default">

      {/* main image div */}
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
            src={state.style.photos[state.thumbnail.index].url} />
        </div>
      </div>

      {/* thumbnails div */}
      <div id="imagegallery-default-thumbnails">
        <div id="imagegallery-default-thumbnails-button">
          <button
            className='imagegallery-thumbnail-button-disabled'
            id='imagegallery-thumbnail-button-left'
            onClick={() => updateThumnailGallery(-1)}>
            {ARROW_LEFT}
          </button>
          <button
            className='imagegallery-thumbnail-button'
            id='imagegallery-thumbnail-button-right'
            onClick={() => updateThumnailGallery(1)}>
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
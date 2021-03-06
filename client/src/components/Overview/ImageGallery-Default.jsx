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
const IMAGE_WIDTH = 200;

const THUMBNAIL_BUTTON_DISABLED = 'imagegallery-thumbnail-button-disabled';
const THUMBNAIL_BUTTON_ENABLED = 'imagegallery-thumbnail-button';

/* ============================================
              Helper Functions
============================================ */
const getGallery = () => {
  let element = document.getElementById('imagegallery-default-thumbnails-image');
  if (_.isNil(element)) {
    return {
      scrolleLeft: 0,
      offsetWidth: 0,
    };
  }
  return element;
};

const updateThumbnailGallery = (direction) => {
  let gallery = getGallery();

  var previousScrollLeft = gallery.scrollLeft;
  gallery.scrollLeft += direction * (IMAGE_WIDTH + 1);
  var scrollLeft = gallery.scrollLeft;

  var left = document.getElementById('imagegallery-thumbnail-button-left');
  var right = document.getElementById('imagegallery-thumbnail-button-right');

  if (_.isNil(left)) { left = { classList: { remove: () => {}, add: () => {}}}; }
  if (_.isNil(right)) { right = { classList: { remove: () => {}, add: () => {}}}; }

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
    gallery.scrollLeft += direction;
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
    actions.selectThumbnail.defaultView(
      state.thumbnail.index + direction,
      state.style.photos.length - 1,
      getGallery().offsetWidth,
      IMAGE_WIDTH
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

  var backgroundImage = state.style.photos[state.thumbnail.index].url;

  return (
    <div id="body-overview-imagegallery-default">
      <div id="imagegallery-default-main">
        <button
          disabled={state.thumbnail.index === 0}
          id='imagegallery-button-left'
          className={'imagegallery-button' + (state.thumbnail.index === 0 ? '-disabled' : '')}
          onClick={() => dispatchThumbnail(dispatch, -1, state)}>
          {ARROW_LEFT}
        </button>
        <div
          id="imagegallery-default-main-image"
          style={{backgroundImage: `url(${backgroundImage})`}}
          onClick={() => dispatch(actions.setViews.defaultView())}>
        </div>
        <button
          id='imagegallery-button-right'
          disabled={state.thumbnail.index === state.style.photos.length - 1}
          className={'imagegallery-button' + (state.thumbnail.index < (state.style.photos.length - 1) ? '' : '-disabled')}
          onClick={() => dispatchThumbnail(dispatch, 1, state)}>
          {ARROW_RIGHT}
        </button>
      </div>

      <div id="imagegallery-default-thumbnails">
        <button
          className='imagegallery-thumbnail-button-disabled'
          id='imagegallery-thumbnail-button-left'
          onClick={() => updateThumbnailGallery(-1)}>
          {ARROW_LEFT}
        </button>

        <div id="imagegallery-default-thumbnails-container">
          {_.map(state.style.photos, (photo, i) => {
            return (
              <div
                key={i}
                id={`imagegallery-thumbnail-image-${i}`}
                className={'imagegallery-thumbnail-image'}
                style={{backgroundImage: `url(${photo.thumbnail_url}`}}
                onClick={() => {
                  dispatch(
                    actions.selectThumbnail.defaultView(
                      i,
                      state.style.photos.length - 1,
                      gallery.offsetWidth));
                }}>
                <span key={i} className="imagegallery-thumbnail-container">
                  <input
                    className={`cb ${state.thumbnail.index === i && 'is-selected'}`}
                    onChange={() => {}}
                    type="checkbox"
                    value={i}
                    checked={state.thumbnail.index === i && true}
                    id={`galleryCb${i}`}
                  ></input>
                  <label htmlFor={`galleryCb${i}`}></label>
                </span>
              </div>
            );
          })}
        </div>

        <button
          className='imagegallery-thumbnail-button'
          id='imagegallery-thumbnail-button-right'
          onClick={() => updateThumbnailGallery(1)}>
          {ARROW_RIGHT}
        </button>
      </div>
    </div>
  );
};
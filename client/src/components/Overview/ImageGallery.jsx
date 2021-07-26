import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../../dist/styles/overview/ImageGallery.css';
import actions from '../../state/actions/index.js';
import _ from 'lodash';

const IMAGE_WIDTH = 140;
const IMAGE_HEIGHT = 90;

/* class names */
const CLASS_IMAGEGALLERY_THUMBNAIL = 'imagegallery-thumbnail';
const CLASS_THUMBNAIL_DIV = 'thumbnail-div';

/* common suffixes */
const SUFFIX_BUTTON = '-button';
const SUFFIX_DISABLED = '-disabled';
const SUFFIX_IMAGE = '-image';
const SUFFIX_MAIN = '-main';

/* element IDs */
const ID_CONTAINER = 'body-overview-imagegallery-default';
const ID_IMAGEGALLERY = 'imagegallery';
const ID_IMAGEGALLERY_BUTTON = ID_IMAGEGALLERY + SUFFIX_BUTTON;
const ID_IMAGEGALLERY_DEFAULT = ID_IMAGEGALLERY + '-default';
const ID_IMAGEGALLERY_DEFAULT_MAIN = ID_IMAGEGALLERY_DEFAULT + SUFFIX_MAIN;
const ID_IMAGEGALLERY_DEFAULT_MAIN_BUTTON = ID_IMAGEGALLERY_DEFAULT_MAIN + SUFFIX_BUTTON;
const ID_IMAGEGALLERY_DEFAULT_MAIN_IMAGE = ID_IMAGEGALLERY_DEFAULT_MAIN + SUFFIX_IMAGE;
const ID_IMAGEGALLERY_MAIN = ID_IMAGEGALLERY + SUFFIX_MAIN;
const ID_THUMBNAILS = ID_IMAGEGALLERY_DEFAULT + '-thumbnails';
const ID_THUMBNAILS_BUTTON = ID_THUMBNAILS + SUFFIX_BUTTON;
const ID_THUMBNAILS_IMAGE = ID_THUMBNAILS + SUFFIX_IMAGE;

/* Scroll Characters */
const ARROW_LEFT = '<';
const ARROW_RIGHT = '>';

/* scroll gallery based on direction */
const scrollGallery = (direction) =>
  getGallery().scrollLeft -= direction === ARROW_LEFT
    ? IMAGE_WIDTH
    : 0 - IMAGE_WIDTH;

/* scroll main product */
const scrollMainProduct = (direction) => useDispatch(
  actions.selectThumbnail(
    state.thumbnail.index - (direction === ARROW_LEFT
      ? 1
      : -1),
    state.style.photos.length - 1,
    document.getElementById(ID_THUMBNAILS_IMAGE).offsetWidth));

/* helper to get gallery */
const getGallery = () => document.getElementById(ID_THUMBNAILS_IMAGE);

export default () => {

  const state = useSelector(state =>
    !!state.product.styleInfo.results
      ? {
        style: state.product.styleInfo.results[state.style],
        thumbnail: state.thumbnail
      }
      : undefined
  );

  // if the state is falsey, return fallback
  if (!state) {
    return (<div>Loading...</div>);
  }

  var gallery = getGallery();
  !gallery || (gallery.scrollLeft = state.thumbnail.scrollLeft);

  return (
    <div id={ID_CONTAINER}>
      <div id={ID_IMAGEGALLERY_DEFAULT_MAIN}>
        <div id={ID_IMAGEGALLERY_DEFAULT_MAIN_BUTTON}>
          <button
            disabled={state.thumbnail.index === 0}
            className={ID_IMAGEGALLERY_BUTTON + (!state.thumbnail.index ? '' : SUFFIX_DISABLED)}
            onClick={() => scrollMainProduct(ARROW_LEFT)}>
            {ARROW_LEFT}
          </button>
          <button
            disabled={state.thumbnail.index === state.style.photos.length - 1}
            className={ID_IMAGEGALLERY_BUTTON + (state.thumbnail.index < state.style.photos.length ? '' : SUFFIX_DISABLED)}
            onClick={() => scrollMainProduct(ARROW_RIGHT)}>
            {ARROW_RIGHT}
          </button>
        </div>
        <div id={ID_IMAGEGALLERY_DEFAULT_MAIN_IMAGE}>
          <img
            className={ID_IMAGEGALLERY_MAIN}
            src={state.style.photos[state.thumbnail.index].url} />
        </div>
      </div>

      <div id={ID_THUMBNAILS}>
        <div id={ID_THUMBNAILS_BUTTON}>
          <button
            className={ID_IMAGEGALLERY_BUTTON}
            onClick={() => scrollGallery(ARROW_LEFT)}>
            {ARROW_LEFT}
          </button>
          <button
            className={ID_IMAGEGALLERY_BUTTON}
            onClick={() => scrollGallery(ARROW_RIGHT)}>
            {ARROW_RIGHT}
          </button>
        </div>
        <div id={ID_THUMBNAILS_IMAGE}>
          {_.map(state.style.photos, (photo, i) =>
            <div key={i} className={CLASS_THUMBNAIL_DIV}>
              <img
                className={CLASS_IMAGEGALLERY_THUMBNAIL}
                src={photo.thumbnail_url}
                onClick={() => useDispatch(
                  actions.selectThumbnail(
                    i,
                    state.style.photos.length - 1,
                    getGallery().offsetWidth))} />
            </div>)}
        </div>
      </div>
    </div>
  );
}

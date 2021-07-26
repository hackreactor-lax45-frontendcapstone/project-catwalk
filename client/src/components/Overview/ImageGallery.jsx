import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../../dist/styles/overview/ImageGallery.css';
import actions from '../../state/actions/index.js';
import _ from 'lodash';

const ARROW_RIGHT = '>';
const ARROW_LEFT = '<';
const IMAGE_WIDTH = 140;
const IMAGE_HEIGHT = 90;

const getGallery = () => document.getElementById('imagegallery-default-thumbnails-image');

const updateThumnailGallery = (direction) => {

  const THUMBNAIL_BUTTON_DISABLED = 'imagegallery-thumbnail-button-disabled';
  const THUMBNAIL_BUTTON_ENABLED = 'imagegallery-thumbnail-button';

  var gallery = getGallery();
  var previousScrollLeft = gallery.scrollLeft;
  getGallery().scrollLeft += direction * (IMAGE_WIDTH + 1);

  var scrollLeft = getGallery().scrollLeft;
  var left = document.getElementById('imagegallery-thumbnail-button-left');
  var right = document.getElementById('imagegallery-thumbnail-button-right');
  if (direction < 0 && (previousScrollLeft - scrollLeft) < IMAGE_WIDTH) {
    console.log('disable left');
    left.disabled = true;
    right.disabled = false;
    left.classList.remove(THUMBNAIL_BUTTON_ENABLED);
    left.classList.add(THUMBNAIL_BUTTON_DISABLED);
  } else if (direction > 0 && Math.round(scrollLeft - previousScrollLeft) < IMAGE_WIDTH) {
    console.log('disable right');
    left.disabled = false;
    right.disabled = true;
    right.classList.remove(THUMBNAIL_BUTTON_ENABLED);
    right.classList.add(THUMBNAIL_BUTTON_DISABLED);
  } else {
    console.log('enable both');
    getGallery().scrollLeft += direction;
    left.disabled = false;
    right.disabled = false;
    left.classList.remove(THUMBNAIL_BUTTON_DISABLED);
    right.classList.remove(THUMBNAIL_BUTTON_DISABLED);
    left.classList.add(THUMBNAIL_BUTTON_ENABLED);
    right.classList.add(THUMBNAIL_BUTTON_ENABLED);
  }
};

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

  if (!state) {
    return (<div>Loading...</div>);
  }

  var gallery = getGallery();
  if (!_.isNil(gallery)) {
    gallery.scrollLeft = state.thumbnail.scrollLeft;
  }

  return (
    <div id="body-overview-imagegallery-default">

      {/* main image div */}
      <div id="imagegallery-default-main">
        <div id="imagegallery-default-main-button">
          <button
            disabled={state.thumbnail.index === 0}
            className={'imagegallery-button' + (state.thumbnail.index === 0 ? '-disabled' : '')}
            onClick={() => dispatch(
              actions.selectThumbnail(
                state.thumbnail.index - 1,
                state.style.photos.length - 1,
                getGallery().offsetWidth
              ))}>{ARROW_LEFT}</button>
          <button
            disabled={state.thumbnail.index === state.style.photos.length - 1}
            className={'imagegallery-button' + (state.thumbnail.index < (state.style.photos.length - 1) ? '' : '-disabled')}
            onClick={() => dispatch(
              actions.selectThumbnail(
                state.thumbnail.index + 1,
                state.style.photos.length - 1,
                getGallery().offsetWidth
              ))}>{ARROW_RIGHT}</button>
        </div>
        <div id="imagegallery-default-main-image">
          <img
            className="imagegallery-main"
            src={state.style.photos[state.thumbnail.index].url}></img>
        </div>
      </div>

      {/* thumbnails div */}
      <div id="imagegallery-default-thumbnails">
        <div id="imagegallery-default-thumbnails-button">
          <button
            className='imagegallery-thumbnail-button-disabled'
            id='imagegallery-thumbnail-button-left'
            onClick={() => {
              updateThumnailGallery(-1);
            }}>{ARROW_LEFT}</button>
          <button
            className='imagegallery-thumbnail-button'
            id='imagegallery-thumbnail-button-right'
            onClick={() => {
              updateThumnailGallery(1);
            }}>{ARROW_RIGHT}</button>
        </div>
        <div id="imagegallery-default-thumbnails-image">
          {_.map(state.style.photos, (photo, i) => {
            return <div key={i} className={'imagegallery-thumbnail-container'}>
              <img
                className={'imagegallery-thumbnail-image'}
                src={photo.thumbnail_url}
                onClick={() => dispatch(
                  actions.selectThumbnail(
                    i,
                    state.style.photos.length - 1,
                    getGallery().offsetWidth
                  ))}></img>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};
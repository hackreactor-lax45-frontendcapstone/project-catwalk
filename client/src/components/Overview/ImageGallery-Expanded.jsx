import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../../dist/styles/overview/ImageGallery-Expanded.css';
import actions from '../../state/actions/index.js';

export default ({ state }) => {

  const dispatch = useDispatch();
  var backgroundImage = state.style.photos[state.thumbnail.index].url;

  return (
    <div
      id='imagegallery-expanded-main'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
      onMouseMove={((e) => {
        const el = document.getElementById('imagegallery-expanded-main');
        var box = e.target.getBoundingClientRect();

        var mouseX = e.clientX - box.left;
        var mouseY = e.clientY - box.top;
        var xPercent = (mouseX / box.width) * 100;
        var yPercent = (mouseY / box.height) * 100;

        el.style.backgroundPositionX = xPercent + '%';
        el.style.backgroundPositionY = yPercent + '%';
      })}
      onClick={() => dispatch(actions.setViews.defaultView())}>
    </div>
  );
};

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../../dist/styles/overview/ImageGallery-Expanded.css';
import actions from '../../state/actions/index.js';

const zoomPan = e => {
  const el = document.getElementById('imagegallery-expanded-main-in');
  var box = e.target.getBoundingClientRect();

  var mouseX = e.clientX - box.left;
  var mouseY = e.clientY - box.top;
  var xPercent = (mouseX / box.width) * 100;
  var yPercent = (mouseY / box.height) * 100;

  el.style.backgroundPositionX = xPercent + '%';
  el.style.backgroundPositionY = yPercent + '%';
};


export default ({ state }) => {

  const dispatch = useDispatch();

  var backgroundImage = state.style.photos[state.thumbnail.index].url;

  let styleObj = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    position: 'relative',
    backgroundPosition: '50% 50%',
  };

  let mouseFunction = () => {};
  let divId = 'out';
  if (state.view.zoomed) {
    styleObj.backgroundSize = '';
    mouseFunction = zoomPan;
    divId = 'in';
  }

  return (
    <div
      id={`imagegallery-expanded-main-${divId}`}
      style={styleObj}
      onMouseMove={e => mouseFunction(e) }
      onClick={() => {
        if (!state.view.default) {
          const el = document.getElementById(`imagegallery-expanded-main-${divId}`);
          el.style.backgroundPosition = '50% 50%';
          dispatch(actions.zoomView());
        }
      }}>
      <div
        id='imagegallery-expanded-close'
        onClick={() => dispatch(actions.selectView())}>
        {'X'}
      </div>
    </div>
  );
};

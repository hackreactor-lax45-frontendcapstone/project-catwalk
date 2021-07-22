import React from 'react';

export default props => {
  return (
    <div id="body-overview-imagegallery-default">
      {/* main image div */}
      <div id="imagegallery-default-main">
        <div id="imagegallery-default-main-buttonleft">
          <button className="imagegallery-button"></button>
        </div>
        <div id="imagegallery-default-main-image">
          <img className="imagegallery-main"></img>
        </div>
        <div id="imagegallery-default-main-buttonright">
          <button className="imagegallery-button"></button>
        </div>
      </div>
      {/* thumbnails div */}
      <div id="imagegallery-default-thumbnails">
        <div id="imagegallery-default-thumbnails-buttonleft">
          <button className="imagegallery-button"></button>
        </div>
        <div id="imagegallery-default-thumbnails-image">
          <img className="imagegallery-thumbnail"></img>
          <img className="imagegallery-thumbnail"></img>
          <img className="imagegallery-thumbnail"></img>
        </div>
        <div id="imagegallery-default-thumbnails-buttonright">
          <button className="imagegallery-button"></button>
        </div>
      </div>
    </div>
  );
};
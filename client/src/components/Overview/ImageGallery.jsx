import React from 'react';
import '../../../dist/styles/overview/ImageGallery.css';

class ImageGallery extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div id="body-overview-imagegallery-default">
        {/* main image div */}
        <div id="imagegallery-default-main">
          <div id="imagegallery-default-main-button">
            <button className="imagegallery-button"></button>
          </div>
          <div id="imagegallery-default-main-image">
            <img className="imagegallery-main"></img>
          </div>
          <div id="imagegallery-default-main-button">
            <button className="imagegallery-button"></button>
          </div>
        </div>
        {/* thumbnails div */}
        <div id="imagegallery-default-thumbnails">
          <div id="imagegallery-default-thumbnails-button">
            <button className="imagegallery-button"></button>
          </div>
          <div id="imagegallery-default-thumbnails-image">
            <img className="imagegallery-thumbnail"></img>
            <img className="imagegallery-thumbnail"></img>
            <img className="imagegallery-thumbnail"></img>
          </div>
          <div id="imagegallery-default-thumbnails-button">
            <button className="imagegallery-button"></button>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageGallery;
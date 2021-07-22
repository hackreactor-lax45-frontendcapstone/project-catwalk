import React from 'react';
import '../../../dist/styles/overview/ImageGallery.css';
import data from '../../data/product_styles.js';
import _ from 'lodash';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    var styles = _.reduce(data.results, (styleMemo, styleObject) => {
      var stylePhotos = _.reduce(styleObject.photos, (photoMemo, photoObject) => {
        photoMemo.thumbnail.push(photoObject.thumbnail_url);
        photoMemo.url.push(photoObject.url);
        return photoMemo;
      }, {thumbnail: [], url: []});

      styleMemo.push(stylePhotos);
      return styleMemo;
    }, []);

    this.state = {
      styles: styles, // all styles
      styleIndex: 0, // index of selected style
      style: styles[0], // selected style
      thumbnailIndex: 0,
    };

    this.selectImage = this.selectImage.bind(this);
  }

  setStyle(styleIndex) {
    this.setState({
      styleIndex
    });
  }

  selectImage(thumbnailIndex) {
    this.setState({
      thumbnailIndex
    });
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
            <img
              className="imagegallery-main"
              src={this.state.style.url[this.state.thumbnailIndex]}
            ></img>
          </div>
          <div id="imagegallery-default-main-button">
            <button className="imagegallery-button"></button>
          </div>
        </div>
        {/* thumbnails div */}
        <div id="imagegallery-default-thumbnails">
          <div id="imagegallery-default-thumbnails-button">
            <button
              className="imagegallery-button"
              onClick={(e) => {
                document.getElementById('imagegallery-default-thumbnails-image').scrollLeft -= 50;
              }}
            ></button>
          </div>
          <div id="imagegallery-default-thumbnails-image">
            {_.map(this.state.style.thumbnail, (thumbnail, i) => {
              return <img
                key={i}
                className="imagegallery-thumbnail"
                src={thumbnail}
                onClick={() => this.selectImage(i)}
              ></img>;
            })}

          </div>
          <div id="imagegallery-default-thumbnails-button">
            <button
              className="imagegallery-button"
              onClick={(e) => {
                document.getElementById('imagegallery-default-thumbnails-image').scrollLeft += 50;
              }}
            ></button>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageGallery;
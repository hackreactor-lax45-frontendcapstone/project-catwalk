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
    this.incrementImage = this.incrementImage.bind(this);
  }

  componentDidMount() {
    // this.thumbnailWidth = document.getElementById('imagegallery-default-thumbnails-image').offsetWidth;
    // var imageWidth = document.getElementById(`image-gallery-thumbnail-${index}`).offsetWidth;
    // this.setState({
    //   scrollPosition: document.getElementById(`image-gallery-thumbnail-${this.state.thumbnailIndex}`).offsetWidth
    // });
  }

  setStyle(styleIndex) {
    this.setState({
      styleIndex
    });
  }

  incrementImage(increment) {
    var index = this.state.thumbnailIndex + increment;
    index = index < 0 ? 0 : index;
    index = index > this.state.style.url.length - 1 ? this.state.style.url.length - 1 : index;

    // document.getElementById('imagegallery-default-thumbnails-image').scrollLeft = scrollPosition;

    this.setState({
      thumbnailIndex: index,
    }, () => console.log(this.state));
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
            <button className="imagegallery-button"></button>
          </div>
          <div id="imagegallery-default-main-image">
            <img
              className="imagegallery-main"
              src={this.state.style.url[this.state.thumbnailIndex]}
            ></img>
          </div>
        </div>
        {/* thumbnails div */}
        <div id="imagegallery-default-thumbnails">
          <div id="imagegallery-default-thumbnails-button">
            <button
              className="imagegallery-button"
              onClick={(e) => this.incrementImage(-1)}
            ></button>
            <button
              className="imagegallery-button"
              onClick={(e) => this.incrementImage(1)}
            ></button>
          </div>
          <div id="imagegallery-default-thumbnails-image">
            {_.map(this.state.style.thumbnail, (thumbnail, i) => {
              var imageClass = 'imagegallery-thumbnail' + (this.state.thumbnailIndex === i ? '-selected' : '');
              return <img
                key={i}
                id={`image-gallery-thumbnail-${i}`}
                className={imageClass}
                src={thumbnail}
                onClick={() => this.selectImage(i)}
              ></img>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageGallery;
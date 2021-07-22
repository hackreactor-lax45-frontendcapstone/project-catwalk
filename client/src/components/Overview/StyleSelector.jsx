import React from 'react';
import axios from 'axios';

import atelierAPI from '../../lib/atelierAPI.js'
import '../../../dist/styles/overview/StyleSelector.css'

class StyleSelector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      product: [],
      thumbnails: []
    }
  }

  componentDidMount() {
    axios.get(`${atelierAPI.url}/products/16060/styles`, {
      headers: atelierAPI.headers
    })
      .then(res => {
        let thumbnails = res.data.results.map(style => {
          return style.photos
        });
        thumbnails = [].concat(...thumbnails);
        this.setState({
          product: res.data.results,
          thumbnails
        })
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div id="body-overview-styleselector">
        <div className="selection-title">Selected Style Title</div>
        <div className="style-thumbnails">
          {this.state.thumbnails.map(thumbnail => {
            return <span className="thumbnail-container">
              <img className="thumbnail" src={thumbnail.thumbnail_url}></img>
            </span>
          })}
        </div>
        <div className="btn-more-styles">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
            </svg>
          </button>
      </div>
    </div>
    )
  }
}

export default StyleSelector;

/*

<div OUTER_DIV>
  <div TITLE OF SELECTION></div>
  <div STYLE THUMBNAILS></div>
  <div MORE STYLES BUTTON></div>
</div>

*/
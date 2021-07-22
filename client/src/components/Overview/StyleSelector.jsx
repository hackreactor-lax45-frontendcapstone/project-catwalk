import React from 'react';
import axios from 'axios';

import atelierAPI from '../../lib/atelierAPI.js'

class StyleSelector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentProduct: {}
    }
  }

  componentDidMount() {
    axios.get(`${atelierAPI.url}/products/16057/styles`, {
      headers: atelierAPI.headers
    })
      .then(res => this.setState({
        currentProduct: res.data
      }))
  }

  render() {
    return (
      <div id="body-overview-styleselector">
        <div className="selection-title">Selected Style Title</div>
        <div className="style-thumbnails">THUMBNAILS</div>
        <div className="btn-more-styles">
          <button>More Styles</button>
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
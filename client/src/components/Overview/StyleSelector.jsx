import React from 'react';
import axios from 'axios';

import atelierAPI from '../../lib/atelierAPI.js';
import '../../../dist/styles/overview/StyleSelector.css';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: []
    };

    this.handleSelected = this.handleSelected.bind(this);

  }

  componentDidMount() {
    axios.get(`${atelierAPI.url}/products/16060/styles`, {
      headers: atelierAPI.headers
    })
      .then(styles => {
        let selected;
        styles.data.results.forEach(style => {
          if (style['default?'] === true) {
            selected = style.name;
          };
        });

        this.setState({
          product: styles.data.results,
          selected
        });
      })
      .catch(err => console.error(err));
  }

  handleSelected(e) {
    this.setState({
      selected: e.target.name
    });
    if (e.target.getAttribute(checked)) {
      e.target.setAttribute(checked, true);
    }
  }

  render() {
    return (
      <div id="body-overview-styleselector">
        <div className="selection-title">{this.state.selected}</div>
        <div className="style-thumbnails">
          {_.map(this.state.product, (style, i) => {
            return <span key={style.style_id} className="thumbnail-container">
              <img
                src={style.photos[0].thumbnail_url}
                className="thumbnail"
              ></img>
              <input
                className={`cb ${this.state.selected === style.name && 'is-selected'}`}
                onClick={this.handleSelected}
                onChange={e => {}}
                name={style.name}
                type="checkbox"
                checked={this.state.selected === style.name && true}
                id={`cb${i}`}
              ></input>
              <label htmlFor={`cb${i}`}></label>
            </span>
          })}
        </div>
    </div>
    )
  }
}

export default StyleSelector;
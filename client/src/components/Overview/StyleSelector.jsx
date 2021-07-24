import React from 'react';
import axios from 'axios';

import StylesList from './StylesList.jsx'
import atelierAPI from '../../lib/atelierAPI.js'
import '../../../dist/styles/overview/StyleSelector.css'

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
          }
        })

        this.setState({
          product: styles.data.results,
          selected
        })
      })
      .catch(err => console.error(err));
  }

  handleSelected(e) {
    this.setState({
      selected: e.target.name
    });
  }

  render() {
    return (
      <div id="body-overview-styleselector">
        <div className="selection-title">{this.state.selected}</div>
        <div className="style-thumbnails">
          {_.map(this.state.product, style => {
            return <span key={style.style_id} className="thumbnail-container">
              <img
                src={style.photos[0].thumbnail_url}
                onClick={this.handleSelected}
                className={`thumbnail ${this.state.selected === style.name && 'is-selected'}`}
                name={style.name}
              ></img>
            </span>
          })}
        </div>
    </div>
    )
  }
}

export default StyleSelector;


/*
{this.state.product.map(style => {
  return <StylesList
    key={style.style_id}
    style={style}
    selected={this.state.selected}
    handleSelected={this.handleSelected}/>
})}



<span
  className="thumbnail-container">
  <img
    onClick={onClick}
    className={`thumbnail ${selected.selected === props.selected && 'is-selected'}`}
    src={props.style.photos[0].thumbnail_url}
    name={props.style.name}
    ></img>
</span>
*/
import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../state/actions/index.js';

import '../../../dist/styles/overview/StyleSelector.css';

const StyleSelector = () => {

  const dispatch = useDispatch();

  const styles = useSelector(state => {
    if (!state.product.styleInfo.results) {
      return undefined;
    }
    return state.product.styleInfo.results;
  });

  const selected = useSelector(state => {
    if(!styles) {
      return undefined;
    }
    return styles[state.style];
  });

  if (styles) {
    return (
      <div id="body-overview-styleselector">
        <div className="selection-title">{selected.name}</div>
        <div className="style-thumbnails">
          {_.map(styles, (style, i) => {
            return <span key={style.style_id} className="thumbnail-container">
              <img
                src={style.photos[0].thumbnail_url}
                className="thumbnail"
              ></img>
              <input
                className={`cb ${selected.name === style.name && 'is-selected'}`}
                onClick={() => {
                  dispatch(actions.selectStyle(i));
                }}
                onChange={e => {}}
                name={style.name}
                type="checkbox"
                value={i}
                checked={selected.name === style.name && true}
                id={`cb${i}`}
              ></input>
              <label htmlFor={`cb${i}`}></label>
            </span>
          })}
        </div>
    </div>
    )
  }
  return <div></div>
}

export default StyleSelector;
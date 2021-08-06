import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../state/actions/index.js';

import '../../../dist/styles/overview/StyleSelector.css';

const StyleSelector = () => {

  const dispatch = useDispatch();

  const state = useSelector(state => {
    return {
      styles: state.product.styleInfo.results,
      selected: state.product.styleInfo.results[state.style],
    };
  });

  const styles = state.styles;
  const selected = state.selected;

  return (
    <div id="body-overview-styleselector">
      <div className="selection-title">{selected.name}</div>
      <div className="style-thumbnails">
        {_.map(styles, (style, i) => {
          return (
            <div
              key={i}
              className='thumbnail'
              style={{
                backgroundImage: `url(${style.photos[0].thumbnail_url})`,
              }}
              onClick={() => {
                dispatch(actions.selectStyle(i));
              }}>
              <input
                className={`cb ${selected.name === style.name && 'is-selected'}`}
                onChange={e => {}}
                name={style.name}
                type="checkbox"
                value={i}
                checked={selected.name === style.name && true}
                id={`cb${i}`}
              ></input>
              <label htmlFor={`cb${i}`}></label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StyleSelector;
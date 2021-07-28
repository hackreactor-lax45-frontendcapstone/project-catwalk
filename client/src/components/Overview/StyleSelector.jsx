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

    const handleClick = (e) => {
      let thmb = document.getElementsByClassName('style-thumbnails');

      if (e.target.id === 'down') {
        thmb[0].scrollBy({
          top:70,
          behavior: 'smooth'
        })
        if (thmb[0].scrollTop !== 0) {
          thmb[0].classList.remove('hidden');
        }
      } else if (e.target.id === 'up') {
          thmb[0].scrollBy({
            top:-70,
            behavior: 'smooth'
          })
          if (thmb[0].scrollTop === 0) {
            thmb[0].classList.add('hidden');
          }
      }
    }

    return (
      <div id="body-overview-styleselector">
        <div className="selection-title">{selected.name}</div>
        <button onClick={handleClick} className="btn-more-styles up hidden">{
          <svg
            id="up"
            xmlns="http://www.w3.org/2000/svg"
            width="16" height="16"
            fill="currentColor"
            className="bi bi-chevron-compact-up"
            viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d={`M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8
            6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z`}/>
        </svg>
        }</button>
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
          <button onClick={handleClick} className="btn-more-styles down">{
            <svg
              id="down"
              xmlns="http://www.w3.org/2000/svg"
              width="16" height="16"
              fill="currentColor"
              className="bi bi-chevron-compact-down"
              viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d={`M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1
              1.448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z`}/>
          </svg>
          }</button>
    </div>
    )
  }
  return <div>Loading...</div>
}

export default StyleSelector;
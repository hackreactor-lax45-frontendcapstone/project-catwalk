import React, { useState, useEffect } from 'react';

const useSelected = initialValue => {
  const [value, setValue] = React.useState(initialValue);

  return [value, e => {
    setValue({
      selected: e.target.name
    });
  }];
}

const StylesList = (props) => {
  const [selected, setSelected] = useSelected({ selected: null });
  const onClick = (e) => {
    setSelected(e);
    props.handleSelected(e);
  }

  return (
    <span
      className="thumbnail-container">
      <img
        onClick={onClick}
        className={`thumbnail ${selected.selected === props.selected && 'is-selected'}`}
        src={props.style.photos[0].thumbnail_url}
        name={props.style.name}
        ></img>
    </span>
  )
}

export default StylesList;
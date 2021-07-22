import React from 'react';


class StyleSelector extends React.Component {
  constructor(props) {
    super(props)
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
import React from 'react';
import '../../dist/styles/Header.css';
import { useSelector } from 'react-redux';

export default () => {
  // let announcement = 'Flash deals availabel now only! Code hackreactor for 30% off!';
  let announcement = useSelector(state => state.announcement);
  if (announcement) {
    var announcementElement = <div id="announcements">{announcement}</div>;
  } else {
    var announcementElement = <></>;
  }

  return (
    <div id="app-header">
      <div id='header'>
        <h1 id="company-logo">Catwalk</h1>
        <div className="search-bar">
          <div className="icon" onClick={() => {
            const searchBar = document.querySelector('.search-bar');
            searchBar.classList.toggle('active');
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </div>
          <div className="input">
            <input type="text" placeholder="Search" id="search-input"></input>
            <span className="clear" onClick={() => {
              document.getElementById('search-input').value = '';
            }}></span>
          </div>
        </div>
      </div>
      {announcementElement}
    </div>
  );
};
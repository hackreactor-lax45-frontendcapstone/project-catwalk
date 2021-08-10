import React from 'react';
import axios from 'axios';
import AtelierAPI from '../lib/atelierAPI.js';

const ClickTracker = (props) => {

  const handleInteraction = (e) => {
    let module;

    e.nativeEvent.path.forEach(element => {
      if (element.id === 'body-overview') {
        module = 'Overview';
      } else if (element.id === 'body-questions') {
        module = 'Questions & Answers';
      } else if (element.id === 'body-reviews') {
        module = 'Ratings & Reviews';
      } else if (element.id === 'app-header') {
        module = 'Header';
      } else if (element.id === 'app-footer') {
        module = 'Footer';
      } else if (element.className === 'body-related') {
        module = 'Related Items & Comparison';
      }});

    axios({
      method: 'post',
      url: `${AtelierAPI.url}/interactions`,
      headers: AtelierAPI.headers,
      data: {
        element: e.target.localName,
        widget: module,
        time: new Date().toLocaleTimeString()
      }
    })
      .catch(err => console.error(err));
  };

  return (
    <div>
      {props.render(handleInteraction)}
    </div>
  )
}

export default ClickTracker;
import React from 'react';
import atelier from '../config/lib/atelierAPI.js';

import Overview from './Overview.jsx';
import RelatedItems from './RelatedItems.jsx';
import QuestionAnswer from './QuestionAnswer.jsx';
import RatingsReviews from './RatingsReviews.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Overview />
        <RelatedItems />
        <QuestionAnswer />
        <RatingsReviews />
      </div>
    );
  }
}

export default App;
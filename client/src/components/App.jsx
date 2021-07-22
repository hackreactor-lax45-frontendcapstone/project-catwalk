import React from 'react';

import Overview from './Overview.jsx';
import RelatedItems from './RelatedItems.jsx';
import QuestionAnswer from './QuestionAnswer.jsx';
import RatingsReviews from './RatingsReviews.jsx';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div id="app">
        <div id="app-header">
          <Header />
        </div>
        <div id="app-body">
          <Overview />
          <RelatedItems />
          <QuestionAnswer />
          <RatingsReviews />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
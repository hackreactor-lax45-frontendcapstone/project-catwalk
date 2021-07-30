import React from 'react';

export default props => {
  return (
    <div>
      <div id="qa-in-left">
        <div id="qa-question"></div>
        <div id="qa-answer"></div>
        <div id="qa-answer-info">by username, date | Helpful? Yes 0 | Report</div>
      </div>
      <div id="qa-in-right"></div>
    </div>
  );
};
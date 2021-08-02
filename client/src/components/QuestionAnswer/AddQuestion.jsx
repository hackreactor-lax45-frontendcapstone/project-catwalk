import React from 'react';

export default props => {
  return (
    <div>
      <button></button>
      <div id="qa-question-modal" className="question-modal">
        <div className="question-modal-header">
          <div className="question-modal-title">Ask Your Question</div>
          <div className="question-modal-subtitle">PRODUCT_NAME_HERE</div>
        </div>
        <div className="question-modal-body">
          <label>Your Question * </label>
          <input></input>

          <label>What is your nickname? * </label>
          <input></input>

          <label>Your email * </label>
          <input></input>

          <button>Submit Question</button>
        </div>
      <button>&times;</button>
      </div>
    </div>
  );
};
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../../dist/styles/questionsAnswers/AddAnswer.css';

export default props => {
  return (
    <div id="qa-add-answer">
      <div onClick={(e) => {
        const modalBox = e.target.nextSibling;
        const overlay = document.querySelector('#answer-modal-overlay');

        modalBox.classList.add('active');
        overlay.classList.add('active');
      }}>Add Answer</div>
      <div id="qa-answer-modal" className="answer-modal">
        <div className="answer-modal-header">
          <div>
          <div className="answer-modal-title">Submit your Answer!</div>
          <div className="answer-moda-subtitle">PRODUCT_NAME: QUESTION_BODY</div>
          </div>
          <button onClick={() => {
            const modalBox = document.querySelector('#qa-answer-modal');
            const overlay = document.querySelector('#answer-modal-overlay');

            modalBox.classList.remove('active');
            overlay.classList.remove('active');

          }} className="answer-modal-close">&times;</button>
        </div>
        <div className="answer-modal-body">
          <label htmlFor="answer-modal-answer">Your Answer *</label>
          <input
            type="text"
            id="answer-modal-answer"
            name="answer"
            required
            maxLength="1000"
          ></input>
          <label htmlFor="answer-modal-nickname">What is your nickname? *</label>
          <input
            type="text"
            id="answer-modal-nickname"
            name="nickname"
            required
            maxLength="60"
            placeholder="Example: jack543!"
          ></input>
          <div>For privacy reasons, do not use your full name or email address</div>
          <label></label>
          <input
            type="text"
            id="answer-modal-email"
            name="email"
            required
            maxLength="60"
            placeholder="Example: jack@email.com"
            ></input>
          <div>For authentication reasons, you will not be emailed</div>
          <button>Upload an Image</button>
          <button>Submit</button>
        </div>
      </div>
      <div onClick={() => {
        const modalBox = document.querySelector('#qa-answer-modal');
        const overlay = document.querySelector('#answer-modal-overlay');

        modalBox.classList.remove('active');
        overlay.classList.remove('active');
      }} id="answer-modal-overlay"></div>
    </div>
  );
};
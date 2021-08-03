import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import AtelierAPI from '../../lib/atelierAPI.js';

import '../../../dist/styles/questionsAnswers/AddAnswer.css';

export default props => {
  const product = useSelector(state => state.product.productInfo.name);

  return (
    <span id="qa-add-answer">
      <div onClick={(e) => {
        const modalBox = document.querySelector('#qa-answer-modal');
        const overlay = document.querySelector('#answer-modal-overlay');

        modalBox.classList.add('active');
        overlay.classList.add('active');
      }}>Add Answer</div>
      <div id="qa-answer-modal" className="answer-modal">
        <div className="answer-modal-header">
          <div>
          <div className="answer-modal-title">Submit your Answer!</div>
          <div className="answer-modal-subtitle">{`${product}`}</div>
          </div>
          <button onClick={() => {
            const modalBox = document.querySelector('#qa-answer-modal');
            const overlay = document.querySelector('#answer-modal-overlay');

            modalBox.classList.remove('active');
            overlay.classList.remove('active');

          }} className="answer-modal-close">&times;</button>
        </div>
        <div className="answer-modal-body">
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = {};
            formData.forEach((value, property) => data[property] = value);
            console.log(data);

            axios(`${AtelierAPI.url}/qa/questions/${props.i}/answers`, {
              method: 'post',
              headers: AtelierAPI.headers,
              data: {
                body: data['body'],
                name: data['name'],
                email: data['email'],
                image: []
              }
            })
              .catch(err => console.error(err));

          }}>
            <label htmlFor={`answer-modal-answer${props.i}`}>Your Answer *</label>
            <textarea
              type="text"
              id={`answer-modal-answer${props.i}`}
              className="answer-modal-textarea"
              name="body"
              required
              maxLength="1000"
            ></textarea>
            <div id="answer-text-feedback">{}</div>
            <label htmlFor={`answer-modal-nickname${props.i}`}>What is your nickname? *</label>
            <input
              type="text"
              id={`answer-modal-nickname${props.i}`}
              name="name"
              required
              maxLength="60"
              placeholder="Example: jack543!"
            ></input>
            <div>For privacy reasons, do not use your full name or email address</div>
            <label htmlFor={`answer-modal-email${props.i}`}></label>
            <input
              type="email"
              id={`answer-modal-email${props.i}`}
              name="email"
              required
              maxLength="60"
              placeholder="Example: jack@email.com"
              ></input>
            <div>For authentication reasons, you will not be emailed</div>
            {/* <label>Upload Photos</label> */}
            {/* <input type="file" name="photos"></input> */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div onClick={() => {
        const modalBox = document.querySelector('#qa-answer-modal');
        const overlay = document.querySelector('#answer-modal-overlay');

        modalBox.classList.remove('active');
        overlay.classList.remove('active');
      }} id="answer-modal-overlay"></div>
    </span>
  );
};
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
        const modalBox = document.querySelector(`#qa-answer-modal${props.i}`);
        const overlay = document.querySelector(`#answer-modal-overlay${props.i}`);

        modalBox.classList.add('active');
        overlay.classList.add('active');
      }}>Add Answer</div>
      <div id={`qa-answer-modal${props.i}`} className="answer-modal">
        <div className="answer-modal-header">
          <div>
          <div className="answer-modal-title">Submit your Answer!</div>
          <div className="answer-modal-subtitle">{`${product}: ${props.q}`}</div>
          </div>
          <button onClick={() => {
            const modalBox = document.querySelector(`#qa-answer-modal${props.i}`);
            const overlay = document.querySelector(`#answer-modal-overlay${props.i}`);

            modalBox.classList.remove('active');
            overlay.classList.remove('active');

            const inputs = document.querySelectorAll('.answer-input');
            inputs.forEach(node => {
              node.value = '';
            });
          }} className="answer-modal-close">&times;</button>
        </div>
        <div className="answer-modal-body">
          <form className="answer-modal-form" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = {};
            formData.forEach((value, property) => data[property] = value);

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
              className="answer-modal-textarea answer-input"
              name="body"
              required
              maxLength="1000"
            ></textarea>
            <div id="answer-text-feedback">{}</div>
            <label htmlFor={`answer-modal-nickname${props.i}`}>What is your nickname? *</label>
            <input
              type="text"
              id={`answer-modal-nickname${props.i}`}
              className="answer-input"
              name="name"
              required
              maxLength="60"
              placeholder="Example: jack543!"
            ></input>
            <div className="answer-modal-disclaimer">For privacy reasons, do not use your full name or email address</div>
            <label htmlFor={`answer-modal-email${props.i}`}></label>
            <input
              type="email"
              id={`answer-modal-email${props.i}`}
              className="answer-input"
              name="email"
              required
              maxLength="60"
              placeholder="Example: jack@email.com"
              ></input>
            <div className="answer-modal-disclaimer">For authentication reasons, you will not be emailed</div>
            <label>Upload Photos</label>
            <input className="answer-input" type="file" name="photos" multiple></input>
            <button className="answer-modal-submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div onClick={() => {
        const modalBox = document.querySelector(`#qa-answer-modal${props.i}`);
        const overlay = document.querySelector(`#answer-modal-overlay${props.i}`);

        modalBox.classList.remove('active');
        overlay.classList.remove('active');

        document.querySelectorAll('.answer-input').value = '';
      }} id={`answer-modal-overlay${props.i}`}></div>
    </span>
  );
};
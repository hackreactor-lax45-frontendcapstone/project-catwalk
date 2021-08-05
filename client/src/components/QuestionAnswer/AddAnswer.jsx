import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import AtelierAPI from '../../lib/atelierAPI.js';

import '../../../dist/styles/questionsAnswers/AddAnswer.css';

export default props => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.productInfo.name);

  const handleModal = () => {
    const modalBox = document.querySelector(`#qa-answer-modal${props.i}`);
    const overlay = document.querySelector(`#answer-modal-overlay${props.i}`);

    if (modalBox.classList.contains('active') && overlay.classList.contains('active')) {
      modalBox.classList.remove('active');
      overlay.classList.remove('active');

      const inputs = document.querySelectorAll('.answer-input');
      inputs.forEach(node => {
        node.value = '';
      });
    } else {
      modalBox.classList.add('active');
      overlay.classList.add('active');
    }
  }

  return (
    <span id="qa-add-answer">
      <div id="add-answer-link" onClick={handleModal}>Add Answer</div>
      <div id={`qa-answer-modal${props.i}`} className="answer-modal">
        <div className="answer-modal-header">
          <div>
          <div className="answer-modal-title">Submit your Answer!</div>
          <div className="answer-modal-subtitle">{`${product}: ${props.q}`}</div>
          </div>
          <button onClick={handleModal} className="answer-modal-close">&times;</button>
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
              onInvalid={(e) => {
                e.target.setCustomValidity('You must enter the following: Your Answer');
              }}
              maxLength="1000"
            ></textarea>
            <label htmlFor={`answer-modal-nickname${props.i}`} className="answer-label">What is your nickname? *</label>
            <input
              type="text"
              id={`answer-modal-nickname${props.i}`}
              className="answer-input"
              name="name"
              required
              onInvalid={(e) => {
                e.target.setCustomValidity('You must enter the following: Your Nickname');
              }}
              maxLength="60"
              placeholder="Example: jack543!"
            ></input>
            <div className="answer-modal-disclaimer">For privacy reasons, do not use your full name or email address</div>
            <label htmlFor={`answer-modal-email${props.i}`} className="answer-label">Your Email * </label>
            <input
              type="email"
              id={`answer-modal-email${props.i}`}
              className="answer-input"
              name="email"
              required
              onInvalid={(e) => {
                const checkValidity = e.target.validity;
                checkValidity.valueMissing
                ? e.target.setCustomValidity('You must enter the following: Your Email')
                : e.target.setCustomValidity('Invalid Email Address');
              }}
              maxLength="60"
              placeholder="Example: jack@email.com"
              ></input>
            <div className="answer-modal-disclaimer">For authentication reasons, you will not be emailed</div>
            <label htmlFor={`answer-modal-img${props.i}`} className="answer-custom-upload">Upload Photos</label>
            <input id={`answer-modal-img${props.i}`} className="answer-input answer-modal-img" type="file" name="photos" multiple></input>
            <button className="answer-modal-submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div onClick={handleModal} id={`answer-modal-overlay${props.i}`}></div>
    </span>
  );
};
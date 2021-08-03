import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import AtelierAPI from '../../lib/atelierAPI.js';
import actions from '../../state/actions';

import '../../../dist/styles/questionsAnswers/AddQuestion.css';

export default props => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  console.log(product);
  const handleModal = () => {
    const modalBox = document.querySelector('#qa-question-modal');
    const overlay = document.querySelector('#question-modal-overlay');

    if (modalBox.classList.contains('active') && overlay.classList.contains('active')) {
      modalBox.classList.remove('active');
      overlay.classList.remove('active');
    } else {
      modalBox.classList.add('active');
      overlay.classList.add('active');
    }
  };

  return (
    <div>
      <button onClick={handleModal}>Ask A Question</button>
      <div id="qa-question-modal" className="question-modal">
        <div className="question-modal-header">
          <div>
            <div className="question-modal-title">Ask Your Question</div>
            <div className="question-modal-subtitle">{product.productInfo.name}</div>
          </div>
          <button onClick={handleModal}className="question-modal-close">&times;</button>
        </div>
        <div className="question-modal-body">
          <form onSubmit={(e) => {
            e.preventDefault();
            handleModal();
            const formData = new FormData(e.target);
            const data = {};
            formData.forEach((value, property) => data[property] = value);

            axios(`${AtelierAPI.url}/qa/questions`, {
              method: 'post',
              headers: AtelierAPI.headers,
              data: {
                body: data['body'],
                name: data['name'],
                email: data['email'],
                product_id: product.productID
              }
            })
              .then(res => {
                actions.getQuestions(dispatch, product.productID, 1, 4);
              })
              .catch(err => console.error(err))
          }} id="question-modal-form">
            <label htmlFor="question-modal-question">Your Question * </label>
            <textarea
              type="text"
              id="question-modal-question"
              className="question-modal-textarea"
              name="body"
              required
              maxLength="1000"
            ></textarea>
            <label htmlFor="question-modal-nickname">What is your nickname? * </label>
            <input
              type="text"
              id="question-modal-nickname"
              name="name"
              required
              maxLength="60"
              placeholder="Example: jackson11!"
            ></input>
            <div className="question-modal-disclaimer">For privacy reasons, do not use your full name or email address</div>
            <label>Your email * </label>
            <input
              type="email"
              id="question-modal-email"
              name="email"
              required
              maxLength="60"
              placeholder="Why did you like the product or not?"
            ></input>
            <div className="question-modal-disclaimer">For authentication reasons, you will not be emailed</div>
            <button type="submit" id="question-modal-submit">Submit Question</button>
          </form>
        </div>
      </div>
      <div onClick={handleModal} id="question-modal-overlay"></div>
    </div>
  );
};
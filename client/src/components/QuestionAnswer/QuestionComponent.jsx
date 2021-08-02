import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../state/actions/index.js';
import moment from 'moment';

import axios from 'axios';
import AtelierAPI from '../../lib/atelierAPI';

import '../../../dist/styles/questionsAnswers/QuestionComponent.css';

export default props => {
  const dispatch = useDispatch();

  const question = props.question;
  const answers = useSelector(state => state.answers[question.question_id]);

  if (answers) {
  return (
    <div id="qa-individual">
      <div id="qa-in-left">
          <div id="qa-question-body">{`Q: ${question.question_body}`}</div>
        <div id="qa-answer">A:
          {answers.results.map(answer => {
            return (
              <div key={answer.answer_id}>
                <div id="qa-answer-body">{`${answer.body}`}</div>
                <div id="qa-answer-info">
                  <span id="qa-answer-user">{`by ${answer.answerer_name}, `}</span>
                  <span id="qa-answer-date">{`${moment(answer.date).format('MMMM, DD YYYY')} | `}</span>
                  <span id="qa-answer-help">
                    <span>Helpful? </span>
                    <span onClick={() => {
                      axios(`${AtelierAPI.url}/qa/answers/${answer.answer_id}/helpful`, {
                        method: 'put',
                        headers: AtelierAPI.headers,
                        data: {
                          helpfulness: answer.helpfulness + 1
                        }
                      })
                        .then(res => actions.getAnswers(dispatch, question.question_id, 1, answers.results.length))
                        .catch(err => console.error(err));
                    }}>Yes</span>
                    <span>{`(${answer.helpfulness}) | `}</span>
                  </span>
                  <span id="qa-answer-report" onClick={() => {
                    axios(`${AtelierAPI.url}/qa/answers/${answer.answer_id}/report`, {
                      method: 'put',
                      headers: AtelierAPI.headers,
                      data: {
                        reported: true
                      }
                    })
                      .then(res => actions.getAnswers(dispatch, question.question_id, 1, Object.keys(question.answers).length))
                      .catch(err => console.error(err));
                  }}>Report</span>
                </div>
              </div>
            )
          })}
          <div onClick={(e) => {
            if (e.target.innerHTML === 'See More Answers') {
              actions.getAnswers(dispatch, question.question_id, 1, Object.keys(question.answers).length);
              e.target.innerHTML = 'Collapse Answers';
            } else if (e.target.innerHTML === 'Collapse Answers') {
              actions.getAnswers(dispatch, question.question_id, 1, 2);
              e.target.innerHTML = 'See More Answers';
            }
          }}>See More Answers</div>
        </div>
      </div>
      <div id="qa-in-right">
        <span id="qa-question-help">
          <span>Helpful? </span>
          <span onClick={() => {
            axios(`${AtelierAPI.url}/qa/questions/${question.question_id}/helpful`, {
              method: 'put',
              headers: AtelierAPI.headers,
              data: {
                helpfulness: question.question_helpfulness + 1
              }
            })
              .then(res => actions.getQuestions(dispatch, product, 1, 4))
              .catch(err => console.error(err));
          }}>Yes</span>
          <span>{`(${question.question_helpfulness}) | `}</span>
          <span id="qa-question-report" onClick={(e) => {
            axios(`${AtelierAPI.url}/qa/questions/${question.question_id}/report`, {
              method: 'put',
              headers: AtelierAPI.headers,
              data: {
                reported: true
              }
            })
              .catch(err => console.error(err));
              e.target.innerHTML = 'Reported';
          }}>Report</span>
        </span>
      </div>
    </div>
  );
  }
  return <div></div>
};
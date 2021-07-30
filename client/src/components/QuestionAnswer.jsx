import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../state/actions/index.js';

// import AddAnswer from './QuestionAnswer/AddAnswer.jsx';
import AddQuestion from './QuestionAnswer/AddQuestion.jsx';
import MoreQuestions from './QuestionAnswer/MoreQuestions.jsx';
import QuestionsList from './QuestionAnswer/QuestionsList.jsx';
// import QuestionComponent from './QuestionAnswer/QuestionComponent.jsx';
import SearchQuestions from './QuestionAnswer/SearchQuestions.jsx';


const QuestionAnswer = () => {
  const dispatch = useDispatch();

  const product = useSelector(state => state.product.productID);

  useEffect(() => {
    actions.getQuestions(dispatch, product, 1, 2);
  }, [product]);

  return (
    <div id="body-questions">
      <SearchQuestions />
      <AddQuestion />
      <QuestionsList />
      <MoreQuestions />
    </div>
  );
};

export default QuestionAnswer;

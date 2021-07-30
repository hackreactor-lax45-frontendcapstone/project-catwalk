import React from 'react';
import '../../dist/styles/questionAnswer/questions.css';

import AddAnswer from './QuestionAnswer/AddAnswer.jsx';
import AddQuestion from './QuestionAnswer/AddQuestion.jsx';
import MoreQuestions from './QuestionAnswer/MoreQuestions.jsx';
import QuestionsList from './QuestionAnswer/QuestionsList.jsx';
import QuestionComponent from './QuestionAnswer/QuestionComponent.jsx';
import SearchQuestions from './QuestionAnswer/SearchQuestions.jsx';


export default () => {
  return (
    <div id="body-questions"> QuestionAnswer
      <div id="question-top">
        < SearchQuestions />
      </div>
      <div id="question-middle">
        < QuestionsList />
        < QuestionComponent/>
        < AddAnswer />
      </div>
      <div id="question-bottom">
        < AddQuestion />
        < MoreQuestions />
      </div>
    </div>
  );
};


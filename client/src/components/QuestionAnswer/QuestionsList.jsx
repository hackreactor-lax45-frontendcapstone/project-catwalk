import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuestionComponent from './QuestionComponent.jsx';

export default props => {
  return (
    <div>
      <div>QuestionsList</div>
      <QuestionComponent />
    </div>
  );
};
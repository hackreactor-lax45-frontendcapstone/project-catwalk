const questionBody = qbody => ({
  type: 'QUESTION_BODY',
  payload: qbody
});

const questionId = qID => ({
  type: 'QUESTION_ID',
  payload: qID
})

export default { questionBody, questionId };
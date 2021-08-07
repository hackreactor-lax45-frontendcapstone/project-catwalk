import axios from 'axios';
import { url, Server } from '../../lib/Server';
const URL = url.questions;

export default (dispatch, questionID, page, count) => {

  Server.get(`${URL}/${questionID}/answers`, { params: {
    page, count,
  }})
    .then(info => {
      dispatch({
        type: 'GET_ANSWERS',
        payload: info.data
      });
    })
    .catch(err => console.error(err));
};
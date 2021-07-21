import TOKEN from '../config';

const SERVER = 'https://app-hrsei-api.herokuapp.com/api/fec2/';
const CAMPUS = 'hr-lax';

export default {
  url: `${SERVER}/${CAMPUS}/`,
  headers: {
    Authorizaton: TOKEN
  }
};
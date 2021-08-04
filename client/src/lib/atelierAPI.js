// import TOKEN from '../config/config.js';
let TOKEN;
import('../config/config.js')
  .then(actual => TOKEN = actual)
  .catch(() => {
    import('../config/example.config.js')
      .then(example => TOKEN = example)
      .catch(err => console.error(err));
  })

const SERVER = 'https://app-hrsei-api.herokuapp.com/api/fec2';
const CAMPUS = 'hr-lax';

export default {
  url: `${SERVER}/${CAMPUS}`,
  headers: {
    Authorization: TOKEN
  }
};
import axios from 'axios';

export const PRODUCTION = true;

const instance = axios.create({
  baseURL: PRODUCTION ? 'https://woodi-backend.herokuapp.com/' : 'http://127.0.0.1:8000/',
});

export default instance;

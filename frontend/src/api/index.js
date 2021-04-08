import axios from 'axios';

export const PRODUCTION = false;

const instance = axios.create({
  baseURL: PRODUCTION ? process.env.API_URL : process.env.API_STAGING_URL,
});

export default instance;

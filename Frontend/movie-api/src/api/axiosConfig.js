import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8080'
  : 'https://9c96-103-106-239-104.ap.ngrok.io';

export default axios.create({
  baseURL: baseURL,
  headers: { "ngrok-skip-browser-warning": "true" }
});
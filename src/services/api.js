import axios from 'axios';

const api = axios.create({
  baseURL: 'http://a1f50c06.ngrok.io',
});

export default api;

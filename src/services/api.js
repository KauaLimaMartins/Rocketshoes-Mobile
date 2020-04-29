import axios from 'axios';

const api = axios.create({
  baseURL: 'http://5698b204.ngrok.io',
});

export default api;

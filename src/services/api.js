import axios from 'axios';

const api = axios.create({
  baseURL: 'http://454abf7c.ngrok.io',
});

export default api;

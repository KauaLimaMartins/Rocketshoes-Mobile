import axios from 'axios';

const api = axios.create({
  baseURL: 'http://5156ae82.ngrok.io',
});

export default api;

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://167.71.84.33:3333',
});

export default api;

import axios from 'axios';

const api = axios.create({
  baseURL: '//www.mocky.io/v2',
});

export default api;

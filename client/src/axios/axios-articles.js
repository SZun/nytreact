import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/articles'
});

export default instance;

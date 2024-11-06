// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Certifique-se de ter o .env configurado com essa variável
});

export default api;

import axios from "axios";

const api = axios.create({
  baseURL: " https://devmoviesapi.onrender.com",
});

export default api;

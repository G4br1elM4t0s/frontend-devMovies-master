import axios from "axios";

const api = axios.create({
  baseURL: "https://devmoviesback.onrender.com",
});

export default api;

import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: "2704786f9c43917a884746de4a7c561f",
    language: "en-US",
  }
});

api.get('movie/popular');

export default api;
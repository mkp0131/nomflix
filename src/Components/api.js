import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: "2704786f9c43917a884746de4a7c561f",
    language: "en-US",
  }
});

export const tvApi = {
	airingToday: () => api.get('tv/airing_today'),
	popular: () => api.get('tv/popular'),
	topRated: () => api.get('tv/top_rated'),
	detail: (tv_id) => api.get(
		`tv/${tv_id}`,
		{
			params: {
				append_to_response: "videos"
			}
		}
	),
	search: (term) => api.get(
		'search/tv', 
		{
			params: {
				query: encodeURIComponent(term),
			}
		}
	),
}

export const moviesApi = {
	nowPlaying: () => api.get('movie/now_playing'),
	upComing: () => api.get('movie/upcoming'),
	popular: () => api.get('movie/popular'),
	detail: (movie_id) => api.get(
		`movie/${movie_id}`,
		{
			params: {
				append_to_response: "videos"
			}
		}
	),
	search: (term) => api.get(
		'search/movie', 
		{
			params: {
				query: encodeURIComponent(term),
			}
		}
	),
}
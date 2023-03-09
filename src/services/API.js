import axios from 'axios';

const API_KEY = 'b52f4a97df843a5ead1cf8ccfba387fd';
const moviesApi = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
});

export const fetchTrendingMovies = async () => {
	const {
		data: { results },
	} = await moviesApi.get(`trending/movie/day`, {
		params: {
			api_key: API_KEY,
		},
	});
	return results;
};


export const fetchSearchMovies = async searchQuery => {
	const {
		data: { results },
	} = await moviesApi.get(`search/movie`, {
		params: {
			api_key: API_KEY,
			query: searchQuery,
		},
	});
	return results;
};

export const fetchMovieDetailsById = async movieId => {
	const { data } = await moviesApi.get(`movie/${movieId}`, {
		params: {
			api_key: API_KEY,
		},
	});
	return data;
};

export const fetchCastById = async movieId => {
	const {
		data: { cast },
	} = await moviesApi.get(`movie/${movieId}/credits`, {
		params: {
			api_key: API_KEY,
		},
	});
	return cast;
};

export const fetchReviewsById = async movieId => {
	const {
		data: { results },
	} = await moviesApi.get(`movie/${movieId}/reviews`, {
		params: {
			api_key: API_KEY,
		},
	});
	return results;
};
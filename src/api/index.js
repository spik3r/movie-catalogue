import axios from 'axios';
import {config} from './defaultConfig'


const API_KEY = config.api_key;
const BASE_URL = config.api_base_url;
const POPULAR_MOVIES = "/movie/popular";
const MOVIE_DETAILS = "/movie/";
const SEARCH_MOVIES = "/search/movie";


export function loadPopularMovies() {
    return axios({
        method: 'get',
        url: `${BASE_URL}${POPULAR_MOVIES}?page=1&language=en-US&api_key=${API_KEY}`,
    });
}

export function loadMovieDetails(movieId) {
    return axios({
        method: 'get',
        url: `${BASE_URL}${MOVIE_DETAILS}${movieId}?language=en-US&api_key=${API_KEY}`,
    });
}

export function searchMovies(searchTerm) {
    return axios({
        method: 'get',
        url: `${BASE_URL}${SEARCH_MOVIES}?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
    });
}
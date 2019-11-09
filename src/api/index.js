import axios from 'axios';
import {config} from './defaultConfig'


const USER_NAME = config.username;
const PASSWORD = config.password;
const API_KEY = config.api_key;
const BASE_URL = config.api_base_url;
const POPULAR_MOVIES = "/movie/popular";
const MOVIE_DETAILS = "/movie/";


export function loadPopularMovies() {
    return axios({
        method: 'get',
        url: `${BASE_URL}${POPULAR_MOVIES}?page=1&language=en-US&api_key=${API_KEY}`,
        // config: {headers: {'Content-Type': 'application/json'}}
    });
}
export function loadMovieDetails(movieId) {
    return axios({
        method: 'get',
        url: `${BASE_URL}${MOVIE_DETAILS}${movieId}?language=en-US&api_key=${API_KEY}`,
    });
}
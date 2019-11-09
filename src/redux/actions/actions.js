import {Types} from "./types";

export const loadMoviesRequest = () => ({
    type: Types.LOAD_MOVIES_REQUEST,
    payload: {
        isLoading: true,
        showError: false
    }
});

export const loadMoviesSuccess = ({movies}) => ({
    type: Types.LOAD_MOVIES_SUCCESS,
    payload: {
        isLoading: false,
        movies: movies.results
    }
});

export const unhandledError = () => ({
    type: Types.ERROR,
    payload: {
        isLoading: false,
        showError: true
    }
});

export const loadDetailsRequest = (movieId) => ({
    type: Types.LOAD_DETAILS_REQUEST,
    payload: {
        isLoading: true,
        showError: false,
        id: movieId
    }
});

export const loadDetailsSuccess = ({details}) => ({
    type: Types.LOAD_DETAILS_SUCCESS,
    payload: {
        isLoading: false,
        details: details
    }
});

export const showDetails = () => ({
    type: Types.SHOW_DETAILS,
    payload: {
        isLoading: false,
        showError: false,
        showDetails: true
    }
});
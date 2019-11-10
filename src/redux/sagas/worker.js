import {call, put} from 'redux-saga/effects';
import * as api from "../../api";
import {loadDetailsSuccess, loadMoviesSuccess, searchSuccess, showDetails, unhandledError} from "../actions/actions";

export function* loadPopularMovies(action) {
    try {
        const result = yield call(api.loadPopularMovies);
        console.log('movies', result);
        yield put(loadMoviesSuccess({
            movies: result.data
        }));
    } catch (e) {
        yield put(unhandledError);
    }
}

export function* loadMovieDetails(action) {
    try {
        const result = yield call(api.loadMovieDetails, action.payload.id);
        console.log('details', result);
        console.log('action', action);
        yield put(loadDetailsSuccess({
            details: result.data
        }));
        yield put(showDetails());
    } catch (e) {
        yield put(unhandledError);
    }
}

export function* searchMovies(action) {
    try {
        const result = yield call(api.searchMovies, action.payload.searchTerm);
        console.log('movies', result);
        yield put(searchSuccess({
            movies: result.data
        }));
    } catch (e) {
        yield put(unhandledError);
    }
}

import {takeEvery} from 'redux-saga/effects';
import {Types} from "../actions/types";
import * as worker from "./worker";
import {fork} from "@redux-saga/core/effects";

function* watchLoadMoviesRequest(){
    yield takeEvery(Types.LOAD_MOVIES_REQUEST, worker.loadPopularMovies);
}

function* watchLoadDetailsRequest(){
    yield takeEvery(Types.LOAD_DETAILS_REQUEST, worker.loadMovieDetails);
}

const moviesSagas = [
    fork(watchLoadMoviesRequest),
    fork(watchLoadDetailsRequest),
];


export default moviesSagas;
import moviesSagas from './watcher';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        ...moviesSagas
    ]);
}


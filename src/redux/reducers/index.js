import {combineReducers} from "redux";
import MoviesReducer from "./MoviesReducer";


const rootReducer = combineReducers({
    moviesReducer: MoviesReducer
});

export default rootReducer;


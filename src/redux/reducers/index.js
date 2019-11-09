import {combineReducers} from "redux";
import QuestionsReducer from './QuestionsReducer';
import MoviesReducer from "./MoviesReducer";


const rootReducer = combineReducers({
    // questionsReducer: QuestionsReducer,
    moviesReducer: MoviesReducer
});

// const rootReducer = (state, action) => {
//     if (action.type === Types.RESET) {
//         state = undefined
//     }
//     return appReducer(state, action)
// };

export default rootReducer;


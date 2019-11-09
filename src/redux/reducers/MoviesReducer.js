import {Types} from "../actions/types";

const INITIAL_STATE = {};

export default function moviesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.LOAD_MOVIES_REQUEST: {
            console.log('LOAD_MOVIES_REQUEST', action.payload);
            return {...state,
                ...action.payload,
            }
        }
        case Types.LOAD_DETAILS_REQUEST: {
            console.log('LOAD_DETAILS_REQUEST', action.payload);
            return {...state,
                ...action.payload,
            }
        }

        case Types.LOAD_MOVIES_SUCCESS: {
            console.log('LOAD_MOVIES_SUCCESS', action.payload);
            return {
                ...state,
                ...action.payload
            }
        }

        case Types.LOAD_DETAILS_SUCCESS: {
            console.log('LOAD_DETAILS_SUCCESS', action.payload);
            return {
                ...state,
                ...action.payload
            }
        }

        case Types.ERROR: {
            console.log('ERROR', action.payload);
            return {
                ...state,
                ...action.payload
            }
        }

        case Types.SHOW_DETAILS: {
            console.log('SHOW_DETAILS', action.payload);
            return {
                ...state,
                ...action.payload
            }
        }

        default: {
            return state;
        }
    }
}
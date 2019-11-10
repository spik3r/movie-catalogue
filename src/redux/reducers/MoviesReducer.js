import {Types} from "../actions/types";

const INITIAL_STATE = {};

export default function moviesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.LOAD_MOVIES_REQUEST: {
            return {
                ...state,
                ...action.payload,
            }
        }

        case Types.LOAD_DETAILS_REQUEST: {
            return {
                ...state,
                ...action.payload,
            }
        }

        case Types.SEARCH_REQUEST: {
            return {
                ...state,
                ...action.payload,
            }
        }

        case Types.LOAD_MOVIES_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }

        case Types.LOAD_DETAILS_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }

        case Types.SEARCH_SUCCESS: {
            return {
                ...state,
                ...action.payload,
            }
        }

        case Types.ERROR: {
            return {
                ...state,
                ...action.payload
            }
        }

        case Types.SHOW_DETAILS: {
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
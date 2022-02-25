import { SET_SEARCH_FIELD } from './types';

const initialState = { searchField: '' };

export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
};
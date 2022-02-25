import { SET_SEARCH_FIELD } from './types';

export const setSearchField = (text) => ({
    type: SET_SEARCH_FIELD,
    payload: text
});
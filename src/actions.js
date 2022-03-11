import { apiCall } from './api/api';
import {
    SET_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './types';

export const setSearchField = (text) => ({
    type: SET_SEARCH_FIELD,
    payload: text
});

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    apiCall('https://jsonplaceholder.typicode.com/users')
        .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch((err) => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }));
};
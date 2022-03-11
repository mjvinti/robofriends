import {
    SET_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './types'
import * as reducers from './reducers';

describe('searchRobots', () => {
    const initialState = { searchField: '' };
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialState);
    });

    it('should handle SET_SEARCH_FIELD', () => {
        expect(reducers.searchRobots(initialState, {
            type: SET_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        });
    });
});

describe('requestRobots', () => {
    const initialState = { robots: [], isPending: false, error: '' };
    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialState);
    });

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialState, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            ...initialState,
            isPending: true
        });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots({ ...initialState, isPending: true }, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{ id: 123, name: 'test', email: 'email@email.com' }]
        })).toEqual({
            ...initialState,
            isPending: false,
            robots: [{ id: 123, name: 'test', email: 'email@email.com' }]
        });
    });

    it('should handle REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobots({ ...initialState, isPending: true }, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'error'
        })).toEqual({
            ...initialState,
            isPending: false,
            error: 'error'
        });
    });
});
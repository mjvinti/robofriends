import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import { REQUEST_ROBOTS_PENDING, SET_SEARCH_FIELD } from './types';
import * as actions from './actions';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', () => {
    const text = 'text';
    const expectedAction = {
        type: SET_SEARCH_FIELD,
        payload: text
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('should handle request robots pending', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions();
    const expectedAction = { type: REQUEST_ROBOTS_PENDING };
    expect(action[0]).toEqual(expectedAction);
});
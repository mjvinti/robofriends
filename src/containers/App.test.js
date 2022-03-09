import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import App from './App';

const mockStore = configureMockStore();
let wrapper, store;
beforeEach(() => {
    const state = {
        searchRobots: { searchField: '' },
        requestRobots: {
            robots: [],
            isPending: false
        }
    };
    store = mockStore(state);
    wrapper = shallow(<App store={store} />)
});

it('should render', () => {
    expect(wrapper).toMatchSnapshot();
})
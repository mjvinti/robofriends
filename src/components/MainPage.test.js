import React from 'react';
import { shallow } from 'enzyme';

import MainPage from './MainPage';

let mockProps, wrapper;
beforeEach(() => {
    mockProps = {
        onRequestRobots: jest.fn(),
        onSearchChange: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    };
    wrapper = shallow(<MainPage {...mockProps} />)
});

it('renders MainPage', () => {
    expect(wrapper).toMatchSnapshot();
});

it('renders MainPage when `isPending` is `true`', () => {
    expect(wrapper.setProps({ ...mockProps, isPending: true })).toMatchSnapshot();
});

it('renders filtered robots', () => {
    const robots = [{ name: 'Steve' }, { name: 'Stu' }, { name: 'Eric' }];
    const searchField = 'st';
    expect(wrapper.setProps({ ...mockProps, robots, searchField })).toMatchSnapshot();
});
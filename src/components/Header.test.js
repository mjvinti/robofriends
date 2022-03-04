import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

it('should render Header component', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
});

it('should handle shouldComponentUpdate', () => {
    const wrapper = shallow(<Header />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({}, {});
    expect(shouldUpdate).toBeFalsy();
});
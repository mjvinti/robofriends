import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundary from './ErrorBoundary';

it('renders ErrorBoundary', () => {
    expect(shallow(<ErrorBoundary children={{}} />)).toMatchSnapshot();
});

it('handles componentDidCatch', () => {
    const wrapper = shallow(<ErrorBoundary children={{}} />);
    wrapper.instance().componentDidCatch();
    expect(wrapper.state().hasError).toBeTruthy();
});
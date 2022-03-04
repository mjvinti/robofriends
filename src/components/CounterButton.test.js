import React from 'react';
import { shallow } from 'enzyme';

import CounterButton from './CounterButton';

const mockColor = 'red';

it('should render CounterButton component', () => {
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('should correctly increments the counter', () => {
    const wrapper = shallow(<CounterButton color={mockColor} />);
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 1 });
});

it('should handle shouldComponentUpdate', () => {
    const mockNextState = { count: 0 };
    const wrapper = shallow(<CounterButton color={mockColor} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({}, mockNextState);
    expect(shouldUpdate).toBeFalsy();
});
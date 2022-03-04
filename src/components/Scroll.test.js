import React from 'react';
import { shallow } from 'enzyme';

import Scroll from './Scroll';

it('should render Scroll component', () => {
    expect(shallow(<Scroll children={{}} />)).toMatchSnapshot();
});
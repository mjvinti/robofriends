import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

it('should render Card component', () => {
    expect(shallow(<Card id={1} name={'name'} email={'email@email.com'} />)).toMatchSnapshot();
});

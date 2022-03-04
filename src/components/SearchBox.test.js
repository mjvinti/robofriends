import React from 'react';
import { shallow } from 'enzyme';

import SearchBox from './SearchBox';

it('should render SearchBox component', () => {
    const mockOnSearchChange = jest.mock();
    expect(shallow(<SearchBox onSearchChange={mockOnSearchChange} />)).toMatchSnapshot();
});
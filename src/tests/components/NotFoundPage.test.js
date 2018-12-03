import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage  from '../../components/NotFoundPage';

test('Render the correctly NotFoundPage', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});
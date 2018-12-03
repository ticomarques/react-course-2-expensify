import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Header from '../../components/Header';


//react-test-renderer


test('Should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    
    //expect(wrapper.find('h1').text()).toBe('Expensify');

    // const Renderer = new ReactShallowRenderer();
    // Renderer.render(<Header />);
    // expect(Renderer.getRenderOutput()).toMatchSnapshot();
    //console.log(Renderer.getRenderOutput());
});
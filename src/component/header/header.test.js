import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../../../Utils/index';
import Header from './index';

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />)
    return component
}


describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'header-component');
        expect(wrapper.length).toBe(1)
    })
    it('Should render a logo', () => {
        const wrapper = findByTestAtrr(component, 'header-image');
        expect(wrapper.length).toBe(1)
    })
})

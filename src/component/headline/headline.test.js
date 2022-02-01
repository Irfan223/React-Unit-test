import React from 'react'
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAtrr } from './../../../Utils/index';


const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component
}
describe('Headline Component', () => {
    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: "Test Header",
                desc: "Test Desc"
            }
            wrapper = setUp(props)
        })

        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, "headline-component");
            expect(component.length).toBe(1)
        })
        it('Should render without header', () => {
            const header = findByTestAtrr(wrapper, "header");
            expect(header.length).toBe(1)
        })
        it('Should render without desc', () => {
            const desc = findByTestAtrr(wrapper, "desc");
            expect(desc.length).toBe(1)
        })
    });

    describe('Have no props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp()
        })
        it('Should not render', () => {
            const component = findByTestAtrr(wrapper, 'headline-component')
            expect(component.length).toBe(0)
        })
    });
});
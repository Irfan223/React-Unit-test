import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../../../Utils';
import ListItem from './index';

const setUp = (props = {}) => {
    const component = shallow(<ListItem {...props} />);
    return component
}
describe('List Item Component', () => {
    describe('Compoennt Render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Some Text'
            }
            wrapper = setUp(props)
        })
        it('Should render without error', () => {
            const component = findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a title', () => {
            const title = findByTestAtrr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        })

        it('Should render a description', () => {
            const desc = findByTestAtrr(wrapper, 'componentDescription');
            expect(desc.length).toBe(1)
        })
    })

    describe('Should not render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Some Text'
            }
            wrapper = setUp(props)
        })
        it('Component is not rendered', () => {
            const component = findByTestAtrr(wrapper, 'listItemComponent')
            expect(component.length).toBe(0)
        })
    })
})


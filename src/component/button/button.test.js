import React from 'react';
import {findByTestAtrr} from './../../../Utils';
import SharedButton from './index';
import {shallow} from 'enzyme'

const setUp = (props = {}) => {
    const component = shallow(<SharedButton {...props} />);
    return component
}

describe('Shared Button Component', () => {
    
    describe('render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            };
            wrapper = setUp(props)
        });
        it('Should render a button', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1)
        })

    })
})
import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore } from './../Utils';


const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();;
    return wrapper;
}
describe('App component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [
                { title: 'some title1', body: 'some body1' },
                { title: 'some title2', body: 'some body2' },
                { title: 'some title3', body: 'some body3' }
            ]
        }
        wrapper = setUp(initialState);
    })
    it('Should render without error', () => {
        const component = findByTestAtrr(wrapper, 'appComponent');
        expect(component.length).toBe(1)
    })
})
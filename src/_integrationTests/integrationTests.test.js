import moxios from 'moxios';
import {testStore} from '../../Utils';
import {fetchPost} from '../actions';

describe('fetch post action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall()
    })
    test('store is updated successfully', () => {

        const expectedState = [
            {title: 'Example title 1', body: 'some text 1'},
            {title: 'Example title 2', body: 'some text 2'},
            {title: 'Example title 3', body: 'some text 3'}
        ]
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })
        return store.dispatch(fetchPost())
        .then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })
    })
})
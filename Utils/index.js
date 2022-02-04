import {applyMiddleware, createStore} from 'redux';
import rootReducer from './../src/reducers';
import {middlewares} from './../src/createStore';

export const findByTestAtrr = (component, atrr) => {
    const wrapper = component.find(`[data-test='${atrr}']`)
    return wrapper
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}
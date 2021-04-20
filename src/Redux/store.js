import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './_reducers/index';
import initialState from './_reducers/addContactReducer';
/**
 * @param {object} initialState 
 * @returns {func} createStore
 */
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
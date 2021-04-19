import { createStore } from 'redux';
import reducer from './_reducers/addContactReducer';

const store = createStore(reducer);

export default store;

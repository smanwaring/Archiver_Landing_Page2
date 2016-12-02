import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk'; // no brackets


const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware)
);

export default store;
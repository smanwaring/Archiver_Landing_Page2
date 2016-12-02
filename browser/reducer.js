import React from 'react';
import {RECEIVE_PUPPIES, RECEIVE_SINGLE_PUPPY} from './action-creators';
import {combineReducers} from 'redux';

const hardcodedPuppy = {
  id: 1,
  name: 'Taylor',
  image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
};

//Set up initial state
const initial = {
	puppies: [],
	puppy: hardcodedPuppy
}



const puppiesReducer = function(state=[], action){
	switch(action.type){
		case RECEIVE_PUPPIES: 
			return action.payload;
		default: return state;
	}
}

const singlePuppyReducer = function(state={}, action){
	switch(action.type){
		case RECEIVE_SINGLE_PUPPY: 
			return action.payload;
		default: return state;
	}
}

const rootReducer = combineReducers({
	puppies: puppiesReducer,
	puppy: singlePuppyReducer
})

export default rootReducer;



//my reducer
// const reducer = function(state = initial, action){
// 	switch(action.type) {
// 		case RECEIVE_PUPPIES: 
// 			return Object.assign({}, state, {puppies: action.payload});
// 		case RECEIVE_SINGLE_PUPPY:
// 			return Object.assign({}, state, {puppy: action.payload});
// 		default: return state
// 	}
// }

//combine reducers does the assigning for us??? look into this!!!

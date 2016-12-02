export const RECEIVE_PUPPIES = "RECEIVE_PUPPIES";
export const RECEIVE_SINGLE_PUPPY = "RECEIVE_SINGLE_PUPPY";


//these are regular action creators

export const receivedPuppies = (puppies) => {
	return {
		type: RECEIVE_PUPPIES,
		payload: puppies
	}
}

export const receivedSinglePuppy = (puppy) => {
	return {
		type: RECEIVE_SINGLE_PUPPY,
		payload: puppy
	}
}

//thunk recieves 'dispatch' from thunk middleware when we dispatch the thunk

export const loadPuppies = () => { //this is the action creator that gives us the thunk
	const thunk = function(dispatch){
		fetch('/api/puppies')
		.then(res => res.json())
		.then(puppies => dispatch(receivedPuppies(puppies))) //always dispatch actions
		.catch(err => console.log(err));
	}
	return thunk;
}

export const loadPuppy = (puppyId) => {
	const thunk = function(dispatch){ 
		fetch(`/api/puppies/${puppyId}`)
		.then(res => res.json())
		.then(puppy => dispatch(receivedSinglePuppy(puppy)))
		.catch(err => console.log(err));
	}
	return thunk;
}

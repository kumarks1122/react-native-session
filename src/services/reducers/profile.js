import { UPDATE_USER_DATA } from '../../helpers/actionTypes';

const defaultState = {
	currentUserName: "kumar"
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case UPDATE_USER_DATA: 
			return {
		        ...state,
		        currentUserName: action.payload
		    };
		default:
		    return state;
	}
}
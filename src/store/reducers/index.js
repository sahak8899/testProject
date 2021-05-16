import { GET_APP_DATA, SET_LANGUAGE } from '../action-types';

const initialState = {
	language: 'eng'
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_APP_DATA: {
			return {
				...state,
				...payload
			};
		}
		case SET_LANGUAGE: {
			return {
				...state,
				language: payload
			};
		}
		default:
			return state;
	}
};

import { GET_APP_DATA, SET_LANGUAGE } from '../action-types';

export const getAppDataActionCreator = (payload) => ({
	type: GET_APP_DATA,
	payload
});
export const setLanguageActionCreator = (payload) => ({
	type: SET_LANGUAGE,
	payload
});

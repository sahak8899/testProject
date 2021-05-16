import store from '../store';
import { getAppDataActionCreator } from '../store/action-creators';

const api = 'https://pac.rad.travel/api/datasets/cf202d81-ead7-8d96-fec4-e6e5aceec2b6';

const AppController = {};

AppController.init = async () => {
	await fetch(api)
		.then((res) => res.json())
		.then((result) => {
			store.dispatch(getAppDataActionCreator(result));
		})
		.catch((err) => console.log(err));
};

export default AppController;

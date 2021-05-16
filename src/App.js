import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import AppController from './controllers/app';

import store from './store';
import { Provider } from 'react-redux';
import Main from './containers';
function App() {
	useEffect(() => {
		AppController.init();
	}, []);
	return (
		<Provider store={store}>
			<div className="App">
				<BrowserRouter>
					<Main />
				</BrowserRouter>
			</div>
		</Provider>
	);
}

export default App;

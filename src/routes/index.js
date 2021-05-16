import { memo, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './config';
import Loader from '../components/loader';

const RouteBuilder = () => {
	return (
		<div>
			<Suspense fallback={<Loader />}>
				<Switch>
					{routes.map(({ component, path, exact }) => (
						<Route key={path} exact={!!exact} path={`${path}`} component={component} />
					))}
				</Switch>
			</Suspense>
		</div>
	);
};

export default memo(RouteBuilder);

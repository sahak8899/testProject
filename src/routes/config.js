import { lazy } from 'react';

export default [
	{
		title: 'Home',
		path: '/',
		component: lazy(() => import('../containers/home')),
		exact: true,
		isMenuItem: true
	},
	{
		title: 'Guides',
		path: '/guides',
		component: lazy(() => import('../containers/guides')),
		exact: true,
		isMenuItem: true
	},
	{
		title: 'Cities',
		path: '/cities',
		component: lazy(() => import('../containers/cities')),
		exact: true,
		isMenuItem: true
	},
	{
		title: 'Experiences',
		path: '/experiences',
		component: lazy(() => import('../containers/experiences')),
		exact: true,
		isMenuItem: true
	},
	{
		title: 'Experience details',
		path: '/experiences/:expId',
		component: lazy(() => import('../containers/experienceDetails')),
		exact: true,
		isMenuItem: false
	},
	{
		title: 'Explorers',
		path: '/explorers',
		component: lazy(() => import('../containers/explorers')),
		exact: true,
		isMenuItem: true
	}
];

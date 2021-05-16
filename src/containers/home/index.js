import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import HomeComponent from '../../components/homeComponent';
import { mainDataSelector } from '../../store/selectors';

export default function Home() {
	const { name, counts, org_logo } = useSelector(mainDataSelector, shallowEqual);
	return <HomeComponent name={name} counts={counts} logo={org_logo} />;
}

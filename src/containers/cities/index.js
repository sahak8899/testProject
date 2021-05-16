import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import City from '../../components/cityComponent';
import { citiesSelector } from '../../store/selectors';

export default function Cities() {
	const citiesInfo = useSelector(citiesSelector, shallowEqual);
	return <City data={citiesInfo} />;
}

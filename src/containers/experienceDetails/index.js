import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { experiencesSelector, languageSelector, citiesSelector } from '../../store/selectors';
import ExperienceContent from '../../components/experienceContentComponent';

export default function ExperienceDetails() {
	const experience = useSelector(experiencesSelector, shallowEqual);
	const selectedLang = useSelector(languageSelector, shallowEqual);
	const cities = useSelector(citiesSelector, shallowEqual);

	//get experience ID from params
	const params = useParams();
	//find experience with ID
	const experienceDetails = experience.find((exp) => exp.id === params.expId);
	//find CITY with experience city_id
	const city = cities.find((city) => city._id === experienceDetails.city_id);

	return <ExperienceContent experienceDetails={experienceDetails} selectedLang={selectedLang} city={city.name} />;
}

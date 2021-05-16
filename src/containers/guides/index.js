import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import GuideComponent from '../../components/guideComponent';
import { guidesSelector, experiencesSelector, citiesSelector, explorersSelector, languageSelector } from '../../store/selectors';
// import { languageSelector } from '../../store/selectors/languageSelector';

export default function Guides() {
	const guides = useSelector(guidesSelector, shallowEqual);
	const experiences = useSelector(experiencesSelector, shallowEqual);
	const cities = useSelector(citiesSelector, shallowEqual);
	const explorers = useSelector(explorersSelector, shallowEqual);
	const selectedLang = useSelector(languageSelector, shallowEqual);

	const guidesFullInfo = {};
	const giudeExperiences = [];
	
	//create object with necessary fields
	const getGuidesInfo = () => {
		guides.forEach((guide) => {
			guidesFullInfo.person = guide[selectedLang] ? guide[selectedLang] : guide.eng;
			guidesFullInfo.cover = guide.cover_url;
			guidesFullInfo.experiences = guide.experiences;
			guidesFullInfo.explorerId = guide.explorer_id;
			guidesFullInfo.cityId = guide.city_id;
		});
		return guidesFullInfo;
	};

	const guidesData = getGuidesInfo();
	
	//find CITY with guide cityId
	const guideCities = cities.find(city => city._id === guidesData.cityId);
	//find explorer with guide explorerId
	const guideExplorer = explorers.find(explorer => explorer.id === guidesData.explorerId);
	guidesData.experiences.forEach(item => {
		giudeExperiences.push(experiences.find((elem) => elem.id === item));
	});

	return <GuideComponent 
				name={guidesData.person?.name}
				description={guidesData.person?.description}
				coverUrl={guidesData.cover}
				cityes={guideCities}
				experiences={giudeExperiences}
				explorers={guideExplorer}
				language={selectedLang}
			/>;
}

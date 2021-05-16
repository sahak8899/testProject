import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Experience from '../../components/experienceComponent';
import Pagination from '../../components/pagination';
import SearchInput from '../../components/searchInput';
import { experiencesSelector, languageSelector } from '../../store/selectors';

export default function Experiences() {
	const experiences = useSelector(experiencesSelector, shallowEqual);
	const selectedLang = useSelector(languageSelector, shallowEqual);
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ expPerPage, setExpPerPage ] = useState(6);
	const [ searchValue, setSearchValue ] = useState('');
	const expCount = experiences.length;
	const indexOfLastExp = currentPage * expPerPage;
	const indexOfFirstExp = indexOfLastExp - expPerPage;

	const currentExp = experiences.slice(indexOfFirstExp, indexOfLastExp);
	const paginate = (num) => setCurrentPage(num);

	//onchange input
	const handleSearch = (e) => {
		setSearchValue(e.target.value);
	};

	//filter from search
	const filteredExperience = currentExp.filter((exp) => {
		return exp[selectedLang].name.toLowerCase().indexOf(searchValue) !== -1;
	});

	return (
		<div>
			<h2>Experiences</h2>
			<SearchInput handleSearch={handleSearch} value={searchValue} />
			<Experience currentExp={filteredExperience} selectedLang={selectedLang} />
			<Pagination expPerPage={expPerPage} totalExp={expCount} paginate={paginate} currentPage={currentPage} />
		</div>
	);
}

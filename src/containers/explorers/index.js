import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import ExplorerComponent from '../../components/explorerComponent';
import { explorersSelector, languageSelector } from '../../store/selectors';

export default function Explorers() {
	const explorers = useSelector(explorersSelector, shallowEqual);
	const selectedLang = useSelector(languageSelector, shallowEqual);
	return explorers.map((explorer) => (
		<div className="experience-wrapper">
			<ExplorerComponent explorer={explorer} bio={explorer[selectedLang] || explorer['eng']} key={explorer.id} />
		</div>
	));
}

import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { languages } from '../../enums/languages';
import { languageSelector } from '../../store/selectors';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setLanguageActionCreator } from '../../store/action-creators';
import './style.scss';

export default function LanguageComponent() {
	const selectedLang = useSelector(languageSelector, shallowEqual);
	const dispatch = useDispatch();
	const handleChange = (event) => {
		dispatch(setLanguageActionCreator(event.target.value));
	};
	return (
		<div className="lang-bar">
			<FormControl className="selected-lang">
				<InputLabel id="demo-simple-select-label">Language</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={selectedLang}
					onChange={handleChange}
				>
					{languages.map((lang) => (
						<MenuItem value={lang} key={lang}>
							{lang}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}

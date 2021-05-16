import React from 'react';

export default function SearchInput({ handleSearch, searchValue }) {
	return (
		<p>
			search by name <input type="text" onChange={handleSearch} value={searchValue} />
		</p>
	);
}

import React from 'react';
import './style.scss';

export default function Pagination({ expPerPage, totalExp, paginate, currentPage }) {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalExp / expPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<ul className="pagination">
				{pageNumbers.map((num) => (
					<li key={num} onClick={() => paginate(num)} className={`${currentPage === num ? 'active' : ''}`}>
						{num}
					</li>
				))}
			</ul>
		</div>
	);
}

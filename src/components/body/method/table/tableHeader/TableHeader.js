import './TableHeader.scss';

import React from 'react';

function TableHeader(props) {
	return (
		<div className="table__radio">
			<div className="radio__item">
				<input type="radio" name="radio" id="constant_pres"/>
				<label htmlFor="constant_pres">Constant Pressure</label>
			</div>
			<div className="radio__item">
				<input type="radio" name="radio" id="ramped_pres"/>
				<label htmlFor="ramped_pres">Ramped Pressure</label>
			</div>
			<div className="radio__item">
				<input type="radio" name="radio" id="constant_flow"/>
				<label htmlFor="constant_flow">Constant Flow</label>
			</div>
			<div className="radio__item">
				<input type="radio" name="radio" id="ramped_flow"/>
				<label htmlFor="ramped_flow">Ramped Flow</label>
			</div>
		</div>
	);
}

export default TableHeader;
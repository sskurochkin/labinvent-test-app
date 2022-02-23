import './MethodLeftbar.scss'

import React from 'react';

function MethodLeftbar(props) {
	return (
		<ul className="method__leftbar">
			<li className="method__leftbar-item">ALS</li>
			<li className="method__leftbar-item ">Inlets</li>
			<li className="method__leftbar-item method__leftbar-item--active">Columns</li>
			<li className="method__leftbar-item"></li>
		</ul>
	);
}

export default MethodLeftbar;
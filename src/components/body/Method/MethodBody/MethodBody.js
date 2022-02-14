import './MethodBody.scss'

import React from 'react';

function MethodBody(props) {
	return (
		<div className='method__body'>
			{props.children}
		</div>
	);
}

export default MethodBody;
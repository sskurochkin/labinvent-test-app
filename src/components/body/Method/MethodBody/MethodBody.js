import './MethodBody.scss'

import React from 'react';
import Spinner from "../../../UI/Spinner/Spinner";
import Error from "../../../UI/Error/Error";

function MethodBody(props) {

	console.log(props)

	return (
		<div className='method__body'>
			{props.children}
		</div>
	);
}

export default MethodBody;
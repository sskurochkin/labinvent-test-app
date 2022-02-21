import './MethodBody.scss'

import React from 'react';
import Spinner from "../../../UI/Spinner/Spinner";
import Error from "../../../UI/Error/Error";

function MethodBody({status, children}) {


	return (
		<div className='method__body'>
			{status === 'loading'?<Spinner/>:(status==='error'?<Error/>:children)}
		</div>
	);
}

export default MethodBody;
import './MethodBody.scss'

import React from 'react';
import Spinner from "../../../UI/Spinner/Spinner";
import Error from "../../../UI/Error/Error";

function MethodBody({error, loading, children}) {


	return (
		<div className='method__body'>
			{error ?
				<Error/> :
				(loading ?
					<Spinner/> :
					children)}
		</div>
	);
}

export default MethodBody;
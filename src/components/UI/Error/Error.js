import './Error.scss'
import errorGif from '../../../assets/img/error.gif'

import React from 'react';

function Error(props) {
	return (
		<div className='error-message'>
			<img src={errorGif} alt="" className="error-gif"/>
			<p>Something went wrong...</p>
		</div>
	);
}

export default Error;

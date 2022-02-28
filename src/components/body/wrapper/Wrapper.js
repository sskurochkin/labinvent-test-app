import './Wrapper.scss';

import React from 'react';

function Wrapper({children}) {
	return (
		<div className='body-wrapper'>
			{children}
		</div>
	);
}

export default Wrapper;
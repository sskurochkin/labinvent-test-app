import './Title.scss'

import React from 'react';

function Title({title}) {
	return (
		<h3 className="line__title "><span className="text ">{title}</span><span
			className="hr "/></h3>
	);
}

export default Title;
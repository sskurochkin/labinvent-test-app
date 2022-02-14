import './MethodHeader.scss'

import React from 'react';

function MethodHeader(props) {
	return (
		<div className="method__header">
			<div className="method__worklist worklist">
				<h3 className="worklist__title">Worklist <span>Run</span></h3>
				<p className="worklist__todo">To do: <span>23 injections</span></p>
				<p className="worklist__time">02:15:00</p>
			</div>
			<p className="method__name method__header--active-item">Method: <span>Method1.amx
                                        (00:00/04:30)</span></p>
			<p className="method__single">Single run</p>
		</div>);
}

export default MethodHeader;
import './MethodFooter.scss';
import React from 'react';

function MethodFooter({loadDefaultMethod, showMethods}) {


	return (
		<div className="method__footer ">
			<div className="buttons-left ">
				<div className="buttons-left__btn" onClick={() => loadDefaultMethod()}><span>+</span>New</div>
				<div className="buttons-left__btn " onClick={() => showMethods()}><span>&#9675; &#9675; &#9675;</span>Open
				</div>
			</div>
			<div className="buttons-right ">
				<div className="buttons-right__btn ">Save</div>
				<div className="buttons-right__btn ">Save as</div>
				<div className="buttons-right__btn buttons-right__btn--outline ">Cancel</div>
			</div>
		</div>
	);
}

export default MethodFooter;
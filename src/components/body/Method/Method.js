import './Method.scss';

import React from 'react';
import Table from "./Table/Table";
import MethodHeader from "./MethodHeader/MethodHeader";
import MethodBody from "./MethodBody/MethodBody";
import Scheme from "./Scheme/Scheme";
import Form from "./Form/Form";
import MethodLeftbar from "./MethodLeftbar/MethodLeftbar";
import MethodFooter from "./MethodFooter/MethodFooter";

function Method(props) {
	return (
		<div className="method">
			<MethodHeader/>
			<MethodBody>
				<MethodLeftbar/>

				<div className="method__main">
					<Scheme/>
					<Form/>
				</div>
				<Table/>
			</MethodBody>
			<MethodFooter/>

		</div>
	);
}

export default Method;
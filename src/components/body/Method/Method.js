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

	const {status, totalTime, name, countInjections, currentTime, column, pressure, runTime} = props.data

	return (
		<div className="method">
			<MethodHeader status={status} totalTime={totalTime} currentTime={currentTime} name={name} countInjections={countInjections} runTime={runTime}/>
			<MethodBody>
				<MethodLeftbar/>

				<div className="method__main">
					<Scheme/>
					<Form column={column}/>
				</div>
				<Table pressure={pressure}/>
			</MethodBody>
			<MethodFooter/>

		</div>
	);
}

export default Method;
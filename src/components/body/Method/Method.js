import './Method.scss';

import React from 'react';
import Table from "./Table/Table";
import MethodHeader from "./MethodHeader/MethodHeader";
import MethodBody from "./MethodBody/MethodBody";
import Scheme from "./Scheme/Scheme";
import Form from "./Form/Form";
import MethodLeftbar from "./MethodLeftbar/MethodLeftbar";
import MethodFooter from "./MethodFooter/MethodFooter";
import {useGetCurrentMethodQuery} from "../../../api/apiMethod";

function Method(props) {

	const {data={}, isLoading, isError} = useGetCurrentMethodQuery()


	const {status, totalTime, name, countInjections, currentTime, column, pressure, runTime} = data

	return (
		<div className="method">
			<MethodHeader status={status} totalTime={totalTime} currentTime={currentTime} name={name} countInjections={countInjections} runTime={runTime}/>
			<MethodBody loading={isLoading} error={isError}>
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
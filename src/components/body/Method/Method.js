import {useHttp} from "../../../hooks/useHttp";
import React, {useEffect} from 'react';
import Table from "./Table/Table";
import MethodHeader from "./MethodHeader/MethodHeader";
import MethodBody from "./MethodBody/MethodBody";
import Scheme from "./Scheme/Scheme";
import Form from "./Form/Form";
import MethodLeftbar from "./MethodLeftbar/MethodLeftbar";
import MethodFooter from "./MethodFooter/MethodFooter";
import {useDispatch, useSelector} from "react-redux";
import {fetchMethod} from '../../../store/methodSlice';

import './Method.scss';
import Spinner from "../../UI/Spinner/Spinner";
import Error from "../../UI/Error/Error";


function Method(props) {

	const dispatch = useDispatch()

	const data = useSelector(state => state.method.method)
	const methodLoadingStatus = useSelector(state => state.method.methodLoadingStatus)

	useEffect(()=>{
		dispatch(fetchMethod())
	}, [])
	console.log(methodLoadingStatus)


	console.log(data)
	const {status, totalTime, name, countInjections, currentTime, column, pressure, runTime} = data

	return (
		<div className="method">
			<MethodHeader status={status} name={name} countInjections={countInjections}/>
			<MethodBody >
				<MethodLeftbar/>
				<div className="method__main">
					<Scheme />
					<Form/>
				</div>
				<Table />
			</MethodBody>
			<MethodFooter/>


		</div>
	);
}

export default Method;
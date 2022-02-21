import {useHttp} from "../../../hooks/useHttp";
import React, {useEffect, useState} from 'react';
import Table from "./Table/Table";
import MethodHeader from "./MethodHeader/MethodHeader";
import MethodBody from "./MethodBody/MethodBody";
import Scheme from "./Scheme/Scheme";
import Form from "./Form/Form";
import MethodLeftbar from "./MethodLeftbar/MethodLeftbar";
import MethodFooter from "./MethodFooter/MethodFooter";
import {useDispatch, useSelector} from "react-redux";
import {fetchDefaultMethod, fetchMethod, getAllMethods} from '../../../store/methodSlice';

import './Method.scss';
import Spinner from "../../UI/Spinner/Spinner";
import Error from "../../UI/Error/Error";
import {getMethodList, getMethodSelector} from "../../../store/selectors";
import MyModal from "../../UI/Modal/Modal";


function Method(props) {

	const [modal, setModal]=useState(false)

	const dispatch = useDispatch()
	const data = useSelector(getMethodSelector)
	const methodLoadingStatus = useSelector(state => state.method.methodLoadingStatus)

	useEffect(()=>{
		dispatch(fetchMethod())
	}, [])

	const loadDefaultMethod = ()=>{
		dispatch(fetchDefaultMethod())
	}
	const showAllMethods = ()=>{
		setModal(true)
	}


	// const createMethodList = ()=>{
	// 	if(allMethods){
	// 		allMethods.map(method => {
	// 			return (
	//
	// 					<p key={method}>{method}</p>
	//
	// 			)
	// 		})
	// 	}
	// }


	console.log(methodLoadingStatus)

	const {status, totalTime, name, countInjections, currentTime, column, pressure, runTime} = data



	return (
		<div className="method">
			<MethodHeader status={status} name={name} totalTime={totalTime} currentTime={currentTime} runTime={runTime} countInjections={countInjections}/>
			{
					<MethodBody status={methodLoadingStatus}>
						<MethodLeftbar/>
						<div className="method__main">
							<Scheme />
							<Form column={column} />
						</div>
						<Table table={pressure} />
					</MethodBody>
			}
			<MethodFooter loadDefaultMethod={loadDefaultMethod} showMethods={showAllMethods}/>
			<MyModal visible={modal} setVisible={setModal}>
			</MyModal>
		</div>
	);
}

export default Method;
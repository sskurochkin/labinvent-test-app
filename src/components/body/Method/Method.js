import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchDefaultMethod, fetchMethod} from '../../../store/methodSlice';
import {getMethodSelector} from "../../../store/selectors";

import Table from "./Table/Table";
import MethodHeader from "./methodHeader/MethodHeader";
import MethodBody from "./methodBody/MethodBody";
import Scheme from "./scheme/Scheme";
import Form from "./form/Form";
import MethodLeftbar from "./methodLeftbar/MethodLeftbar";
import MethodFooter from "./methodFooter/MethodFooter";
import MyModal from "../../UI/Modal/Modal";
import Spinner from "../../UI/Spinner/Spinner";
import Error from "../../UI/Error/Error";
import './Method.scss';


function Method(props) {

	const [modal, setModal] = useState(false)


	const dispatch = useDispatch()
	const data = useSelector(getMethodSelector)
	const isLoading = useSelector(state => state.method.methodLoadingStatus)

	useEffect(() => {
		dispatch(fetchMethod())
	}, [])

	const loadDefaultMethod = () => {
		dispatch(fetchDefaultMethod())
	}
	const showAllMethods = () => {
		setModal(true)
	}

	const {status, totalTime, name, countInjections, currentTime, column, pressure, runTime} = data

	return (
		<div className="method">
			{isLoading === 'loading'
				? <Spinner/>
				: (isLoading === 'error'
					? <Error/>
					: <><MethodHeader status={status} name={name} totalTime={totalTime} currentTime={currentTime}
									  runTime={runTime}
									  countInjections={countInjections}/>
						<MethodBody>
							<MethodLeftbar/>
							<div className="method__main">
								<Scheme/>
								<Form column={column}/>
							</div>
							<Table table={pressure}/>
						</MethodBody></>)
			}
			<MethodFooter loadDefaultMethod={loadDefaultMethod} showMethods={showAllMethods}/>
			<MyModal visible={modal} setVisible={setModal}/>

		</div>
	);
}

export default Method;
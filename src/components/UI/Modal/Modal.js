import React, {useEffect, useState} from 'react';
import './Modal.scss'
import {useDispatch, useSelector} from "react-redux";
import {getMethodList, getMethodStatus} from "../../../store/selectors";
import Spinner from "../Spinner/Spinner";
import {getAllMethods, openSelectedMethod} from "../../../store/methodSlice";
import {v4 as uuidv4} from "uuid";

const MyModal = ({visible, setVisible}) => {

	const dispatch = useDispatch()
	const allMethods = useSelector(getMethodList)
	const status = useSelector(getMethodStatus)

	useEffect(()=>{
		dispatch(getAllMethods())
	}, [])

	const rootClasses = ['myModal']
	if (visible) {
		rootClasses.push('active');
	}

	const openMethod = (name) =>{
		dispatch(openSelectedMethod(name))
		setVisible(false)
	}

	return (

		<div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
			<div className='myModalContent' onClick={(e) => e.stopPropagation()}>
				<h2>All methods</h2>
				{status==='loading'?<Spinner/>:(allMethods.map((elem, index)=>{
					return(
						<p key={uuidv4(4)} className='modalItem' onClick={()=>openMethod(elem)}><span>{index + 1}.&nbsp;</span>{elem}</p>
					)
				}))}
			</div>
		</div>
	);
};

export default MyModal;
import React, {useEffect} from 'react';
import './Modal.scss'
import {useDispatch, useSelector} from "react-redux";
import {getMethodList, getMethodStatus} from "../../../store/selectors";
import Spinner from "../Spinner/Spinner";
import {getAllMethods, openMethod} from "../../../store/methodSlice";

const MyModal = ({visible, setVisible}) => {

	const dispatch = useDispatch()
	const allMethods = useSelector(getMethodList)
	const state = useSelector(state => state)
	const status = useSelector(state => state.method.allMethodsStatus)

	console.log(state)

	useEffect(()=>{
		dispatch(getAllMethods())
	}, [])

	const rootClasses = ['myModal']
	if (visible) {
		rootClasses.push('active');
	}

	const openSelectedMethod = (name) =>{
		dispatch(openMethod(name))
	}



	return (

		<div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
			<div className='myModalContent' onClick={(e) => e.stopPropagation()}>
				{status==='loading'?<Spinner/>:(allMethods.map(elem=>{
					return(
						<p key={elem} className='modalItem' onClick={()=>openSelectedMethod(elem)}>{elem}</p>
					)
				}))}
			</div>
		</div>
	);
};

export default MyModal;
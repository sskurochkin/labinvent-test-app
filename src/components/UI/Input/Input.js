import './Input.scss'
import React, {useState} from 'react';

function Input({id, desc, label}, ...props) {

	// const {id, desc, value, label, className, type, checked, disabled, handleCheck} = props;

	const CustomInput = (props) =>{
		return <input {...props} />
	}

	return (

		<div className="form__item ">
			<label htmlFor={id} className="form__label ">{label}</label>
			<input {...props} />

			<span>{desc}</span>
		</div>
	);
}

export default Input;
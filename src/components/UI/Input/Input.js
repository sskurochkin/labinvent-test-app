import './Input.scss'
import React, {useState} from 'react';

function Input({id, desc, label, ...props}) {


	return (

		<div className="form__item ">
			<label htmlFor={id} className="form__label ">{label}</label>
			<input id={id} {...props} />
			<span>{desc}</span>
		</div>
	);
}

export default Input;
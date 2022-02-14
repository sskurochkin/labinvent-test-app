import './Input.scss'
import React from 'react';

function Input({id, label, desc, name= null}) {
	return (
		<div className="form__item ">
			<label htmlFor={id} className="form__label ">{label}</label>
			<input type="text " id={id} name={name} className="form__input "/>
			<span>{desc}</span>
		</div>
	);
}

export default Input;
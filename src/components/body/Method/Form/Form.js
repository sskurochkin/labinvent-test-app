import './Form.scss'
import React from 'react';
import Title from "../../../UI/Title/Title";
import Input from "../../../UI/Input/Input";

function Form() {
	return (
		<>
			<div className="method__control ">
				<Title title={'Control Mode'}/>
				<div className="method__form form ">
					<div className="form__item form__item--full ">
						<input type="checkbox" name="control" id="control" className="form__box"/>
						<label htmlFor="control " className="form__label ">On</label>
					</div>
					<Input desc={'ml/Min'} id={'formName'} label={'Flow'}/>
					<Input desc={'cm/sec'} id={'formVel'} label={'Average Velocity'}/>
					<Input desc={'psi'} id={'formPres'} label={'Pressure'}/>
					<Input desc={'min'} id={'formTime'} label={'Holdup time'}/>
				</div>
				<div className="method__post ">
					<Title title={'Post Run'}/>
					<div className="method__form form ">
						<Input desc={'mL/min'} id={'formRun'} label={'Post Run'}/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Form;
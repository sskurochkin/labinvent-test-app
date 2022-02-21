import './Form.scss'
import React, {useState} from 'react';
import Title from "../../../UI/Title/Title";
import Input from "../../../UI/Input/Input";

function Form(props) {

	const {averageVelocity, controlOn, flow, holdupTime, postRun, pressure} = props.column || {}

	const [checkbox, setCheckbox] = useState(controlOn)
	const [disabled, setDisabled] = useState(!controlOn)

	const handleCheck = () => {
		setCheckbox(!checkbox)
		setDisabled(!disabled)
	}


	return (
		<>
			<div className="method__control ">
				<Title title={'Control Mode'}/>
				<div className="method__form form ">
					<div className="form__item form__item--full ">
						<Input type="checkbox" checked={checkbox} name="control" id="control" className="form__box"
							   label={"On"} onChange={handleCheck}/>
					</div>
					<Input desc={'ml/Min'} id={'formName'} label={'Flow'} value={flow} className='form__input'
						   disabled={disabled} onChange={()=>{}}/>
					<Input desc={'cm/sec'} id={'formVel'} label={'Average Velocity'} value={averageVelocity}
						   className='form__input' disabled={disabled} onChange={()=>{}}/>
					<Input desc={'psi'} id={'formPres'} label={'Pressure'} value={pressure} className='form__input'
						   disabled={disabled} onChange={()=>{}}/>
					<Input desc={'min'} id={'formTime'} label={'Holdup time'} value={holdupTime} className='form__input'
						   disabled={disabled} onChange={()=>{}}/>
				</div>
				<div className="method__post ">
					<Title title={'Post Run'}/>
					<div className="method__form form ">
						<Input desc={'mL/min'} id={'formRun'} label={'Post Run'} value={postRun} className='form__input'
							   disabled={disabled} onChange={()=>{}}/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Form;
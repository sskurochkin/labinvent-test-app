import './Table.scss'

import React, {useState} from 'react';
import TableHeader from "./TableHeader/TableHeader";
import Title from "../../../UI/Title/Title";

const Table = ({table}) => {

	const [tableRows, setTableRows] =useState(table?.tableSteps || [])

	const addRowHandle = () =>{

		let newRow = {
			holdTime: 0,
			ramp: '',
			rate: 0,
			runTime: 0,
			selected: false,
			value: 0
		}
		setTableRows([...tableRows, newRow])
	}

	const elements = tableRows.map((row, index) =>{
		return(<tr key={index}>
			<td><input type="radio" name="table" id="" checked={row.selected} onChange={()=>{}}/></td>
			<td>{row.ramp}</td>
			<td>{row.rate}</td>
			<td>{row.value}</td>
			<td>{row.holdTime}</td>
			<td>{row.runTime}</td>
		</tr>)
	})

return(
		<div className="method__table ">
			<div className="method__table-btn" onClick={addRowHandle}/>
			<Title title={'Pressure/Flow Settings'}/>
			<TableHeader/>
			<table className="table">
				<tbody>
				<tr className="table-header">
					<th/>
					<th>Ramp ##</th>
					<th>Rate, mL/min per min</th>
					<th>Value, mL/min</th>
					<th>Hold Time, min</th>
					<th>Run Time, min</th>
				</tr>
				<tr>
					<td/>
					<td>(Initial)</td>
					<td/>
					<td>16.849</td>
					<td>0</td>
					<td>0</td>
				</tr>

				{elements}


				</tbody>
			</table>
		</div>

	);
}

export default Table;
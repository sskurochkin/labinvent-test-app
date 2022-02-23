import './Table.scss'

import React, {useState} from 'react';
import TableHeader from "./tableHeader/TableHeader";
import Title from "../../../UI/Title/Title";
import {v4 as uuidv4} from "uuid";

const Table = ({table}) => {

	const [tableRows, setTableRows] = useState(table?.tableSteps || [])


	const addRowHandle = () => {

		const id = uuidv4();
		let newRow = {
			id: id,
			holdTime: null,
			ramp: '',
			rate: 0,
			runTime: 0,
			selected: false,
			value: 0
		}
		setTableRows([...tableRows, newRow])
	}
	const logger = (e) => {
		const name = e.name
		const id = e
		const value = e.value

		const filtered = tableRows.map(item=>Object.keys(item).)

		console.log(filtered)

		console.log(id)
		console.log(`${name} = ${value + id}`)

	}


	const elements = tableRows.map((row, index) => {
		return (<tr key={uuidv4(3)} onBlur={e => logger(e.target)} data-id={row.id}>
			<td><input type="radio" name="table" id="" checked={row.selected} onChange={() => {
			}}/></td>
			<td>{row.ramp}</td>
			<td><input name={'rate'}  onChange={() => {
			}}/></td>
			<td><input name={'value'}  onChange={() => {
			}}/></td>
			<td>{row.holdTime}</td>
			<td>{row.runTime}</td>
		</tr>)
	})

	// console.log(elements)

	return (
		<div className="method__table ">
			<div className="method__table-btn" onClick={addRowHandle}/>
			<Title title={'Pressure/Flow Settings'}/>
			<TableHeader/>
			<table className={elements.length > 8 ? 'table table--scroll' : 'table'}>
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
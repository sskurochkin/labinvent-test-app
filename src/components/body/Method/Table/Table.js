import './Table.scss'
import Title from "../../../UI/Title/Title";
import TableHeader from "./tableHeader/TableHeader";
import Td from "./td/Td";
import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";

const Table = ({table}) => {

	const [tableRows, setTableRows] = useState(table?.tableSteps || [])


	const addRowHandle = () => {

		const id = uuidv4();
		let newRow = {
			id: id,
			selected: false,
			ramp: '',
			rate: 0,
			value: 0,
			holdTime: null,
			runTime: 0,
		}
		setTableRows([...tableRows, newRow])
	}

	const onChangeHandler = (id, name, value) => {

		const editRow = tableRows.find(elem => elem.id === id)
		editRow[name] = value
		setTableRows([...tableRows])
	}


	const elements = tableRows.map((row, index) => {

		const keysRow = Object.keys(row);

		return (
			<tr key={uuidv4(3)}>
				{keysRow.map(key => {
					if (key === 'id') {
						return null
					}
					if (key === 'selected') {
						return <td key={uuidv4(5)}><input type="radio" name="table" id="" checked={row[key]} onChange={() => {}}/></td>
					}
					return (
						<Td
							id={row.id || ''} key={uuidv4(4)} blur={onChangeHandler} name={key} cellValue={row[key]}>
						</Td>
					)
				})}
			</tr>
		)

	})

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
		</div>)
}


export default Table;
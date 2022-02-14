import './Table.scss'

import React from 'react';
import TableHeader from "./TableHeader/TableHeader";
import Title from "../../../UI/Title/Title";

function Table(props) {
	return (
		<div className="method__table ">
			<div className="method__table-btn"/>
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
				<tr>
					<td><input type="radio" name="table" id=""/></td>
					<td>Ramp 1</td>
					<td>10</td>
					<td>16.849</td>
					<td>0</td>
					<td>0</td>
				</tr>
				<tr>
					<td><input type="radio" name="table" id=""/></td>
					<td>Ramp 1</td>
					<td>20</td>
					<td>16.849</td>
					<td>5</td>
					<td>26</td>
				</tr>
				</tbody>
			</table>
		</div>

	);
}

export default Table;
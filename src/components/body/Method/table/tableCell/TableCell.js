import React, {useState} from 'react';

import './TableCell.scss'

function TableCell({id, cellValue, blur, name}) {

	const [isEdit, setEdit] = useState(true)
	const [value, setValue] = useState(cellValue || '')


	return (
		<td className='tableCell' onDoubleClick={()=>{setEdit(false)}}>
			<input className={!isEdit?'edit':null}  disabled={isEdit} onChange={e=>setValue(e.target.value)} value={value} onBlur={()=>{blur(id, name, value )}} type="text"/>
		</td>
	);
}

export default TableCell;
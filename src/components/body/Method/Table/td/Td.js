import React, {useState} from 'react';


function Td({id, cellValue, blur, name}) {

	const [isEdit, setEdit] = useState(false)
	const [value, setValue] = useState(cellValue || '')

	return (
		<td onDoubleClick={()=>{setEdit(true)}}>
			{isEdit?<input onChange={e=>setValue(e.target.value)} value={value} onBlur={()=>{blur(id, name, value )}} type="text"/>:value}
		</td>
	);
}

export default Td;
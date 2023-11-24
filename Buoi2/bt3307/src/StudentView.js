import React, { useState } from 'react';

function StudentView(props) {
	return (
		<>
			<tr>
                <td>{props.index}</td>
                <td>{props.data.Ten}</td>
                <td>{props.data.Tuoi}</td>
                <td>{props.data.DiaChi}</td>
                <td>{props.data.Email}</td>
			</tr>
		</>
	)
}

export default StudentView;
import React, { useState } from 'react';

function StudentView(props) {
	return (
		<>
			<tr>
				<td>{props.index}</td>
				<td>{props.data.fullname}</td>
				<td>{props.data.email}</td>
				<td>{props.data.phoneNumber}</td>
				<td>
					<button class="btn btn-warning">Edit</button>
					<button class="btn btn-danger">Remove</button>
				</td>
			</tr>
		</>
	)
}

export default StudentView;
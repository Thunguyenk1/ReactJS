import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import DataMgr from '../data/DataMgr';

function UserList() {
  const [userList, setUserList] = useState([])
  useEffect(() => {
  	return () => {
  		DataMgr.loadData()
  		setUserList([...DataMgr.userList])
  	};
  }, [])

  return (
    <div className="container">
		<div className="row">
			<div className="card" style={{"margin-top": "30px"}}>
				<div className="card-body">
					<h2 className="text-center">User List</h2>
					<table class="table table-bordered">
						<thead>
							<tr>
								<th>No</th>
								<th>Full Name</th>
								<th>Email</th>
								<th>Phone Number</th>
								<th>Address</th>
							</tr>
						</thead>
						<tbody>
							{userList.map((user, index) => (
								<tr>
									<td>{index+1}</td>
									<td>{user.fullname}</td>
									<td>{user.email}</td>
									<td>{user.phoneNumber}</td>
									<td>{user.address}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
  );
}

export default UserList;
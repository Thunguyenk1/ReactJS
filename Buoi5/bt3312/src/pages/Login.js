import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import DataMgr from '../data/DataMgr';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
  	return () => {
  		DataMgr.loadData()
  	};
  }, [])

  function doLogin(e) {
  	let isLogin = false
  	for(let user of DataMgr.userList) {
  		if(user.email == email && user.password == password) {
  			//Login success
  			isLogin = true
  			navigate('/user-list')
  		}
  	}
  	if(!isLogin) {
		//login fail
  		alert('Login failed')
  	}
  }

  return (
    <div className="container">
		<div className="row">
			<div className="col-md-3"></div>
			<div className="col-md-6">
				<div className="card" style={{"margin-top": "30px"}}>
					<div className="card-body">
						<h2 className="text-center">Login</h2>
						<div className="form-group">
							<label>Email: </label>
							<input type="text" name="email" className="form-control" placeHolder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
						</div>
						<div className="form-group">
							<label>Password: </label>
							<input type="password" name="pwd" className="form-control" placeHolder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
						</div>
						<div className="form-group">
							<button className="btn btn-success" onClick={doLogin}>Login</button>
							<p>
								<a href="register">Create a new account</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-3"></div>
		</div>
	</div>
  );
}

export default Login;
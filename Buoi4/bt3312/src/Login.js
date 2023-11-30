import React from "react"
import './App.css';

function Login() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          Login
        </div>
        <div className="card-body" >
          <div className="form-group">
            <label>Email: </label>
            <input type="text" name="fullname" placeholder="Enter email" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input type="password" name="pwd" placeholder="Enter password" className="form-control"/>
          </div>
          <div className="form-group" style={{marginTop: "10px"}}>
            <button className="btn btn-success" >Login</button>
            <p style={{marginTop: "10px"}}>
              <a href="/">Back home page</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
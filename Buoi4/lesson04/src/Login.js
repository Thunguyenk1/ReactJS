import React from "react";

function Login() {
  return (
    <>
        <div className="container">
            <div className="card">
                <div className="card-header">
                    Login
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" name="fullname" placeholder="Enter email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" name="pwd" placeholder="Enter password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success">Login</button>
                        <p>
                            <a href="/">Back welcome page</a>
                        </p>
                        <p>
                            <a href="/register">Register Page</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Login;

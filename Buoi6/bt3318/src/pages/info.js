import React from "react";
import '../App.css';

function Info() {
    return (
      <>
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h1>Form Đăng Ký</h1>
                </div>
                <div className="card-body">
                    <form method="post">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" className="form-control" id="fullname" placeholder="Enter full name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="number" className="form-control" id="phonenumber" placeholder="Enter phone number" />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Enter address" />
                        </div>
                        <div className="form-group">
                            <label>Note</label>
                            <textarea placeholder="Enter note" className="form-control" id=""></textarea>
                        </div>
                        <div className="form-group">
                            <label></label>
                            <a href="Info">
                                <button style={{marginRight: "10px", marginTop: "20px"}} type="submit" className="btn btn-success">Submit</button>
				            </a>
                            <button style={{marginRight: "10px", marginTop: "20px"}} type="reset" className="btn btn-warning">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Info;
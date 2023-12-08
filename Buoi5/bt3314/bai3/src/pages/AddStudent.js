import '../App.css';
import React, {useState, useEffect} from 'react';
import dataController from '../data/DataController';

function addStudent() {
  
  return (
    <div className="container">
        <div className="card">
            <div className='card-header'>
              AddStudent
            </div>
            <div className="card-body">
              <div className='from-group'>
                <label>Full Name: </label>
                <input type="text" className="form-control" id="fullname" placeholder="Enter Full name" />
              </div>
              <div className='from-group'>
                <label>Age: </label>
                <input type="number" className="form-control" id="age" placeholder="Enter Age" />
              </div>
              <div className='from-group'>
                <label>Address: </label>
                <input type="text" className="form-control" id="address" placeholder="Enter Address" />
              </div>
              <div className='from-group'>
                <label>Email: </label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" />
              </div>
              <div className='from-group'>
                <button type="submit" className="btn btn-success">Save</button> 
                <button type="reset" className="btn btn-danger">Reset</button>
              </div>
              <a className='backHome' href='/'>Back Home</a>
            </div>
        </div>
    </div>
  );
}

export default addStudent;
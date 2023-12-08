import '../App.css';
import React, {useState, useEffect} from 'react';
import dataController from '../data/DataController';

function listStudent() {
  return (
    <div className="container">
        <div className="card">
            <div className="card-header">
              <h2>Management Products</h2>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    </div>
  );
}

export default listStudent;
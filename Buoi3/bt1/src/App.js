import React, { useState, useEffect } from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

function App() {
  useEffect(() => {
    return() => {
      let stdList= []
      for (var i = 0; i < 20; i++) {
        stdList.push(
          {
            "fullname": "Tran Van" + i,
            "age": 20 + i,
            "address": "Ha Noi",
            "email" : "travan" + i + "@gmail.com"
          }
        )
      }

      setStudentList([...stdList])
      console.log('step1')
    }
  },[])
  

  const [studentList, setStudentList] = useState([])
  console.log('step2')

  function removeStudent(index) {

  }


  return (
    <>
      <div className='container'>
          <div className='card'>
            <div className='card-heading bg-info'>
                Student Management
            </div>
            <div className='card-body'>  
              <table className='table table-bordered'>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Full Name</th>
                      <th>Age</th>
                      <th>Address</th>
                      <th>Email</th>
                      <th style={{"width": "160px"}}></th>
                    </tr>
                  </thead>
                  <tbody>
                  {studentList.map((std, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{std.fullname}</td>
                          <td>{std.age}</td>
                          <td>{std.address}</td>
                          <td>{std.email}</td>
                          <td ></td>
                      </tr>
                    ))}
                    
                  </tbody>
              </table>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;

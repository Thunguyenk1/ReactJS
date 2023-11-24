import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './style.css'

import StudentView from './StudentView.js';

function App() {

  const [stdList, setStudentList] = useState([
	  {
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  }, {
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  }, {
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  },{
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  }, {
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  }, {
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  },{
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  }, {
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  }, {
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  },{
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  }, {
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  }, {
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  },{
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  }, {
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  }, {
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  },{
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  }, {
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  }, {
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  },{
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  }, {
	  	"Ten": "Nguyen Thi Xuan Thu",
	  	"Tuoi": "22",
      "DiaChi": "Ha Noi",
	  	"Email": "thunguyenhtay@gmail.com"
	  }
  ])

  return (
    <>
      <div className="form"><h4>Management Products</h4></div>
      <table>
          <thead>
              <tr>
                  <th>STT</th>
                  <th>Ten</th>
                  <th>Tuoi</th>
                  <th>Dia chi</th>
                  <th>Email</th>
              </tr>
          </thead>
          <tbody>
			  					<>
                    {stdList.map((std, index) => (
                      <StudentView data={std} index={index+1}/>
                    ))}
                  </>
          </tbody>
      </table>
    </>
  );
}

export default App;

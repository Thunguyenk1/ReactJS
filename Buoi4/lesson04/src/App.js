import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';

import {
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;

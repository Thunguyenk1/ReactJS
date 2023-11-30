import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import Home from './Home';

import {
    Routes,
    Route
}from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;

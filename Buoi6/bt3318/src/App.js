import './App.css';
import React from 'react';
import Home from './pages/home'
import Info from './pages/info'
import Register from './pages/register'

import {
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

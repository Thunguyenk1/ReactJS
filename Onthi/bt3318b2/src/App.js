import './App.css';
import React from 'react';
import Add from './pages/AddProduct';
import Delete from './pages/DeleteProduct';
import Edit from './pages/EditProduct';
import List from './pages/ListProduct';

import {
  Routes, Route
} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Add />} />
      <Route path='/DeleteProduct' element={<Delete />} />
      <Route path='/EditProduct' element={<Edit />} />
      <Route path='/ListProduct' element={<List />} />
    </Routes>
  );
}

export default App;

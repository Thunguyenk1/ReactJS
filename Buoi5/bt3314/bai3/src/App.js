import './App.css';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import DeleteStudent from './pages/DeleteStudent';
import EditStudent from './pages/EditStudent';
import ListStudent from './pages/ListStudent';

import {
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student" element={<EditStudent/>} />
        <Route path="/detele-student" element={<DeleteStudent/>} />
        <Route path="/list-student" element={<ListStudent/>} />
      </Routes>
    </>
  );
}

export default App;

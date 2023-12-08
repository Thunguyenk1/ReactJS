import './App.css';
import Home from './pages/home';
import Register from './pages/register';
import Info from './pages/info';
import {
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/register'element={<Register />} />
      <Route path='/info' element={<Info />} />
    </Routes>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import './style.css';

function Register() {
  const abc = {
    "color": "red",
    "font-size": "50px",
    "background-color": "yellow"
  }
  
  return (
    <div className="container">
      <div className="card">
        <div className="card-header txt01" style={{"color": "blue"}}>
          Register
        </div>
        <div className="card-body">
          <p>
            <a href="/" style={abc}>Home Page</a>
          </p>
          <p>
            <a href="/login">Login Page</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
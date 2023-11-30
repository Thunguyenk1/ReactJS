import logo from './logo.svg';
import './App.css';

function Welcome() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="login"
          rel="noopener noreferrer"
        >
          Login Page
        </a>
      </header>
    </div>
  );
}

export default Welcome;
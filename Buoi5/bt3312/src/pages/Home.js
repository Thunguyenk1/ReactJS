import logo from '../logo.svg';
import '../App.css';

function Home() {
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
        <a
          className="App-link"
          href="register"
          rel="noopener noreferrer"
        >
          Register Page
        </a>
        <a
          className="App-link"
          href="user-list"
          rel="noopener noreferrer"
        >
          User List Page
        </a>
      </header>
    </div>
  );
}

export default Home;
import logo from '../logo.svg';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="register"
          rel="noopener noreferrer"
        >
          Register page
        </a>
        <a
          className="App-link"
          href="info"
          rel="noopener noreferrer"
        >
          Info Page
        </a>
      </header>
    </div>
  );
}

export default Home;
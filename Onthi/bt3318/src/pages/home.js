import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <button className='btn btn-success' style={{marginBottom:'20px'}}>
            <a className="App-link" href='Register'>Register page</a>
        </button>
        <button className='btn btn-success'>
            <a className="App-link" href='Info'>Info page</a>
        </button>
      </header>
    </div>
  );
}

export default Home;

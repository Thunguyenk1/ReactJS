import './App.css';

function Home() {
  return (
    <>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">Gokisoft</a>
                </div>
                <button type="button" class="btn btn-success" style={{width: "100%", marginBottom: "10px"}}>
                    <a className="Login" href="login" rel="noopener noreferrer" style={{color:"white", textDecoration: "none"}}>
                        Login
                    </a>
                </button>
                <button type="button" class="btn btn-info" style={{width:"100%"}}>
                    <a className="Register" href="register" rel="noopener noreferrer" style={{color:"white", textDecoration: "none"}}>
                        Register
                    </a>
                </button>
            </div>
        </nav>
    </>
  );
}

export default Home;

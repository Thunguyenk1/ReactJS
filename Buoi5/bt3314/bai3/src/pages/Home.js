import '../App.css';

function Home() {
  return (
    <div className="App">
        <div className="App-header">
            <h2>Management Products</h2>
            <div className="card-body">
                <a href='add-student' className="btn btn-primary">Add Student</a>
                <a href='detele-student' className="btn btn-primary">delete Student</a>
                <a href='edit-student' className="btn btn-primary">edit Student</a>
                <a href='list-student' className="btn btn-primary">list Student</a>
            </div>
        </div>
    </div>
  );
}

export default Home;
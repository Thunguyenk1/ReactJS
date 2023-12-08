import logo from './logo.svg';
import './App.css';

function App() {
  const [a, seta] = useState("")
  const [b, setb] = useState("")
  const [c, setc] = useState("")
  const [title, setTitle] = useState("")

  function gptData(e) {
    if(a == "" || b == "" || c == "") {
      setTitle("YEU CAU NHAP LAI")
    } else {
      // alert('Thanh cong')
      setTitle("DANG NHAP THANH CONG")
    }
  }
  return (
    <div className="container">
      
      <div className='row'>
        <div className='w25'>
          <h1>Giai phuong trinh bac 2 </h1>
        </div>
        <div className='w75'>
          <form method='post'>
            <div className='form-group'>
              <label>Nhap a:</label>
              <input type='number' name='a' className='form-control' />
            </div>
            <div className='form-group'>
              <label>Nhap b:</label>
              <input type='number' name='b' className='form-control' />
            </div>
            <div className='form-group'>
              <label>Nhap c:</label>
              <input type='number' name='c' className='form-control' />
            </div>
            <div className='form-group'>
              <label></label>
              <button style={{margin: "20px"}} type='button' value={'gptb2'} onClick={gptData} className='btn btn-success'>Tinh gia tri</button>
              <button type='reset' className='btn btn-warning'>Nhap lai</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

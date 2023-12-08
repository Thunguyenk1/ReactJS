import '../App.css';
import React from 'react';
import DataMgr from '../data/DataMgr';
import {useNavigate} from 'react-router-dom'

function AddProduct() {
    const navigate = useNavigate();
    const [tieude, setTieude] = React.useState('');
    const [hinhanh, setHinhanh] = React.useState('');
    const [gia, setGia] = React.useState('');
    // console.log(tieude, hinhanh, gia);
    function saveData() {
        DataMgr.saveProduct({
            "tieude": tieude,
            "hinhanh": hinhanh,
            "gia": gia
        })
        navigate('/ListProduct')
    }
  return (
    <>
        <div className="container">
        <div className='card'>
            <div className='card-header'>
                <h2>Nhập thông tin sản phẩm</h2>
            </div>
            <div className='card-body'>
                <form>
                    <div className="form-group">
                        <label>Tiêu đề: </label>
                        <input type="text" className="form-control" placeholder="Nhập tiêu đề" value={tieude} onChange={(e) => setTieude(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Hình ảnh: </label>
                        <input type="file" accept='image/*' className="form-control" value={hinhanh} onChange={(e) => setHinhanh(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Giá: </label>
                        <input type="number" className="form-control" placeholder="Nhập giá" value={gia} onChange={(e) => setGia(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label></label>
                        <button className='btn btn-success' onClick={saveData}>Lưu</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
    
  );
}

export default AddProduct;
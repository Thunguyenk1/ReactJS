import '../App.css';
import React, {useState, useEffect } from 'react';
import DataMgr from '../data/DataMgr';

function ListProduct() {
    const [product, setproduct] = useState({"tieude": "", "hinhanh": "", "gia": ""});

    useEffect(() => {
        return () => {
            DataMgr.loadData()
            setproduct(DataMgr.product)
        };
    }, []);
  return (
    <>
        <div className="container">
        <div className='card'>
            <div className='card-header'>
                <h2>Danh sách thông tin sản phẩm</h2>
            </div>
            <div className='card-body'>
                <table className='table table-bordered table-striped'>
                    <tr>
                        <th>Tiêu đề: </th>
                        <td>{product.tieude}</td>
                    </tr>
                    <tr>
                        <th>Hình ảnh: </th>
                        <td>{product.hinhanh}</td>
                    </tr>
                    <tr>
                        <th>Giá: </th>
                        <td>{product.gia}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    </>
    
  );
}

export default ListProduct;
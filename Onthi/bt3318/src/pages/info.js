import '../App.css';
import React, {useState, useEffect} from 'react';
import dataMgr from '../data/dataMgr';
function Info() {
    const [user, setUser] = useState({"fullname": "", "email": "", "phonename": "", "address": "", "note": ""})
    useEffect(() => {
        return() =>{
            dataMgr.loadData();
            setUser(dataMgr.user);
        } 
    }, [])
  return (
    <div className='container'>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Fullname</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Note</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>{user.fullname}</td>
                        <td>{user.email}</td>
                        <td>{user.phonenumber}</td>
                        <td>{user.address}</td>
                        <td>{user.note}</td>
                        <td>
                            <button className='btn btn-primary' onClick={() => dataMgr.deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
            </tbody>
        </table>
        <p>
            <button className='btn btn-warning'>
                <a href='register'>Quay lai</a>
            </button>
        </p>
    </div>
  );
}

export default Info;

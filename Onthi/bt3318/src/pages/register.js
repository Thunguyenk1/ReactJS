import '../App.css';
import React, {useState, useEffect} from 'react';
import DataMgr from '../data/dataMgr';
import {useNavigate} from "react-router-dom"

function Register() {
    const navigate = useNavigate();

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');

    function saveData() {
        DataMgr.saveUser({
            "fullname": fullname,
            "email": email,
            "phoneNumber": phoneNumber,
            "address": address,
            "note": note
        })
        navigate('/info')
    };

  return (
    <div className='container'>
        <div className='card'>
            <div className='card-header'>
                <h1>Register</h1>
            </div>
            <div className='card-body'>
                <form target='post'>     
                    <div className='form-group'>
                        <label>Fullname</label>
                        <input type='text' className='form-control' placeholder='Enter Fullname' value={fullname} onChange={(e) => setFullname(e.target.value) }/>
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type='text' className='form-control' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Phone Number</label>
                        <input type='number' className='form-control' placeholder='Enter Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Address</label>
                        <input type='text' className='form-control' placeholder='Enter Address' value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Note</label>
                        <textarea className='form-control' placeholder='Enter Comment' value={note} onChange={(e) => setNote(e.target.value)}/>
                    </div>
                    <button type='submit' className='btn btn-primary' onClick={saveData}>Submit</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Register;

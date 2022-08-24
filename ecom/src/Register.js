import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';


function Register() {
    const history = useNavigate();
    
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history('/add');
        }
    },[])
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signUp() {
        let data = { name, email, password };
        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        });
        result = await result.json();
        console.warn("result", result);
        localStorage.setItem("user-info", JSON.stringify(result));
        history('/add');


    }
    return (
        <>
            <Header />
        <div className='col-sm-6 offset-sm-3 bg-light p-3 mt-4'>
            <h1 className='text-center'>User Sign Up</h1>
            <div className="form-group">
                <label>Enter Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="User Name" />
            </div>
            <br />
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            </div>
            <br />
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <br />

            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" >Check me out</label>
            </div>
            <br />

            <button onClick={signUp} className="btn btn-primary">Submit</button>

        </div>
        
        </>
    )
}
export default Register;
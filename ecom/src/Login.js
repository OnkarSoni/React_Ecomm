import Header from './Header';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    const history = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history('/add');
        }
    }, [])
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signIn() {
        let data = { email, password };

        let result = await fetch("http://localhost:8000/api/login", {
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
        <div>
            <Header />
            <div className='col-sm-6 offset-sm-3 bg-light p-3 mt-4'>
                <h1 className='text-center'>User Sign In</h1>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email" />
                </div>
                <br />
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                </div>
                <br />

                <button onClick={signIn} className="btn btn-primary">Submit</button>

            </div>

        </div>
    )
}
export default Login;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Signup() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });
        const json = await response.json()
        console.log(json)
        if (!json.success) {
            alert("Enter Valid Credentials ")
        }
    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="shadow p-5 rounded" style={{ backgroundColor: '#ffffff', width: '100%', maxWidth: '450px' }}>
                    <h2 className="text-center mb-4 text-success">Create an Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label text-success">Name</label>
                            <input
                                type="text"
                                className="form-control border-success"
                                id="name"
                                placeholder="Enter your full name"
                                name='name' value={credentials.name} onChange={onChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-success">Email address</label>
                            <input
                                type="email"
                                className="form-control border-success"
                                id="email"
                                placeholder="you@example.com"
                                name='email' value={credentials.email} onChange={onChange}
                                required
                            />
                            <div id="emailHelp" className="form-text text-muted">We'll never share your email.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-success">Password</label>
                            <input
                                type="password"
                                className="form-control border-success"
                                id="password"
                                placeholder="••••••••"
                                name='password' value={credentials.password} onChange={onChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-success">Address</label>
                            <input
                                type="text"
                                className="form-control border-success"
                                //id="password"
                                placeholder=""
                                name='geolocation' value={credentials.geolocation} onChange={onChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-success w-100 fw-bold">
                            Sign Up
                        </button>
                        <Link to="/login" className="btn btn-outline-success w-100 fw-bold">
                            Already a User? Log In
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}

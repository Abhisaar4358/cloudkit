import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  let navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json)
    if (!json.success) {
      alert("Enter Valid Credentials ")
    }
    if (json.success) {
      navigate("/")
    }
  }
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="shadow p-5 rounded" style={{ backgroundColor: '#ffffff', width: '100%', maxWidth: '450px' }}>
          <h2 className="text-center mb-4 text-success">Log In</h2>
          <form onSubmit={handleSubmit}>
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

            <button type="submit" className="btn btn-success w-100 fw-bold mb-2">
              Log In
            </button>

            <Link to="/createuser" className="btn btn-outline-success w-100 fw-bold">
              New user? Create an Account
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

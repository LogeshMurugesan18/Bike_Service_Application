import React, { useState } from 'react';
import axios from 'axios';``
import './Login.css';
import { Link } from 'react-router-dom';

const Login = ({ setLoggedInUser }) => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3003/login", { email, mobile });
      setLoggedInUser(response.data);
      console.log("Login successful:", response.data);
    } catch (error) {
      if (error.response) {
        console.error("Login error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
    
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Mobile Number' required />
        <Link to='/services'><button type="submit">Login</button></Link>
      </form>
      <div>
        <p>Don't have an account?</p>
        <Link to="/signup">
          <a>Sign Up</a>
        </Link>
      </div>
    </div>
    
  );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

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
      console.error("Login error:", error.response.data);
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Mobile Number' required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

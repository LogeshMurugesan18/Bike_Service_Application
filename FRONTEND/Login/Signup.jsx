import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [vehiclenum, setVehiclenum] = useState("");
  const [vehiclemodel, setVehiclemodel] = useState("");
  const [customername, setCustomername] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      vehiclenum,
      vehiclemodel,
      customername,
      mobile,
      email,
      status,
    };

    try {
      const response = await axios.post("http://localhost:3003/signup", userData);
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup error:", error.response.data);
    }

    // Reset fields
    setVehiclenum("");
    setVehiclemodel("");
    setCustomername("");
    setMobile("");
    setEmail("");
    setStatus("");
  };

  return (
    <div className="auth-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={vehiclenum} onChange={(e) => setVehiclenum(e.target.value)} placeholder='Vehicle Number' required />
        <input type="text" value={vehiclemodel} onChange={(e) => setVehiclemodel(e.target.value)} placeholder='Vehicle Model' required />
        <input type="text" value={customername} onChange={(e) => setCustomername(e.target.value)} placeholder='Customer Name' required />
        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Mobile Number' required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder='Status' required />
        <Link to='/login'><button type="submit" >Sign Up</button></Link>
      </form>
    </div>
  );
};

export default SignUp;

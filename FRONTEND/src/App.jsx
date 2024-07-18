import {useEffect, useState } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './Admin/Dashboard';
import LandingPage from './Client/LandingPage';
import NavBar from './Client/NavBar';
import Footer from './Client/Footer';
import AboutUs from './Client/AboutUs';
import AddService from './Admin/Add';
import ServicePage from './Client/Home';
import Login from '../Login/Login';
import SignUp from '../Login/Signup';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [customers,setCustomers]= useState(null);
 useEffect(()=>{
   const fetchData=async()=>{
     try{
       const response = await axios.get("http://localhost:3003/data");
       setCustomers(response.data);
     }
     catch(error){
       console.log(error);
     }
   };
   fetchData();
 },[]);
 console.log({customers});
 

  return (
    <>
    {/* <Dashboard users={customers} setUsers={setCustomers}/>  */}
    {/* <NavBar/> */}
    {/* <Footer/> */}
    {/* <LandingPage/> */}
    {/* <AboutUs/> */}
    {/* <AddService/> */}
    <ServicePage/>
    {/* <Login setLoggedInUser={setLoggedInUser} /> */}
    {/* <SignUp/> */}
      {/* <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* <Route path="/services" element={<ServicePage />} />
        <Route path="/add-service" element={<AddService />} />
        <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard users={customers} setUsers={setCustomers} />} /> */}
      {/* </Routes>
      <Footer />
    </Router> */} 
    </>
  )
}

export default App

import {useEffect, useState } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
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
    <Router>
    <NavBar/>
      <Routes>
    <Route path="/" exact Component={LandingPage} />
    <Route path='Aboutus' Component={AboutUs}/>
    <Route path="/admin" element={<Dashboard users={customers} setUsers={setCustomers} />} />
    <Route path='addservice'Component={AddService}/>
    <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
    <Route path="/services" element={<ServicePage loggedInUser={loggedInUser} customerdetails={customers} />} />
    <Route path='signup'Component={SignUp}/>
    </Routes>
    <Footer/>
    
    </Router>
  )
}

export default App

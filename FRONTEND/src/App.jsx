import {useEffect, useState } from 'react'
import axios from 'axios';
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
    {/* <Dashboard users={customers} setUsers={setCustomers}/> */}
    {/* <NavBar/>
    <Footer/>
    <LandingPage/> */}
    {/* <AboutUs/> */}
    {/* <AddService/> */}
    <ServicePage/>
    {/* <Login/> */}
    {/* <SignUp/> */}
    </>
  )
}

export default App

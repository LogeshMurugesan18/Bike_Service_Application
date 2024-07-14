import {useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import Dashboard from './Admin/Dashboard';
import LandingPage from './Client/LandingPage';
import NavBar from './Client/NavBar';

function App() {
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
    {/* <LandingPage/> */}
    <NavBar/>
    </>
  )
}

export default App

import React from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
  return (      
      <nav className="navbar">
  <div className="navbar-left">
  <a href="/" className="name">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/009/385/066/non_2x/engine-piston-clipart-design-illustration-free-png.png" 
            alt="Piston Doc Logo" 
            className="logo" 
          />
          PISTON DOC
        </a>
  </div>
  <div className="navbar-right">
    <ul className="nav-links">
    <li>
          <Link to="/Aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
    </ul>
  </div>
  
</nav>
  )
}
export default NavBar


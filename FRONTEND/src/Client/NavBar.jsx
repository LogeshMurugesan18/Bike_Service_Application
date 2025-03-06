import React from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
  return (      
      <nav className="navbar">
  <div className="navbar-left">
  <a href="/" className="name">
          <img 
            src="https://w7.pngwing.com/pngs/536/580/png-transparent-pistons-thumbnail.png" 
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


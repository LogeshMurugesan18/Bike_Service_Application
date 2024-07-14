import React from 'react'

function NavBar() {
  return (      
      <nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="name">
      PISTON DOC
    </a>
  </div>
  <div className="navbar-right">
    <ul className="nav-links">
      <li>
        <a href="/about">About Us</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="/Login">Login</a>
      </li>
    </ul>
  </div>
  
</nav>
  )
}
export default NavBar


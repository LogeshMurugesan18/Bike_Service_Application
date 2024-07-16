import React from 'react'

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


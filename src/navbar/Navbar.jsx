import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
  
  <nav className="navbar navsec ">
  <div className="container">
    <Link className="navbar-brand" to="/">
Start Framework
    </Link>
    <ul className='d-flex gap-5'>
        <li><Link to="about">About</Link></li>
        <li><Link to="portfolio">portfolio</Link></li>
        <li><Link to="contact">contact</Link></li>

    </ul>
  </div>
</nav>
  

  )
}

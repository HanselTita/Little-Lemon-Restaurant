import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.svg'
import './Nav.css'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      
      <div className='logo'>
      <img src={Logo} alt="Little Lemon Logo" />
      </div>
<div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
  ☰
</div>
      <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/reservations">Reservations</NavLink></li>
        <li><NavLink to="/order">Order Online</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
      </nav>
  )
}

export default Nav
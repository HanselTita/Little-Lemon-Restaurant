import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.svg'
import './Nav.css'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar' aria-label="Main Navigation" role="navigation">
      
      <div className='logo'>
      <img src={Logo} alt="Little Lemon Logo" />
      </div>
<div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
  ☰
</div>
      <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
        <li><NavLink to="/"   aria-label="Go to Home">Home</NavLink></li>
        <li><NavLink to="/about" aria-label="Learn more about the restaurant">About</NavLink></li>
        <li><NavLink to="/menu" aria-label="View the restaurant menu">Menu</NavLink></li>
        <li><NavLink to="/reservations" aria-label="Make a reservation">Reservations</NavLink></li>
        <li><NavLink to="/order" aria-label="Order food online">Order Online</NavLink></li>
        <li><NavLink to="/login" aria-label="Log in to your account">Login</NavLink></li>
      </ul>
      </nav>
  )
}

export default Nav
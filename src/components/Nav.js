import React, {useState} from 'react'
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
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      </nav>
  )
}

export default Nav
import React from 'react'
import Logo from '../assets/Logo.svg'

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Little Lemon Logo" />

      <div classname='footer-column'>
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>

      <div classname='footer-column'>
        <h3>Contact</h3>
        <ul>
          <li><a href="tel:+1234567890">Phone: +1 (234) 567-890</a></li>
          <li><a href="mailto:info@littlelemon.com">Email: info@littlelemon.com</a></li>
        </ul>
      </div>  

      <div classname='footer-column'>
        <h3>Social Media Links</h3>
        <ul>
          <li><a href="https://facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://Instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>


    </footer>
  )
}

export default Footer
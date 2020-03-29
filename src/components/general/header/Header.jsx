import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  const [ open, setOpen ] = useState(false)

  return (
    <div>
    <header className="container-fluid py-2 header__container px-lg-4">
      <Link to="/" className={`header__link ${open ? 'open' : ''} `}>
        <h3>Ricardo Meneses</h3>
      </Link>
      <div className={`header__btn-hamburguer ${open ? 'open' : 'btn-close'}`} onClick={() => setOpen(!open)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
    <div className={`header__overlay ${open ? 'open' : ''}`}>
        <nav className="header__overlay-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      </div>
  )
}

export default Header
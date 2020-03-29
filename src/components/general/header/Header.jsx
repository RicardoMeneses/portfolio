import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = ({home}) => {
  const [ open, setOpen ] = useState(false)

  return (
    <div>
    <header className="container-fluid py-2 header__container px-lg-4" style={{background: home ? 'transparent' : '#3A9EF3'}}>
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
            <li><Link to="/" onClick={() => setOpen(!open)}>Inicio</Link></li>
            <li><Link to="/sobre-mi" onClick={() => setOpen(!open)}>Sobre Mí</Link></li>
            <li><Link to="/curriculum" onClick={() => setOpen(!open)}>Curriculum</Link></li>
            <li><Link to="/proyectos" onClick={() => setOpen(!open)}>Proyectos</Link></li>
          </ul>
        </nav>
      </div>
      </div>
  )
}

export default Header
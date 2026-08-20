import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'
import logo from '../assets/logo.webp'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navbarRef = useRef(null)

  const playMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => {
    setIsMenuOpen(false)
    // También sube al top al clickear el link de la página actual
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <nav className="navbar" ref={navbarRef}>

      <div className="nav-left">
        <NavLink to="/" onClick={closeMenu}>
          <img
            className="nav-logo"
            src={logo}
            width="257"
            height="64"
            alt="Estudio Jurídico Blanco – Colombo & Asociados"
            fetchPriority="high"
            decoding="async"
          />
        </NavLink>
        <button
          className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}
          onClick={playMenu}
          type="button"
          aria-label="Abrir o cerrar menu"
          aria-expanded={isMenuOpen}
        >
          <span className="nav-menu-line" />
          <span className="nav-menu-line" />
          <span className="nav-menu-line" />
        </button>
      </div>

      <div className={`nav-center ${isMenuOpen ? 'nav-center-active' : ''}`}>
        <ul className="nav-links">
          <li><NavLink to="/"               end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/nuestra-vision"     onClick={closeMenu}>Nuestra Visión</NavLink></li>
          <li><NavLink to="/area-practica"      onClick={closeMenu}>Áreas de Práctica</NavLink></li>
          <li><NavLink to="/contacto"           onClick={closeMenu}>Contacto</NavLink></li>
        </ul>
      </div>

      <div className="nav-right">
        <a
          href="https://wa.me/5491155786768"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-whatsapp"
        >
          WHATSAPP
        </a>
      </div>

    </nav>
  )
}

export default Navbar

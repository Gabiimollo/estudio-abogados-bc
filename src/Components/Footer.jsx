import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div className="footer-col footer-col-brand">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-tagline">
            Asesoramiento jurídico integral en CABA y Provincia de Buenos Aires.
            Laboral, Previsional, Civil, Comercial y Penal.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Navegación</h4>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/nuestra-vision">Nuestra Visión</Link>
            <Link to="/area-practica">Áreas de Práctica</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Áreas</h4>
          <nav className="footer-nav">
            <Link to="/area-practica">Laboral</Link>
            <Link to="/area-practica">Previsional</Link>
            <Link to="/area-practica">Civil</Link>
            <Link to="/area-practica">Comercial</Link>
            <Link to="/area-practica">Penal</Link>
          </nav>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Contacto</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-row">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A040" strokeWidth="1.5" style={{flexShrink:0,marginTop:'2px'}}>
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>D. F. Sarmiento 1715, Piso 1 — San Miguel</span>
            </div>
            <div className="footer-contact-row">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A040" strokeWidth="1.5" style={{flexShrink:0,marginTop:'2px'}}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>123@gmail.com</span>
            </div>
            <div className="footer-contact-row">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A040" strokeWidth="1.5" style={{flexShrink:0,marginTop:'2px'}}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>+54 9 11 5578-6768</span>
            </div>
            <div className="footer-contact-row">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A040" strokeWidth="1.5" style={{flexShrink:0,marginTop:'2px'}}>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Lun–Vie 9:00–18:00</span>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 Estudio Jurídico Blanco – Colombo &amp; Asociados. Todos los derechos reservados.</span>
        <div className="footer-legal">
          <Link to="/politica-de-privacidad">Política de privacidad</Link>
          <Link to="/terminos">Términos de uso</Link>
          <Link to="/aviso-legal">Aviso legal</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/contacto.css'
import { IconoWhatsapp, IconoMail, IconoUbicacion, IconoReloj } from './Home'

const WEBHOOK_URL = 'https://vps-6191144-x.dattaweb.com/webhook/081c4f9b-16d5-4856-84dc-f10603800f9c'

const FORM_INICIAL = {
  nombre: '',
  apellido: '',
  email: '',
  telefono: '',
  tipoConsulta: '',
  mensaje: '',
  consentimiento: false,
}

function Contacto() {
  const [form, setForm] = useState(FORM_INICIAL)
  const [estado, setEstado] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEstado('enviando')
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, fecha: new Date().toISOString() }),
      })
      if (res.ok) {
        setEstado('ok')
        setForm(FORM_INICIAL)
      } else {
        setEstado('error')
      }
    } catch {
      setEstado('error')
    }
  }

  return (
    <section className="contacto">

      <div className="contacto-content">

        <div className="contacto-left">
          <div className="contacto-brand">
            <div className="contacto-titlewrap">
              <div className="contacto-eyebrow">
                <span className="contacto-eyebrow-line" />
                <span className="contacto-eyebrow-text">Atención de urgencias 24 hs</span>
              </div>
              <h1>Contactanos</h1>
            </div>
            <p className="contacto-intro">
              Estamos para ayudarlo. Escríbanos y le responderemos a la brevedad.
            </p>
          </div>

          <ul className="contacto-info">
            <li>
              <span className="contacto-info-icon"><IconoWhatsapp size={19} /></span>
              <span className="contacto-info-body">
                <span className="contacto-info-label">WhatsApp</span>
                <a href="https://wa.me/5491155786768" target="_blank" rel="noopener noreferrer">
                  +54 9 11 5578-6768
                </a>
              </span>
            </li>
            <li>
              <span className="contacto-info-icon"><IconoReloj size={20} /></span>
              <span className="contacto-info-body">
                <span className="contacto-info-label">Horarios</span>
                <span className="contacto-info-text">Lun a Vie · 09:00 – 18:00 hs</span>
                <span className="contacto-info-text">Atención presencial y virtual</span>
              </span>
            </li>
          </ul>

          <div className="contacto-direccion-mapa">
            <div className="contacto-info-linea">
              <span className="contacto-info-icon"><IconoUbicacion size={20} /></span>
              <span className="contacto-info-body">
                <span className="contacto-info-label">Nuestra dirección</span>
                <a
                  href="https://maps.google.com/?q=Domingo+Faustino+Sarmiento+1715,+San+Miguel,+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Domingo Faustino Sarmiento 1715, Piso 1 — San Miguel
                </a>
              </span>
            </div>
            <div className="contacto-mapa">
              <iframe
                title="Ubicación del estudio"
                src="https://www.google.com/maps?q=Domingo%20Faustino%20Sarmiento%201715,%20San%20Miguel,%20Buenos%20Aires&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="contacto-right">
          <p className="contacto-form-title">Formulario de Consulta</p>

          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="contacto-form-row">
              <div className="contacto-field">
                <label>Nombre *</label>
                <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" required />
              </div>
              <div className="contacto-field">
                <label>Apellido *</label>
                <input type="text" name="apellido" value={form.apellido} onChange={handleChange} placeholder="Tu apellido" required />
              </div>
            </div>

            <div className="contacto-field">
              <label>Email *</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" required />
            </div>

            <div className="contacto-form-row">
              <div className="contacto-field">
                <label>Teléfono</label>
                <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} placeholder="+54 9 11..." />
              </div>
              <div className="contacto-field">
                <label>Tipo de consulta *</label>
                <select name="tipoConsulta" value={form.tipoConsulta} onChange={handleChange} required>
                  <option value="" disabled>Seleccioná una opción</option>
                  <option value="Consulta general">Consulta general</option>
                  <option value="Asesoría gratuita">Asesoría gratuita</option>
                  <option value="Asesoría paga">Asesoría paga</option>
                </select>
              </div>
            </div>

            <div className="contacto-field">
              <label>Mensaje *</label>
              <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Describí brevemente tu consulta..." required />
            </div>

            <label className="contacto-consent">
              <input
                type="checkbox"
                name="consentimiento"
                checked={form.consentimiento}
                onChange={handleChange}
                required
              />
              <span>
                Acepto la{' '}
                <Link to="/politica-de-privacidad" target="_blank">política de privacidad</Link>{' '}
                y el tratamiento de mis datos para responder mi consulta.
              </span>
            </label>

            {estado === 'ok' && (
              <p className="contacto-feedback contacto-feedback--ok">¡Mensaje enviado! Nos pondremos en contacto pronto.</p>
            )}
            {estado === 'error' && (
              <p className="contacto-feedback contacto-feedback--error">Hubo un error al enviar. Intentá de nuevo.</p>
            )}

            <button type="submit" className="contacto-submit" disabled={estado === 'enviando'}>
              <IconoMail size={17} />
              {estado === 'enviando' ? 'Enviando...' : 'Enviar consulta'}
            </button>

            <div className="contacto-divisor">
              <span />
              <p>o</p>
              <span />
            </div>

            <a
              href="https://wa.me/5491155786768"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-whatsapp"
            >
              <IconoWhatsapp size={17} />
              Contactanos ahora
            </a>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contacto

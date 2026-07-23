import React, { useState } from 'react'
import '../styles/contacto.css'
import logo from '../assets/logo.png'

const WEBHOOK_URL = 'http://localhost:5678/webhook/recibirFormularioContacto'

function Contacto() {
  const [form, setForm] = useState({ nombre: '', apellido: '', email: '', telefono: '', mensaje: '' })
  const [estado, setEstado] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEstado('enviando')
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setEstado('ok')
        setForm({ nombre: '', apellido: '', email: '', telefono: '', mensaje: '' })
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
            <h1>Contactanos</h1>
            <img src={logo} alt="Logo" className="contacto-logo" />
          </div>

          <div className="contacto-info">
            <p className="contacto-info-label">Nuestra Dirección</p>
            <p>Domingo Faustino Sarmiento 1715, Piso 1 — San Miguel</p>
            <p>WhatsApp: +54 9 11 5578-6768</p>
            <p>Atención presencial y virtual</p>
            <p className="contacto-horario">Lun–Vie 09:00 – 18:00 hs</p>
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

            <div className="contacto-field">
              <label>Teléfono</label>
              <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} placeholder="+54 9 11..." />
            </div>

            <div className="contacto-field">
              <label>Mensaje *</label>
              <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Describí brevemente tu consulta..." required />
            </div>

            {estado === 'ok' && (
              <p className="contacto-feedback contacto-feedback--ok">¡Mensaje enviado! Nos pondremos en contacto pronto.</p>
            )}
            {estado === 'error' && (
              <p className="contacto-feedback contacto-feedback--error">Hubo un error al enviar. Intentá de nuevo.</p>
            )}

            <button type="submit" className="contacto-submit" disabled={estado === 'enviando'}>
              {estado === 'enviando' ? 'Enviando...' : 'Enviar consulta'}
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contacto

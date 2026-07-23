import React from 'react'
import '../styles/home.css'
import bg from '../assets/home.webp'
import profile1 from '../assets/profile_1.webp'
import profile2 from '../assets/profile-2.webp'
import profile3 from '../assets/profile-3.webp'

function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-left">
          <div className="home-hero-eyebrow">
            <span className="home-hero-eyebrow-line" />
            <span className="home-hero-eyebrow-text">ESTUDIO DE ABOGADOS — BUENOS AIRES</span>
          </div>
          <h1 className="home-hero-title">
            ESTUDIO DE
            <strong>ABOGADOS</strong>
          </h1>
          <p className="home-hero-sub">
            Asesoramiento Jurídico Integral.<br />
            Especialistas en Derecho Penal.
          </p>
          <div className="home-hero-btns">
            <button className="home-hero-btn" type="button">CONSULTAR AHORA</button>
            <button className="home-hero-btn" type="button">NUESTRAS ÁREAS</button>
          </div>
        </div>
        <div className="home-hero-right">
          <img src={bg} alt="Estudio de abogados" className="home-hero-img" fetchPriority="high" decoding="async" width="1045" height="583" />
        </div>
      </section>

      <section className="home-stats">
        <div className="home-stats-cell">
          <span className="home-stats-number">+20</span>
          <span className="home-stats-label">Años de experiencia</span>
        </div>
        <div className="home-stats-cell">
          <span className="home-stats-number">+800</span>
          <span className="home-stats-label">Casos resueltos</span>
        </div>
        <div className="home-stats-cell">
          <span className="home-stats-number">5</span>
          <span className="home-stats-label">Áreas de práctica</span>
        </div>
      </section>

      <section className="home-team">
        <div className="home-section-header">
          <span className="home-header-line" />
          <h2>Nuestro Equipo</h2>
          <span className="home-header-line" />
        </div>

        <div className="home-team-grid">
          {[
            { nombre: 'Estela del Pilar Blanco', cargo: 'Socia Fundadora', especialidad: 'Derecho Penal y Derecho de Familia', foto: profile1 },
            { nombre: 'Mónica S. Colombo',       cargo: 'Socia Fundadora', especialidad: 'Derecho Civil y Derecho Laboral',   foto: profile2 },
            { nombre: 'Nombre Asociado',          cargo: 'Asociado',        especialidad: 'Derecho Contractual y Comercial',  foto: profile3 },
          ].map((p, i) => (
            <div className="team-card" key={i}>
              <div className="team-card-photo">
                <img src={p.foto} alt={p.nombre} className="team-card-img" loading="lazy" decoding="async" />
              </div>
              <div className="team-card-info">
                <p className="team-card-name">{p.nombre}</p>
                <p className="team-card-cargo">{p.cargo}</p>
                <div className="team-card-sep" />
                <p className="team-card-esp">{p.especialidad}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-areas-preview">
        <div className="home-section-header">
          <span className="home-header-line" />
          <h2>Áreas de Práctica</h2>
          <span className="home-header-line" />
        </div>

        <div className="home-areas-grid">
          {[
            { nombre: 'PENAL',     desc: 'Defensa federal y ordinaria' },
            { nombre: 'CIVIL',     desc: 'Daños, accidentes, sucesiones' },
            { nombre: 'FAMILIA',   desc: 'Divorcio, alimentos, violencia' },
            { nombre: 'CONTRATOS', desc: 'Redacción y ejecución' },
            { nombre: 'LABORAL',   desc: 'Despidos y accidentes' },
          ].map((a, i) => (
            <div className="home-area-cell" key={i}>
              <p className="home-area-nombre">{a.nombre}</p>
              <p className="home-area-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="home-cta">
        <p>¿Necesita asesoramiento? Consulte sin cargo inicial.</p>
        <button type="button">Contactar</button>
      </div>
    </>
  )
}

export default Home

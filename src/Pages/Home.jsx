import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import bg from '../assets/home.webp'
import profile1 from '../assets/profile_1.webp'
import silvanaCard from '../assets/silvana-card.webp'
import germanCard from '../assets/german-card.webp'

const WHATSAPP_URL = 'https://wa.me/5491155786768'

function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-left">
          <div className="home-hero-eyebrow">
            <span className="home-hero-eyebrow-line" />
            <span className="home-hero-eyebrow-text">ASESORAMIENTO JURÍDICO</span>
          </div>
          <h1 className="home-hero-title">
            <strong>ESTUDIO JURÍDICO</strong>
            <span className="home-hero-title-desde">DESDE 1977</span>
          </h1>
          <p className="home-hero-sub">
            Brindamos soluciones legales claras, estratégicas y personalizadas.
            Nuestro compromiso es acompañarlo con seriedad, transparencia y
            cercanía en cada etapa de su caso.
          </p>
          <div className="home-hero-location">
            <span className="home-hero-eyebrow-line" />
            <span className="home-hero-location-text">CAPITAL FEDERAL Y PROVINCIA DE BUENOS AIRES</span>
          </div>
          <div className="home-hero-btns">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="home-hero-btn"
            >
              CONTACTANOS AHORA
            </a>
            <Link to="/contacto" className="home-hero-btn">
              ENVIÁ TU CONSULTA
            </Link>
          </div>
        </div>
        <div className="home-hero-right">
          <img src={bg} alt="Estudio jurídico Blanco Colombo & Asociados" className="home-hero-img" fetchPriority="high" decoding="async" width="1045" height="583" />
        </div>
      </section>

      <section className="home-stats">
        <div className="home-stats-cell">
          <span className="home-stats-number">+48</span>
          <span className="home-stats-label">Años de trayectoria</span>
        </div>
        <div className="home-stats-cell">
          <span className="home-stats-number">5</span>
          <span className="home-stats-label">Áreas de práctica</span>
        </div>
        <div className="home-stats-cell">
          <span className="home-stats-number">24 hs</span>
          <span className="home-stats-label">Atención de urgencias</span>
        </div>
      </section>

      <section className="home-about">
        <div className="home-section-header">
          <span className="home-header-line" />
          <h2>Quiénes Somos</h2>
          <span className="home-header-line" />
        </div>

        <div className="home-about-body">
          <p>
            Somos un estudio jurídico con actuación en la Ciudad Autónoma de Buenos Aires
            y en el Gran Buenos Aires, con presencia en San Miguel, San Martín, San Isidro,
            Morón y Pilar, entre otros departamentos judiciales.
          </p>
          <p>
            Nuestro enfoque combina rigor técnico, estrategia procesal y acompañamiento
            constante, brindando a cada cliente soluciones específicas y personalizadas.
            Creemos en el derecho como herramienta de solución y en la importancia de una
            comunicación clara y honesta desde el primer contacto.
          </p>
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
            {
              nombre: 'Dra. Estela del Pilar Blanco',
              cargo: 'Socia Fundadora',
              especialidad: 'Derecho Laboral, Previsional y Civil',
              desc: 'Abogada y Escribana (UBA). Más de cuatro décadas de ejercicio profesional. Dirige el estudio desde 1977.',
              foto: profile1,
            },
            {
              nombre: 'Dra. Mónica Silvana Colombo',
              cargo: 'Socia',
              especialidad: 'Derecho Laboral y Civil',
              desc: 'Abogada (UBA), con formación en Derecho Español y especialización en Asesoría Jurídica de Empresas. En el estudio desde 2005.',
              foto: silvanaCard,
            },
            {
              nombre: 'Dr. Germán Wettstein',
              cargo: 'Asociado',
              especialidad: 'Derecho Penal',
              desc: 'Abogado (UBA), Máster en Abogacía (Univ. Autónoma de Barcelona). Matriculado en Argentina y Europa. En el estudio desde 2019.',
              foto: germanCard,
            },
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
                <p className="team-card-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-why">
        <div className="home-section-header">
          <span className="home-header-line" />
          <h2>¿Por Qué Elegirnos?</h2>
          <span className="home-header-line" />
        </div>

        <div className="home-why-grid">
          {[
            'Atención profesional y personalizada',
            'Comunicación clara y directa',
            'Compromiso y seguimiento constante de cada caso',
            'Estrategias jurídicas prácticas y resolutivas',
            'Amplia trayectoria y experiencia profesional',
            'Atención presencial y virtual',
          ].map((item, i) => (
            <div className="home-why-cell" key={i}>
              <span className="home-why-num">0{i + 1}</span>
              <p>{item}</p>
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
            { nombre: 'LABORAL', desc: 'Despidos, ART y accidentes de trabajo' },
            { nombre: 'PREVISIONAL', desc: 'Jubilaciones, pensiones y reajustes' },
            { nombre: 'CIVIL', desc: 'Sucesiones, daños y accidentes de tránsito' },
            { nombre: 'COMERCIAL', desc: 'Contratos y reclamos comerciales' },
            { nombre: 'PENAL', desc: 'Defensa en procesos penales' },
          ].map((a, i) => (
            <div className="home-area-cell" key={i}>
              <p className="home-area-nombre">{a.nombre}</p>
              <p className="home-area-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="home-cta">
        <p>¿Necesita asesoramiento legal? Estamos para ayudarlo.</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="home-cta-btn"
        >
          Escribinos por WhatsApp
        </a>
      </div>
    </>
  )
}

export default Home

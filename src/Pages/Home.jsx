import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import bg from '../assets/home.webp'
import profile1 from '../assets/profile_1.webp'
import silvanaCard from '../assets/silvana-card.webp'
import germanCard from '../assets/german-card.webp'

const WHATSAPP_URL = 'https://wa.me/5491155786768'

export const IconoWhatsapp = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
  </svg>
)

export const IconoMail = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

export const IconoUbicacion = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const IconoReloj = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

// Aparición suave al entrar en viewport
function Reveal({ children, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'reveal--in' : ''} ${className}`}>
      {children}
    </Tag>
  )
}

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
            Cuando más lo necesita,
            <strong>un equipo que lo defiende</strong>
          </h1>
          <p className="home-hero-sub">
            Detrás de cada caso hay una persona. Lo acompañamos con cercanía,
            claridad y compromiso en cada etapa, para que usted recupere su tranquilidad.
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
              aria-label="Contactanos por WhatsApp"
              title="Contactanos por WhatsApp"
            >
              <IconoWhatsapp size={22} />
            </a>
            <Link
              to="/contacto"
              className="home-hero-btn"
              aria-label="Enviá tu consulta por el formulario"
              title="Enviá tu consulta"
            >
              <IconoMail size={22} />
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
        <Reveal className="home-section-header">
          <span className="home-header-line" />
          <h2>Quiénes Somos</h2>
          <span className="home-header-line" />
        </Reveal>

        <Reveal className="home-about-body">
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
        </Reveal>
      </section>

      <section className="home-team">
        <Reveal className="home-section-header">
          <span className="home-header-line" />
          <h2>Nuestro Equipo</h2>
          <span className="home-header-line" />
        </Reveal>

        <Reveal className="home-team-grid">
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
        </Reveal>
      </section>

      <section className="home-why">
        <Reveal className="home-section-header">
          <span className="home-header-line" />
          <h2>¿Por Qué Elegirnos?</h2>
          <span className="home-header-line" />
        </Reveal>

        <Reveal className="home-why-grid">
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
        </Reveal>
      </section>

      <section className="home-areas-preview">
        <Reveal className="home-section-header">
          <span className="home-header-line" />
          <h2>Áreas de Práctica</h2>
          <span className="home-header-line" />
        </Reveal>

        <Reveal className="home-areas-grid">
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
        </Reveal>
      </section>

      <div className="home-cta">
        <p>Estamos para ayudarlo. Cuéntenos su caso y lo asesoramos.</p>
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

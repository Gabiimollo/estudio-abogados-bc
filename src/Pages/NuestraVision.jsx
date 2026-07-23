import React from 'react'
import '../styles/nuestraVision.css'
import equipoImg from '../assets/equipo.webp'
import profile1 from '../assets/profile_1.webp'
import profile2 from '../assets/profile-2.webp'
import profile3 from '../assets/profile-3.webp'

const bios = [
  {
    nombre: 'Dra. Estela del Pilar Blanco',
    cargo: 'Socia Fundadora',
    foto: profile1,
    parrafos: [
      'La Dra. Estela del Pilar Blanco es fundadora del estudio jurídico y cuenta con una trayectoria profesional de más de cuatro décadas en el ejercicio del derecho. Egresada de la Universidad de Buenos Aires como Abogada y Escribana, complementó su formación con estudios de posgrado en Derecho Laboral y Relaciones Colectivas del Trabajo.',
      'Desde el inicio de su carrera profesional ha desarrollado una destacada actuación en las áreas de Derecho Laboral, Previsional y Civil, representando tanto a particulares como a empresas, siempre con un enfoque estratégico, humano y personalizado.',
      'A lo largo de su trayectoria participó en congresos y jornadas jurídicas nacionales e internacionales realizados en distintos países, entre ellos Corea, Francia, Hawai e Israel, fortaleciendo una visión jurídica amplia y actualizada.',
      'Se encuentra matriculada en el Colegio Público de Abogados de Capital Federal y en el Colegio de Abogados de San Martín. Su experiencia, compromiso profesional y cercanía con cada cliente constituyen los pilares fundamentales del estudio jurídico que dirige desde 1977.',
    ],
  },
  {
    nombre: 'Dra. Mónica Silvana Colombo',
    cargo: 'Socia',
    foto: profile2,
    parrafos: [
      'La Dra. Mónica Silvana Colombo es abogada egresada de la Universidad de Buenos Aires y cuenta además con formación en Derecho Español cursada en las Universidades de Zaragoza y Barcelona, España, consolidando una perspectiva jurídica integral tanto en el ámbito nacional como internacional.',
      'Complementó su formación académica con una especialización en Asesoría Jurídica de Empresas, orientando su práctica profesional al asesoramiento estratégico y a la resolución eficiente de conflictos jurídicos.',
      'Desde su incorporación al estudio jurídico en el año 2005, ha desarrollado una sólida trayectoria en las áreas de Derecho Laboral y Derecho Civil, brindando acompañamiento personalizado a particulares y empresas, con un enfoque basado en la claridad, el compromiso y la búsqueda de soluciones concretas para cada caso.',
      'Se encuentra matriculada en el Colegio Público de Abogados de Capital Federal y en el Colegio de Abogados de San Martín, participando activamente en la representación y defensa de los intereses de sus clientes con profesionalismo y dedicación.',
    ],
  },
  {
    nombre: 'Dr. Germán Wettstein',
    cargo: 'Asociado',
    foto: profile3,
    parrafos: [
      'El Dr. Germán Wettstein es abogado egresado de la Universidad de Buenos Aires y posee una sólida formación académica internacional en Derecho Español, cursada en las Universidades de Zaragoza y Barcelona, España.',
      'Asimismo, obtuvo el Máster en Abogacía en la Universidad Autónoma de Barcelona, complementando su formación con una destacada proyección profesional en el ámbito jurídico europeo.',
      'Se encuentra matriculado tanto en Argentina como en Europa, integrando el Ilustre Colegio de Abogados de Barcelona y el Conseil des Barreaux Européens (Consejo de la Abogacía Europea), además de los Colegios Públicos de Abogados de San Isidro y Capital Federal.',
      'Desde su incorporación al estudio jurídico, ha desarrollado una práctica especializada en Derecho Penal, interviniendo en procesos complejos con un enfoque técnico, estratégico y comprometido con la defensa de los derechos e intereses de sus clientes.',
      'Su formación internacional, experiencia profesional y visión integral del ejercicio del derecho aportan al estudio una perspectiva moderna y especializada, tanto a nivel nacional como internacional.',
    ],
  },
]

function NuestraVision() {
  return (
    <div className="vision">

      <div className="vision-layout">

        <div className="vision-left">
          <div className="vision-hero">
            <div className="vision-eyebrow">
              <span className="vision-eyebrow-line" />
              <span className="vision-eyebrow-text">Quiénes somos</span>
            </div>
            <h1 className="vision-title">NUESTRA VISIÓN</h1>
          </div>

          <div className="vision-body-left">
            <p>
              Somos un estudio jurídico con una sólida trayectoria profesional y actuación en la Ciudad Autónoma de Buenos Aires y en distintos departamentos judiciales de la Provincia de Buenos Aires, con presencia en San Miguel, San Martín, San Isidro, Morón, Pilar, entre otros.
            </p>
            <p>
              Desde hace más de cuatro décadas brindamos asesoramiento y representación legal a particulares y empresas, combinando experiencia, compromiso y una atención personalizada orientada a encontrar soluciones concretas y eficaces para cada caso.
            </p>
            <p>
              Nuestro equipo está integrado por profesionales con formación nacional e internacional, amplia experiencia en distintas ramas del derecho y una visión estratégica del ejercicio profesional, lo que nos permite abordar cada situación con seriedad, rigor técnico y cercanía con el cliente.
            </p>
            <p>
              Creemos en una práctica jurídica basada en la confianza, la transparencia y la comunicación clara desde el primer contacto, acompañando a cada persona con responsabilidad y compromiso durante todas las etapas del proceso.
            </p>
            <p>
              Trabajamos con un enfoque humano y profesional, entendiendo que detrás de cada consulta existe una necesidad real que merece atención, dedicación y respuestas eficientes.
            </p>
          </div>
        </div>

        <div className="vision-right">
          <img src={equipoImg} alt="Equipo del estudio jurídico" className="vision-img" loading="lazy" decoding="async" width="1600" height="2400" />
        </div>

      </div>

      <section className="vision-historia">
        <div className="vision-section-header vision-section-header--centrado">
          <span className="vision-header-line" />
          <h2>Historia del Estudio</h2>
          <span className="vision-header-line" />
        </div>

        <div className="vision-historia-body">
          <p>
            El estudio jurídico fue fundado por la Dra. Estela del Pilar Blanco, quien inició sus primeros pasos profesionales junto al reconocido Juez y Camarista del Departamento Judicial de San Martín, Dr. Ricardo Alberto Occhiuzzi, incorporando desde sus comienzos una sólida formación jurídica y una profunda vocación por el ejercicio del derecho.
          </p>
          <p>
            En el año 1977 decidió abrir su propio estudio jurídico en la localidad de José C. Paz, dando inicio a un proyecto profesional basado en el compromiso, la ética y la atención personalizada de cada cliente.
          </p>
          <p>
            Con el crecimiento sostenido de la actividad y la necesidad de ampliar sus instalaciones, en 1994 el estudio fue trasladado a su actual ubicación en Domingo Faustino Sarmiento 1715, Piso 1, San Miguel, desde donde continúa brindando asesoramiento y representación jurídica tanto en la Ciudad Autónoma de Buenos Aires como en distintos departamentos judiciales de la Provincia de Buenos Aires.
          </p>
          <p>
            A lo largo de los años, el estudio incorporó profesionales con sólida formación académica y amplia experiencia. En 2005 se sumó la Dra. Mónica Silvana Colombo y posteriormente, en 2019, el Dr. Germán Wettstein, fortaleciendo así un equipo interdisciplinario orientado a brindar soluciones jurídicas integrales y estratégicas.
          </p>
          <p>
            Actualmente, el estudio combina trayectoria, formación nacional e internacional y experiencia profesional en distintas ramas del derecho, manteniendo como pilares fundamentales la excelencia jurídica, la cercanía con el cliente y el compromiso permanente con cada caso.
          </p>
        </div>
      </section>

      <section className="vision-equipo">
        <div className="vision-section-header">
          <span className="vision-eyebrow-line" />
          <h2>Nuestros Profesionales</h2>
        </div>

        {bios.map((b, i) => (
          <article className={`vision-bio ${i % 2 === 1 ? 'vision-bio--invertida' : ''}`} key={i}>
            <div className="vision-bio-foto">
              <img src={b.foto} alt={b.nombre} loading="lazy" decoding="async" />
            </div>
            <div className="vision-bio-texto">
              <h3>{b.nombre}</h3>
              <p className="vision-bio-cargo">{b.cargo}</p>
              <div className="vision-bio-sep" />
              {b.parrafos.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

    </div>
  )
}

export default NuestraVision

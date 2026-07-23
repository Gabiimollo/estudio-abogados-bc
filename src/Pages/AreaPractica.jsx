import React from 'react'
import '../styles/areaPractica.css'

function AreaPractica() {
  const areas = [
    {
      titulo: 'LABORAL',
      items: ['Conflictos laborales', 'Despidos', 'Accidentes de trabajo y ART', 'Enfermedades profesionales', 'Asesoramiento a trabajadores y empresas'],
    },
    {
      titulo: 'PREVISIONAL',
      items: ['Jubilaciones', 'Pensiones', 'Reajustes de haberes', 'Asesoramiento integral previsional'],
    },
    {
      titulo: 'CIVIL',
      items: ['Sucesiones', 'Daños y perjuicios', 'Accidentes de tránsito', 'Usucapiones'],
    },
    {
      titulo: 'COMERCIAL',
      items: ['Asesoramiento contractual', 'Reclamos comerciales', 'Representación empresarial'],
    },
    {
      titulo: 'PENAL',
      items: ['Defensa penal', 'Asistencia jurídica en procesos penales'],
    },
  ]

  return (
    <div className="area-practica">

      <div className="area-header">
        <div className="area-eyebrow">
          <span className="area-eyebrow-line" />
          <span className="area-eyebrow-text">Servicios legales</span>
        </div>
        <h1 className="area-title">ÁREAS DE PRÁCTICA</h1>
      </div>

      <div className="area-row">
        {areas.map((area, i) => (
          <div className="area-col" key={i}>
            <p className="area-col-num">0{i + 1}</p>
            <div className="area-col-title">
              <h3>{area.titulo}</h3>
            </div>
            <ul className="area-col-list">
              {area.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  )
}

export default AreaPractica

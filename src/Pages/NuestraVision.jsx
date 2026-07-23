import React from 'react'
import '../styles/nuestraVision.css'
import visionImg from '../assets/nuestra-vision.webp'
import equipoImg from '../assets/equipo.webp'

const visionImg2 = equipoImg

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
              En ESTELA DEL PILAR BLANCO – MÓNICA S. COLOMBO y Asociados brindamos asesoramiento jurídico integral a empresas y particulares, con un profundo compromiso ético y profesional.
            </p>
            <p>
              Analizamos cada caso con rigor técnico, estudiando el marco legal vigente y los precedentes jurisprudenciales, para ofrecer soluciones estratégicas, creativas y eficaces.
            </p>
            <p>
              Acompañamos a las empresas en el desarrollo de sus objetivos, minimizando riesgos y adecuando sus actividades a las normativas comerciales, laborales, tributarias y contractuales.
            </p>
            <p>
              Asimismo, asistimos a particulares en la protección de sus derechos en el ámbito familiar, laboral y social.
            </p>
          </div>
        </div>

        <div className="vision-right">
          <img src={visionImg2} alt="Nuestra visión detalle" className="vision-img" loading="lazy" decoding="async" width="1600" height="2400" />
        </div>

      </div>

    </div>
  )
}

export default NuestraVision

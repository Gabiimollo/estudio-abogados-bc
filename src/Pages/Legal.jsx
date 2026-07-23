import React from 'react'
import '../styles/legal.css'

const CONTENIDO = {
  privacidad: {
    titulo: 'Política de Privacidad',
    eyebrow: 'Protección de datos personales',
    bloques: [
      ['Responsable del tratamiento', 'El Estudio Jurídico Blanco – Colombo & Asociados, con domicilio en Domingo Faustino Sarmiento 1715, Piso 1, San Miguel, Provincia de Buenos Aires, es responsable del tratamiento de los datos personales que los usuarios facilitan a través de este sitio web.'],
      ['Datos que recopilamos', 'A través del formulario de contacto recopilamos nombre, apellido, correo electrónico, teléfono, tipo de consulta y el mensaje que el usuario decide enviarnos. Estos datos son proporcionados voluntariamente por el usuario.'],
      ['Finalidad', 'Los datos se utilizan únicamente para responder consultas, brindar asesoramiento jurídico y mantener contacto con el usuario en relación con el servicio solicitado. No se utilizan con fines publicitarios ni se ceden a terceros sin consentimiento, salvo obligación legal.'],
      ['Conservación', 'Los datos se conservan durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y con las obligaciones legales aplicables.'],
      ['Derechos del titular', 'El titular de los datos puede ejercer sus derechos de acceso, rectificación, actualización y supresión de sus datos personales, conforme a la Ley N.º 25.326 de Protección de los Datos Personales, escribiendo a los canales de contacto publicados en este sitio. La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, órgano de control de la Ley N.º 25.326, tiene la atribución de atender denuncias y reclamos relativos al incumplimiento de las normas sobre protección de datos personales.'],
      ['Seguridad', 'Adoptamos medidas técnicas y organizativas razonables para proteger los datos personales contra el acceso no autorizado, la pérdida o la alteración.'],
    ],
  },
  aviso: {
    titulo: 'Aviso Legal',
    eyebrow: 'Términos de identificación',
    bloques: [
      ['Titular del sitio', 'El presente sitio web pertenece al Estudio Jurídico Blanco – Colombo & Asociados, con domicilio profesional en Domingo Faustino Sarmiento 1715, Piso 1, San Miguel, Provincia de Buenos Aires, Argentina.'],
      ['Objeto', 'Este sitio tiene carácter informativo sobre los servicios jurídicos que presta el estudio. La información aquí publicada no constituye asesoramiento legal ni genera relación profesional alguna hasta tanto se formalice la contratación de servicios.'],
      ['Propiedad intelectual', 'Los contenidos, textos, logotipos e imágenes de este sitio son propiedad del estudio o se utilizan con la debida autorización, y se encuentran protegidos por la normativa de propiedad intelectual. Queda prohibida su reproducción total o parcial sin autorización expresa.'],
      ['Responsabilidad', 'El estudio procura mantener la información actualizada y precisa, pero no garantiza la ausencia de errores ni la disponibilidad permanente del sitio. El uso de la información contenida es responsabilidad exclusiva del usuario.'],
      ['Legislación aplicable', 'Este aviso legal se rige por la legislación de la República Argentina. Cualquier controversia se someterá a los tribunales competentes de la Provincia de Buenos Aires.'],
    ],
  },
  terminos: {
    titulo: 'Términos de Uso',
    eyebrow: 'Condiciones de utilización',
    bloques: [
      ['Aceptación', 'El acceso y uso de este sitio web implica la aceptación de los presentes términos de uso. Si el usuario no está de acuerdo con ellos, debe abstenerse de utilizar el sitio.'],
      ['Uso del sitio', 'El usuario se compromete a utilizar el sitio de forma lícita, sin incurrir en actividades que puedan dañar, inutilizar o sobrecargar el sitio, o impedir su normal utilización por parte de otros usuarios.'],
      ['Formulario de contacto', 'La información enviada a través del formulario debe ser veraz y actual. El envío de una consulta no genera obligación de respuesta ni relación profesional, y no debe considerarse asesoramiento jurídico hasta la formalización del vínculo profesional.'],
      ['Enlaces externos', 'Este sitio puede contener enlaces a sitios de terceros. El estudio no se responsabiliza por los contenidos ni las políticas de privacidad de dichos sitios.'],
      ['Modificaciones', 'El estudio se reserva el derecho de modificar en cualquier momento y sin previo aviso los presentes términos, así como los contenidos y servicios del sitio.'],
    ],
  },
}

function Legal({ tipo }) {
  const data = CONTENIDO[tipo]
  if (!data) return null

  return (
    <div className="legal">
      <div className="legal-header">
        <div className="legal-eyebrow">
          <span className="legal-eyebrow-line" />
          <span className="legal-eyebrow-text">{data.eyebrow}</span>
        </div>
        <h1 className="legal-title">{data.titulo}</h1>
      </div>

      <div className="legal-body">
        {data.bloques.map(([subtitulo, texto], i) => (
          <section className="legal-bloque" key={i}>
            <h2>{subtitulo}</h2>
            <p>{texto}</p>
          </section>
        ))}

        <p className="legal-nota">
          Última actualización: julio de 2026. Este documento es un texto de referencia
          y debe ser revisado por un profesional antes de su publicación definitiva.
        </p>
      </div>
    </div>
  )
}

export default Legal

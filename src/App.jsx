import { lazy, Suspense, useEffect } from 'react'

// Pages (lazy: cada página se descarga solo cuando se visita)
const Home = lazy(() => import('./Pages/Home'))
const NuestraVision = lazy(() => import('./Pages/NuestraVision'))
const Contacto = lazy(() => import('./Pages/Contacto'))
const AreaPractica = lazy(() => import('./Pages/AreaPractica'))
const Legal = lazy(() => import('./Pages/Legal'))

// Components
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import WhatsappFlotante from './Components/WhatsappFlotante'

// Router
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

// Al cambiar de página, vuelve el scroll al inicio
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // requestAnimationFrame asegura el scroll tras montar la página (lazy load)
    const id = requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      if (document.scrollingElement) document.scrollingElement.scrollTop = 0
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    })
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return null
}

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nuestra-vision' element={<NuestraVision />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/area-practica' element={<AreaPractica />} />
          <Route path='/politica-de-privacidad' element={<Legal tipo='privacidad' />} />
          <Route path='/aviso-legal' element={<Legal tipo='aviso' />} />
          <Route path='/terminos' element={<Legal tipo='terminos' />} />
        </Routes>
      </Suspense>

      <Footer />
      <WhatsappFlotante />
    </BrowserRouter>
  )
}

export default App

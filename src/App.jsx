import { lazy, Suspense } from 'react'

// Pages (lazy: cada página se descarga solo cuando se visita)
const Home = lazy(() => import('./Pages/Home'))
const NuestraVision = lazy(() => import('./Pages/NuestraVision'))
const Contacto = lazy(() => import('./Pages/Contacto'))
const AreaPractica = lazy(() => import('./Pages/AreaPractica'))

// Components
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nuestra-vision' element={<NuestraVision />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/area-practica' element={<AreaPractica />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  )
}

export default App

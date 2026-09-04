import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/organisms/Navbar'
import { Footer } from './components/organisms/Footer'
import { Home } from './pages/Home'
import { Carta } from './pages/Carta'
import { Customizar } from './pages/Customizar'
import { Reservar } from './pages/Reservar'

export default function App() {
  return (
    <BrowserRouter>
      <div className="dark min-h-screen bg-[#1A1A1A]">
        {/* Fondo sólido detrás de la navbar */}
        <div className="fixed top-0 left-0 right-0 h-40 bg-[#1A1A1A] z-40" />
        <Navbar />
        <main className="min-h-screen relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carta" element={<Carta />} />
            <Route path="/customizar" element={<Customizar />} />
            <Route path="/reservar" element={<Reservar />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

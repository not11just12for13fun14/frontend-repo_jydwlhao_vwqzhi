import React from 'react'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import About from './components/About'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-[linear-gradient(180deg,#f7e8d1,#dbc0a2)]">
      {/* Paper texture overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] mix-blend-multiply" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMxNjc0NDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', backgroundSize: 'cover' }} />

      <Hero />
      <FeaturedProducts />
      <About />
      <Gallery />
      <Footer />

      <style>{`
        @keyframes floatDust { 0% { transform: translateY(0) translateX(0) } 100% { transform: translateY(-12px) translateX(6px) } }
      `}</style>
    </div>
  )
}

export default App

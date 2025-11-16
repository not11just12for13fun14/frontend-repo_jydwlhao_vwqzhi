import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Dust = () => {
  // Render a handful of floating dust particles for subtle motion
  const particles = Array.from({ length: 16 })
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2
        const left = Math.random() * 100
        const top = Math.random() * 100
        const delay = Math.random() * 6
        const dur = 8 + Math.random() * 8
        return (
          <span
            key={i}
            className="absolute rounded-full bg-white/30 mix-blend-screen"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              filter: 'blur(0.5px)',
              animation: `floatDust ${dur}s ease-in-out ${delay}s infinite alternate`,
            }}
          />
        )
      })}
    </div>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -60])
  const scale = useTransform(scrollY, [0, 600], [1, 1.05])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[linear-gradient(135deg,#f7e8d1,#f1dac4)]">
      <motion.div style={{ y, scale }} className="relative h-[80vh] w-full">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <Dust />
        {/* Soft vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(65,40,20,0.25)_100%)]" />
      </motion.div>

      {/* Headline overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-end md:items-center">
        <div className="mx-auto w-full max-w-6xl px-6 pb-10 md:pb-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-vintage text-4xl leading-tight text-wood-900 drop-shadow-sm sm:text-5xl md:text-6xl"
          >
            Old Craft Atelier
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="mt-4 max-w-2xl text-wood-800/80 text-base sm:text-lg"
          >
            Handcrafted heirlooms, vintage curios, and lovingly restored pieces. A modern homage to timeless artistry.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

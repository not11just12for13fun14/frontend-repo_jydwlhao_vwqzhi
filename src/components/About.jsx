import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative py-16 sm:py-24 bg-[linear-gradient(180deg,#e6d3bb,#e1c8ae)]">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-vintage text-3xl sm:text-4xl text-wood-900"
        >
          About the Craft
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-wood-800/90 leading-relaxed text-base sm:text-lg"
        >
          Each piece is shaped by hand, guided by timeworn techniques and a reverence for material. We source reclaimed wood, aged metals, and heirloom fabrics, embracing patina as a story rather than a flaw.
        </motion.p>
      </div>
    </section>
  )
}

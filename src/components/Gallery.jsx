import React from 'react'
import { motion } from 'framer-motion'

const items = [
  'https://images.unsplash.com/photo-1526657782237-4f2d1faccf6f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505575972945-2804ebd1bbca?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515165562835-c3b8c8b1d3dc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518544801976-3e188f47b34a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section className="relative py-16 sm:py-24 bg-[linear-gradient(180deg,#e1c8ae,#dbc0a2)]">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-vintage text-2xl sm:text-3xl text-wood-900 mb-8">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {items.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <img src={src} alt="artifact" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

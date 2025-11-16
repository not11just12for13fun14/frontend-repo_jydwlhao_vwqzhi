import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const products = [
  {
    title: 'Aged Brass Compass',
    price: '$129',
    img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Hand-carved Wooden Box',
    price: '$89',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Vintage Film Camera',
    price: '$219',
    img: 'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="relative py-14 sm:py-20 bg-[linear-gradient(180deg,#efe1cd,#e6d3bb)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <Star className="h-5 w-5 text-brass-600" />
          <h2 className="font-vintage text-2xl sm:text-3xl text-wood-900">Featured Finds</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group overflow-hidden rounded-xl bg-paper/70 backdrop-blur-sm border border-wood-800/10 shadow-[0_8px_24px_rgba(80,50,30,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-wood-900/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <h3 className="text-wood-900 font-semibold tracking-wide">{p.title}</h3>
                <p className="mt-1 text-wood-700">{p.price}</p>
                <button className="mt-4 inline-flex items-center rounded-md bg-brass-600/90 px-4 py-2 text-sm font-medium text-wood-50 shadow hover:bg-brass-600 focus:outline-none focus:ring-2 focus:ring-brass-400/60 transition-colors">View</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

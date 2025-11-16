import React from 'react'
import { Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[linear-gradient(180deg,#dbc0a2,#d4b798)] text-wood-900">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-vintage text-lg">Old Craft Atelier</p>
        <div className="flex items-center gap-4">
          <a href="#" className="rounded-md p-2 bg-paper/60 border border-wood-800/10 hover:bg-paper transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
          <a href="#" className="rounded-md p-2 bg-paper/60 border border-wood-800/10 hover:bg-paper transition-colors" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
          <a href="#" className="rounded-md p-2 bg-paper/60 border border-wood-800/10 hover:bg-paper transition-colors" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  )
}

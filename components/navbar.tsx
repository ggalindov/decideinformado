"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#003366] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DI</span>
            </div>
            <span className="text-xl font-bold text-[#003366] hidden sm:inline">Decide informado</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
              Inicio
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
              Sobre nosotros
            </Link>
            <Link href="/#sources" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
              Fuentes
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-[#003366]" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Inicio
            </Link>
            <Link href="/#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Sobre nosotros
            </Link>
            <Link href="/#sources" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Fuentes
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

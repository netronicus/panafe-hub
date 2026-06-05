import { useState } from 'react'
import { Menu, X, Shield } from 'lucide-react'
import { PanaFeLink } from './PanaFeLink'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#operadoras', label: 'Operadoras' },
  { href: '#seguimiento', label: 'Seguimiento' },
  { href: '#documentos', label: 'Documentos' },
  { href: '#estafas', label: 'Alertas' },
  { href: '#amparo', label: 'Amparo' },
  { href: '#faq', label: 'Preguntas' },
]

export function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#inicio"
            onClick={(e) => handleClick(e, '#inicio')}
            className="flex items-center gap-2 text-mexico-green font-bold text-lg focus-ring rounded-md"
          >
            <Shield className="w-6 h-6" aria-hidden="true" />
            <span className="flex items-center gap-1"><PanaFeLink /> Hub</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-mexico-green hover:bg-gray-50 focus-ring transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus-ring"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-mexico-green hover:bg-gray-50 focus-ring"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

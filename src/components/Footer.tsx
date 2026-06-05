import { Shield, Coffee } from 'lucide-react'
import { PrivacyNotice } from './PrivacyNotice'

export function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <Shield className="w-6 h-6" aria-hidden="true" />
            <span>PANAFE Hub</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <PrivacyNotice />
            <a
              href="https://buymeacoffee.com/netron"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-amber-400 hover:text-amber-300 transition-colors focus-ring rounded"
              aria-label="Apoya este proyecto en Buy Me a Coffee"
            >
              <Coffee className="w-4 h-4" aria-hidden="true" />
              <span>Apóyanos con un café</span>
            </a>
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} PANAFE Hub. Herramienta informativa independiente.
            </span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <span className="text-mexico-red font-bold text-sm shrink-0">Aviso:</span>
            <p className="text-sm text-gray-400 leading-relaxed">
              Este sitio es una herramienta informativa independiente. No está afiliado al gobierno
              mexicano ni a las operadoras de telefonía. Para trámites oficiales, visite siempre
              los portales oficiales de su compañía.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

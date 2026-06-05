import { Shield, ExternalLink } from 'lucide-react'
import { PanaFeLink } from './PanaFeLink'
import { PrivacyNotice } from './PrivacyNotice'

export function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <Shield className="w-6 h-6" aria-hidden="true" />
            <span className="flex items-center gap-1"><PanaFeLink className="text-white hover:text-gray-200" /> Hub</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <PrivacyNotice />
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} <PanaFeLink className="text-gray-400 hover:text-gray-300" /> Hub. Herramienta informativa independiente.
            </span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 space-y-4">
          <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <span className="text-amber-400 font-bold text-sm shrink-0">Nota:</span>
            <p className="text-sm text-gray-400 leading-relaxed">
              <PanaFeLink className="text-gray-400 hover:text-gray-300" /> es un nombre interno de este proyecto. Consulta el proceso oficial en:{" "}
              <a
                href="https://www.ift.org.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 inline-flex items-center gap-1"
              >
                IFT <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>{" "}
              |{" "}
              <a
                href="https://www.gob.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 inline-flex items-center gap-1"
              >
                Gobierno de México <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </p>
          </div>
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

import { useDismissible } from '../hooks/useDismissible'
import { X, Info } from 'lucide-react'

export function NamingClarification(): JSX.Element | null {
  const [dismissed, dismiss] = useDismissible()

  if (dismissed) return null

  return (
    <div className="bg-amber-50 border-l-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="flex-1">
            <p className="text-sm text-amber-900 leading-relaxed">
              En este sitio utilizamos <strong>PANAFE</strong> como nombre interno del proyecto.
              El término oficial del proceso es "Registro de Usuarios de Telefonía Móvil" o
              "Registro Nacional de Usuarios de Telecomunicaciones", según el{' '}
              <a
                href="https://www.ift.org.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 underline underline-offset-2 hover:text-amber-950 focus-ring rounded"
              >
                IFT
              </a>{' '}
              (Instituto Federal de Telecomunicaciones) y el Gobierno de México.
            </p>
          </div>
          <button
            type="button"
            onClick={dismiss}
            className="shrink-0 p-1 text-amber-600 hover:text-amber-900 hover:bg-amber-100 rounded-md focus-ring"
            aria-label="Cerrar aviso de nomenclatura"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}

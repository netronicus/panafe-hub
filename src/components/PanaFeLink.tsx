import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, ExternalLink, Info } from 'lucide-react'

interface PanaFeLinkProps {
  className?: string
  tooltipPosition?: 'top' | 'bottom'
}

export function PanaFeLink({ className, tooltipPosition = 'top' }: PanaFeLinkProps): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showTooltip, setShowTooltip] = useState<boolean>(false)
  const tooltipTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const openModal = useCallback(() => {
    setShowModal(true)
    setShowTooltip(false)
  }, [])

  const closeModal = useCallback(() => {
    setShowModal(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    if (tooltipTimer.current) clearTimeout(tooltipTimer.current)
    tooltipTimer.current = setTimeout(() => setShowTooltip(true), 300)
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (tooltipTimer.current) clearTimeout(tooltipTimer.current)
    setShowTooltip(false)
  }, [])

  useEffect(() => {
    return () => {
      if (tooltipTimer.current) clearTimeout(tooltipTimer.current)
    }
  }, [])

  useEffect(() => {
    if (!showModal) return
    closeButtonRef.current?.focus()
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [showModal, closeModal])

  return (
    <>
      <span className="relative inline">
        <button
          type="button"
          onClick={openModal}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`inline underline decoration-dotted underline-offset-2 cursor-pointer bg-transparent border-none p-0 font-inherit ${className ?? 'text-blue-600 hover:text-blue-800'}`}
          aria-label="PANAFE: nombre interno del proyecto. Clic para más información."
          aria-expanded={showModal}
          aria-controls="panafe-modal"
        >
          PANAFE
        </button>

        {showTooltip && (
          <span
            className={`hidden sm:block absolute left-1/2 -translate-x-1/2 ${tooltipPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'} px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-50 shadow-lg`}
            role="tooltip"
          >
            Nombre interno del proyecto. Clic para más información.
            <span className={`absolute left-1/2 -translate-x-1/2 ${tooltipPosition === 'top' ? 'top-full' : 'bottom-full'} w-2 h-2 bg-gray-900 rotate-45`} />
          </span>
        )}
      </span>

      {showModal &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="¿Qué significa PANAFE?"
            onClick={closeModal}
          >
            <div
              id="panafe-modal"
              className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Info className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    ¿Qué significa PANAFE?
                  </h2>
                  <button
                    type="button"
                    ref={closeButtonRef}
                    onClick={closeModal}
                    className="p-1 text-gray-400 hover:text-gray-600 rounded-lg focus-ring"
                    aria-label="Cerrar"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-4 text-sm text-gray-700">
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="font-semibold text-amber-900">
                      PANAFE es un nombre interno de este proyecto.
                    </p>
                    <p className="text-amber-800 mt-1">
                      Significa <strong>"Padrón Nacional y Fecha de Alta"</strong>.
                    </p>
                  </div>

                  <p>
                    En este sitio utilizamos <strong>PANAFE</strong> como nombre interno del proyecto.
                    El término oficial del proceso es{' '}
                    <strong>"Registro de Usuarios de Telefonía Móvil"</strong> o{' '}
                    <strong>"Registro Nacional de Usuarios de Telecomunicaciones"</strong>, según el IFT
                    (Instituto Federal de Telecomunicaciones) y el Gobierno de México.
                  </p>

                  <p>
                    Este sitio es una herramienta informativa independiente, no afiliada al gobierno
                    mexicano ni a las operadoras.
                  </p>

                  <a
                    href="https://www.ift.org.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline focus-ring rounded"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    Sitio oficial del IFT
                  </a>
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-mexico-green text-white text-sm font-medium rounded-lg hover:bg-emerald-800 focus-ring transition-colors"
                  >
                    Entendido
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

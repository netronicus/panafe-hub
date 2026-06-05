import { useState, useRef, useEffect, useCallback } from 'react'
import { ShieldCheck, X, Database, Lock, Eye } from 'lucide-react'

export function PrivacyNotice(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      previouslyFocusedRef.current?.focus()
      return
    }

    previouslyFocusedRef.current = document.activeElement as HTMLElement
    closeButtonRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
      if (e.key === 'Tab') {
        const modal = document.getElementById('privacy-modal-content')
        if (!modal) return
        const focusable = modal.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleClose])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="text-sm text-gray-400 hover:text-gray-200 underline underline-offset-2 focus-ring rounded"
      >
        Privacidad y uso de datos
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Aviso de privacidad"
          onClick={handleClose}
        >
          <div
            id="privacy-modal-content"
            className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-mexico-green" aria-hidden="true" />
                  Privacidad y uso de datos
                </h2>
                <button
                  type="button"
                  ref={closeButtonRef}
                  onClick={handleClose}
                  className="p-1 text-gray-400 hover:text-gray-600 rounded-lg focus-ring"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-mexico-green shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-gray-900">Almacenamiento únicamente local</p>
                    <p className="mt-1">
                      Los datos que ingresas en el seguimiento de líneas y el checklist se guardan
                      exclusivamente en el Almacenamiento Local de tu navegador. No se envían a
                      ningún servidor ni se comparten con terceros.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-mexico-green shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-gray-900">Seguridad</p>
                    <p className="mt-1">
                      Los números telefónicos se muestran enmascarados (solo se ven los primeros 3 y
                      últimos 4 dígitos). Sin embargo, cualquier persona con acceso a tu dispositivo
                      y navegador puede ver la información completa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-mexico-green shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-gray-900">Tu control</p>
                    <p className="mt-1">
                      Puedes exportar tus datos en formato JSON o CSV, o eliminarlos en cualquier
                      momento borrando los datos de navegación de tu navegador.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 text-amber-800 text-xs">
                  Este sitio no recopila cookies de seguimiento ni utiliza analíticas externas.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

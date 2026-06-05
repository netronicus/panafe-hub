import { useState } from 'react'
import {
  ExternalLink,
  Copy,
  Check,
  Globe,
  MapPin,
  FileText,
  AlertTriangle,
} from 'lucide-react'
import { carriers, documentLabels, methodLabels } from '../data/carriers'

function CarrierLogoPlaceholder({ name }: { name: string }): JSX.Element {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <div className="w-12 h-12 rounded-lg bg-mexico-green text-white flex items-center justify-center font-bold text-sm shrink-0">
      {initials}
    </div>
  )
}

export function CarrierDirectory(): JSX.Element {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = async (url: string, id: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(url)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch {
      // Fallback: do nothing
    }
  }

  return (
    <section id="operadoras" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Directorio de Operadoras
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Selecciona tu compañía y ve directamente a su portal oficial de registro de usuarios de telefonía móvil.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carriers.map((carrier) => (
            <article
              key={carrier.id}
              className="group rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="p-6 flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <CarrierLogoPlaceholder name={carrier.name} />
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-gray-900">{carrier.name}</h3>
                    <span
                      className={`inline-flex items-center gap-1 mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                        carrier.isOfficial
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {carrier.isOfficial ? 'Portal oficial' : 'No oficial'}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      <strong className="text-gray-800">Documentos:</strong>{' '}
                      {carrier.requiredDocuments.map((d) => documentLabels[d]).join(', ')}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    {carrier.methods.includes('online') ? (
                      <Globe className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" aria-hidden="true" />
                    ) : (
                      <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" aria-hidden="true" />
                    )}
                    <span>
                      <strong className="text-gray-800">Método:</strong>{' '}
                      {carrier.methods.map((m) => methodLabels[m]).join(', ')}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 p-3 bg-amber-50 border border-amber-100 rounded-lg">
                  <AlertTriangle
                    className="w-4 h-4 text-amber-600 shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-xs text-amber-800">
                    No hagas clic en enlaces de SMS o correos no solicitados. Ve directamente al
                    sitio oficial.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex gap-2">
                <a
                  href={carrier.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-mexico-green text-white text-sm font-medium rounded-lg hover:bg-emerald-800 focus-ring transition-colors"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  Ir al portal
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(carrier.registrationUrl, carrier.id)}
                  className="inline-flex items-center justify-center gap-2 px-3 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 focus-ring transition-colors"
                  aria-label={`Copiar enlace de ${carrier.name}`}
                >
                  {copiedId === carrier.id ? (
                    <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  ) : (
                    <Copy className="w-4 h-4" aria-hidden="true" />
                  )}
                  {copiedId === carrier.id ? 'Copiado' : 'Copiar'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

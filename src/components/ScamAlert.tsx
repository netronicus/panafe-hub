import { useState } from 'react'
import { scamReports } from '../data/scams'
import {
  AlertTriangle,
  Send,
  ShieldAlert,
  MessageSquareWarning,
  Link as LinkIcon,
  Clock,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react'

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('es-MX', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function ScamAlert(): JSX.Element {
  const [pattern, setPattern] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [showHelp, setShowHelp] = useState<boolean>(false)

  const handleReport = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const subject = encodeURIComponent('Reporte de intento de fraude - PANAFE')
    const body = encodeURIComponent(
      `Patrón detectado:\n${pattern}\n\nURL sospechosa (opcional):\n${url}\n\nFecha del reporte: ${new Date().toLocaleDateString('es-MX')}\n\n---\nReporte enviado desde PANAFE Hub`,
    )
    window.location.href = `mailto:orientacion@profeco.gob.mx?subject=${subject}&body=${body}`
    setPattern('')
    setUrl('')
  }

  return (
    <section id="estafas" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Alertas de Estafas</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce los patrones de fraude más comunes y reporta intentos de phishing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-mexico-red" aria-hidden="true" />
              Reportes recientes
            </h3>
            {scamReports.map((report) => (
              <div
                key={report.id}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <MessageSquareWarning
                    className="w-5 h-5 text-amber-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{report.pattern}</p>
                    {report.fakeUrl && (
                      <div className="mt-2 flex items-center gap-2 text-xs text-red-700 bg-red-50 border border-red-100 rounded-md px-3 py-2">
                        <LinkIcon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span className="break-all">{report.fakeUrl}</span>
                      </div>
                    )}
                    <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        {formatDate(report.reportedAt)}
                      </span>
                      {report.isVerified && (
                        <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
                          <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                          Verificado
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
                <Send className="w-5 h-5 text-mexico-green" aria-hidden="true" />
                Reportar estafa
              </h3>
              <form onSubmit={handleReport} className="space-y-4">
                <div>
                  <label htmlFor="pattern" className="block text-sm font-medium text-gray-700 mb-1">
                    ¿Qué mensaje o patrón detectaste?
                  </label>
                  <textarea
                    id="pattern"
                    value={pattern}
                    onChange={(e) => setPattern(e.target.value)}
                    required
                    rows={3}
                    placeholder="Ej. Recibí un SMS diciendo que mi línea se suspendiría hoy..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mexico-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="scam-url" className="block text-sm font-medium text-gray-700 mb-1">
                    URL sospechosa (opcional)
                  </label>
                  <input
                    id="scam-url"
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mexico-green focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-mexico-green text-white text-sm font-medium rounded-lg hover:bg-emerald-800 focus-ring transition-colors"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  Generar reporte por correo
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <button
                type="button"
                onClick={() => setShowHelp((prev) => !prev)}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" aria-hidden="true" />
                  Señales de alerta (red flags)
                </h3>
                <HelpCircle className="w-5 h-5 text-gray-400" aria-hidden="true" />
              </button>

              {showHelp && (
                <ul className="mt-4 space-y-3">
                  {[
                    'Te piden tu NIP o contraseña por mensaje o correo.',
                    'Usan lenguaje de urgencia extrema: "hoy", "última oportunidad", "suspendida inmediatamente".',
                    'La URL se ve sospechosa: dominios extraños, errores ortográficos, sin "https".',
                    'El remitente no es un número o correo oficial de tu compañía.',
                    'Te piden datos bancarios para "reactivar" tu línea.',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

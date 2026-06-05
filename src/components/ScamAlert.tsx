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
  User,
  MapPin,
  Building2,
  FileText,
} from 'lucide-react'

const providers = [
  {
    id: 'telcel',
    name: 'Telcel (Radiomóvil Dipsa, S.A. de C.V.)',
    address:
      'Calle Lago Zúrich número 245, Edificio Telcel, Colonia Ampliación Granada, Alcaldía Miguel Hidalgo, C.P. 11529, Ciudad de México, México',
  },
  {
    id: 'att',
    name: 'AT&T (AT&T Comunicaciones Digitales, S. de R.L. de C.V.)',
    address:
      'Avenida Insurgentes Sur #1143, Colonia Nochebuena, Alcaldía Benito Juárez, C.P. 03720, Ciudad de México, México',
  },
  {
    id: 'movistar',
    name: 'Movistar (Pegaso PCS, S.A. de C.V.)',
    address:
      'Prolongación Paseo de la Reforma No. 1200, Piso 14 y 18, Colonia Cruz Manca, Alcaldía Cuajimalpa de Morelos, C.P. 05349, Ciudad de México',
  },
  {
    id: 'bait',
    name: 'Bait (Wal-Mart Innovación, S. de R.L. de C.V.)',
    address:
      'Nextengo 78, Santa Cruz Acayucan, Alcaldía Azcapotzalco, C.P. 02770, Ciudad de México, México',
  },
  {
    id: 'altan',
    name: 'Altán Redes (Altán Redes, S.A.P.I. de C.V.)',
    address:
      'Avenida Juan Salvador Agraz No. 101, Piso 2, Colonia Santa Fe Cuajimalpa, Alcaldía Cuajimalpa de Morelos, C.P. 05348, Ciudad de México, México',
  },
  {
    id: 'virgin',
    name: 'Virgin Mobile México',
    address:
      'Calzada General Mariano Escobedo 526, Piso 10, Colonia Anzures, Alcaldía Miguel Hidalgo, C.P. 11590, Ciudad de México',
  },
  {
    id: 'flash',
    name: 'Flash Mobile (Logística ACN México)',
    address:
      'Avenida Insurgentes Sur número 1602, Piso 10, Oficina 1001, Colonia Crédito Constructor, Alcaldía Benito Juárez, C.P. 03940, Ciudad de México, México',
  },
]

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('es-MX', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function ScamAlert(): JSX.Element {
  const [name, setName] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [providerId, setProviderId] = useState<string>('')
  const [providerAddress, setProviderAddress] = useState<string>('')
  const [pattern, setPattern] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [showHelp, setShowHelp] = useState<boolean>(false)

  const handleProviderChange = (id: string): void => {
    setProviderId(id)
    const p = providers.find((pr) => pr.id === id)
    setProviderAddress(p?.address ?? '')
  }

  const handleReport = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const selectedProvider = providers.find((p) => p.id === providerId)
    const providerName = selectedProvider?.name ?? providerId

    const subject = encodeURIComponent('Reporte de intento de fraude - PANAFE')
    const body = encodeURIComponent(
      `DATOS DEL DENUNCIANTE\n` +
        `Nombre: ${name}\n` +
        `Domicilio: ${address}\n\n` +
        `PROVEEDOR AFECTADO\n` +
        `Nombre: ${providerName}\n` +
        `Domicilio fiscal: ${providerAddress}\n\n` +
        `DESCRIPCIÓN DE LOS HECHOS\n` +
        `${pattern}\n\n` +
        `URL SOSPECHOSA\n` +
        `${url || 'No proporcionada'}\n\n` +
        `Fecha del reporte: ${new Date().toLocaleDateString('es-MX')}\n\n` +
        `---\nReporte enviado desde PANAFE Hub`,
    )
    window.location.href = `mailto:denuncias.telecom@profeco.gob.mx?subject=${subject}&body=${body}`
    setName('')
    setAddress('')
    setProviderId('')
    setProviderAddress('')
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
                  <label htmlFor="reporter-name" className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-gray-400" aria-hidden="true" />
                      Nombre completo del denunciante
                    </span>
                  </label>
                  <input
                    id="reporter-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Tu nombre completo"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mexico-green focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="reporter-address" className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-gray-400" aria-hidden="true" />
                      Domicilio del denunciante
                    </span>
                  </label>
                  <input
                    id="reporter-address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    placeholder="Calle, número, colonia, ciudad, código postal"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mexico-green focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="provider" className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-gray-400" aria-hidden="true" />
                      Proveedor afectado
                    </span>
                  </label>
                  <select
                    id="provider"
                    value={providerId}
                    onChange={(e) => handleProviderChange(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mexico-green focus:border-transparent bg-white"
                  >
                    <option value="">Selecciona una compañía...</option>
                    {providers.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                {providerAddress && (
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                    <p className="text-xs font-semibold text-gray-700 mb-1">Domicilio fiscal del proveedor:</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{providerAddress}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="pattern" className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-gray-400" aria-hidden="true" />
                      Descripción detallada de los hechos
                    </span>
                  </label>
                  <textarea
                    id="pattern"
                    value={pattern}
                    onChange={(e) => setPattern(e.target.value)}
                    required
                    rows={4}
                    placeholder="Describe detalladamente qué ocurrió: mensaje recibido, número o correo del remitente, qué te pidieron, etc."
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

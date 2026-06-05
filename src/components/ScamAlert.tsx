import { useState } from 'react'
import {
  AlertTriangle,
  Send,
  HelpCircle,
  ExternalLink,
  User,
  MapPin,
  Building2,
  FileText,
  Smartphone,
  Globe,
  CreditCard,
  MessageCircle,
  Eye,
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

const scamDetectionTips = [
  {
    icon: <Smartphone className="w-5 h-5 text-red-600" aria-hidden="true" />,
    title: 'SMS o llamadas falsas',
    description:
      'Te llega un mensaje o llamada diciendo que tu línea será suspendida "hoy" o en "24 horas" si no actualizas tus datos. Las operadoras y el IFT nunca te contactan por SMS para exigir registro.',
  },
  {
    icon: <Globe className="w-5 h-5 text-red-600" aria-hidden="true" />,
    title: 'Sitios web falsos',
    description:
      'Te envían un enlace que parece el portal de tu compañía, pero el dominio tiene errores ortográficos, números extraños o no usa "https". Verifica siempre la URL directamente en el sitio oficial.',
  },
  {
    icon: <CreditCard className="w-5 h-5 text-red-600" aria-hidden="true" />,
    title: 'Te piden dinero para "registrar"',
    description:
      'El registro en el PANAFE es gratuito. Ninguna operadora ni el IFT te cobrará por este trámite. Si te piden pago, es una estafa.',
  },
  {
    icon: <MessageCircle className="w-5 h-5 text-red-600" aria-hidden="true" />,
    title: 'Mensajes por WhatsApp o redes sociales',
    description:
      'Te escriben ofreciendo ayuda para registrar tu línea "rápido y fácil" a cambio de tus datos personales o bancarios. El registro oficial solo se hace en los portales de las operadoras.',
  },
  {
    icon: <Eye className="w-5 h-5 text-red-600" aria-hidden="true" />,
    title: 'Te piden datos sensibles',
    description:
      'Nunca compartas tu NIP, contraseña, número de tarjeta o claves bancarias. El registro PANAFE solo requiere CURP, INE o pasaporte, nunca datos financieros.',
  },
]

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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Reportes y detección de Estafas
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Aprende a detectar intentos de fraude relacionados con el registro PANAFE y reporta los que encuentres.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-mexico-red" aria-hidden="true" />
              Cómo detectar una estafa
            </h3>
            {scamDetectionTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5">{tip.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{tip.title}</p>
                    <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
                <Send className="w-5 h-5 text-mexico-green" aria-hidden="true" />
                Reportar registro NO reconocido o posible estafa
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

              <div className="mt-5 pt-5 border-t border-gray-200">
                <a
                  href="https://www.ift.org.mx/usuarios-y-audiencias/levanta-tu-queja-soy-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-mexico-green hover:text-emerald-800 hover:underline focus-ring rounded"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  Reporta tu queja directamente al Instituto Federal de Telecomunicaciones
                </a>
              </div>
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

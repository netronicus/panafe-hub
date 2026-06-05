import { AlertTriangle, Shield, ArrowLeft, FileText, MessageCircle, Globe, CreditCard, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEOHead } from '../seo/SEOHead'
import { PageLayout } from '../seo/PageLayout'
import { SchemaFAQ } from '../seo/SchemaFAQ'
import { SchemaBreadcrumb } from '../seo/SchemaBreadcrumb'

const faqItems = [
  {
    question: '¿Cómo identificar un mensaje falso de registro de celular?',
    answer:
      'Las operadoras y el IFT NUNCA te envían SMS exigiendo registro urgente con enlaces. Los mensajes fraudulentos usan urgencia extrema, dominios sospechosos y piden datos bancarios.',
  },
  {
    question: '¿Qué hago si recibo un SMS sospechoso?',
    answer:
      'No hagas clic en el enlace. No compartas datos personales. Reporta el mensaje a tu operadora y a PROFECO en denuncias.telecom@profeco.gob.mx.',
  },
  {
    question: '¿El registro de líneas tiene algún costo?',
    answer:
      'No. El registro es completamente gratuito. Si te piden dinero, es una estafa.',
  },
]

const breadcrumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Alertas de Estafas', path: '/estafas' },
]

const redFlags = [
  {
    icon: <Smartphone className="w-5 h-5 text-red-600" />,
    title: 'SMS o llamadas falsas',
    text: 'Te llega un mensaje diciendo que tu línea será suspendida "hoy" si no actualizas datos. Las operadoras nunca contactan por SMS para exigir registro.',
  },
  {
    icon: <Globe className="w-5 h-5 text-red-600" />,
    title: 'Sitios web falsos',
    text: 'Enlaces con dominios mal escritos, números extraños o sin HTTPS. Verifica siempre la URL en el sitio oficial de tu compañía.',
  },
  {
    icon: <CreditCard className="w-5 h-5 text-red-600" />,
    title: 'Te piden dinero',
    text: 'El registro de líneas es gratuito. Ninguna operadora ni el IFT cobra por este trámite.',
  },
  {
    icon: <MessageCircle className="w-5 h-5 text-red-600" />,
    title: 'WhatsApp o redes sociales',
    text: 'Te ofrecen "ayuda" para registrar tu línea a cambio de datos personales o bancarios. El registro oficial solo se hace en los portales de las operadoras.',
  },
]

export function EstafasPage(): JSX.Element {
  return (
    <SEOHead
      title="Estafas Registro Celular 2026 | Phishing SMS | PANAFE Hub"
      description="Identifica mensajes fraudulentos de registro celular. URLs falsas, SMS sospechosos, llamadas de extorsión y cómo reportar estafas ante PROFECO y el IFT."
      canonicalPath="/#/estafas"
    >
      <PageLayout>
        <SchemaFAQ items={faqItems} />
        <SchemaBreadcrumb items={breadcrumbs} />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-mexico-green mb-6">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Alertas de Estafas: Registro de Celular México 2026
            </h1>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Los delincuentes aprovechan el <strong>Registro de Usuarios de Telefonía Móvil</strong>{' '}
              para enviar mensajes fraudulentos. Aprende a identificar estos intentos de estafa y
              protege tu información personal y bancaria.
            </p>

            <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="text-sm text-red-900">
                <strong>Recuerda:</strong> El registro es gratuito. Nadie debe cobrarte. Nadie debe
                pedirte datos bancarios, NIP o contraseñas.
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Señales de alerta (red flags)</h2>
            <div className="mt-4 space-y-4">
              {redFlags.map((flag, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5">{flag.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-900">{flag.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{flag.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">¿Cómo reportar una estafa?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Si recibiste un mensaje sospechoso o fuiste víctima de un intento de fraude, puedes
              reportarlo a:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                { name: 'PROFECO', desc: 'denuncias.telecom@profeco.gob.mx' },
                { name: 'IFT', desc: 'Portal de quejas del IFT: ift.org.mx/usuarios-y-audiencias/levanta-tu-queja-soy-usuario' },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-mexico-green shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Páginas relacionadas</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/#/faq" className="text-sm text-mexico-green hover:underline">
                <FileText className="w-4 h-4 inline mr-1" />
                Preguntas frecuentes
              </Link>
              <Link to="/#/documentos-requeridos" className="text-sm text-mexico-green hover:underline">
                Documentos requeridos
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    </SEOHead>
  )
}

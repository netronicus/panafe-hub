import { ExternalLink, CheckCircle, AlertTriangle, FileText, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEOHead } from '../seo/SEOHead'
import { PageLayout } from '../seo/PageLayout'
import { SchemaHowTo } from '../seo/SchemaHowTo'
import { SchemaBreadcrumb } from '../seo/SchemaBreadcrumb'

const steps = [
  {
    position: 1,
    name: 'Reunir documentos',
    text: 'Prepara tu CURP o INE. Movistar acepta ambos documentos para el registro de líneas móviles.',
    url: '/registro-movistar',
  },
  {
    position: 2,
    name: 'Acceder al portal oficial',
    text: 'Ingresa al portal oficial de Movistar para el registro de usuarios de telefonía móvil.',
    url: '/registro-movistar',
  },
  {
    position: 3,
    name: 'Ingresar número de línea',
    text: 'Captura tu número de celular Movistar de 10 dígitos.',
    url: '/registro-movistar',
  },
  {
    position: 4,
    name: 'Capturar CURP o INE',
    text: 'Ingresa tu CURP o los datos de tu INE tal como aparecen en el documento oficial.',
    url: '/registro-movistar',
  },
  {
    position: 5,
    name: 'Confirmar registro',
    text: 'Verifica los datos, confirma el registro y descarga o guarda el comprobante.',
    url: '/registro-movistar',
  },
]

const breadcrumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Registro Movistar 2026', path: '/registro-movistar' },
]

export function RegistroMovistarPage(): JSX.Element {
  return (
    <SEOHead
      title="Registro Movistar 2026 | Cómo Registrar tu Línea | PANAFE Hub"
      description="Guía completa para registrar tu línea Movistar en el Registro de Usuarios de Telefonía Móvil. Documentos necesarios, pasos detallados y enlace oficial. Evita la suspensión del 1 de julio."
      canonicalPath="/#/registro-movistar"
    >
      <PageLayout>
        <SchemaHowTo
          name="Cómo registrar tu línea Movistar en el Registro de Usuarios de Telefonía Móvil"
          description="Guía paso a paso para vincular tu línea Movistar a tu identidad antes del 30 de junio de 2026."
          steps={steps}
        />
        <SchemaBreadcrumb items={breadcrumbs} />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-mexico-green mb-6">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Registro Movistar 2026: Alta de Línea paso a paso
            </h1>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Las líneas Movistar en México deben registrarse en el{' '}
              <strong>Registro de Usuarios de Telefonía Móvil</strong> antes del{' '}
              <strong>30 de junio de 2026</strong>. Este registro obligatorio, regulado por el IFT,
              busca vincular cada línea móvil a la identidad de su titular para combatir la
              extorsión telefónica. Sigue esta guía para completar tu registro en el portal oficial
              de Movistar.
            </p>

            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900">
                <strong>Fecha límite:</strong> 30 de junio de 2026. El proceso es gratuito y toma
                menos de 15 minutos.
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Documentos necesarios para Movistar</h2>
            <ul className="mt-4 space-y-3">
              {[
                { label: 'CURP', desc: 'Clave Única de Registro de Población. Disponible en curp.gob.mx.' },
                { label: 'INE', desc: 'Credencial para votar vigente emitida por el INE.' },
              ].map((doc) => (
                <li key={doc.label} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-mexico-green shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">{doc.label}</p>
                    <p className="text-sm text-gray-600">{doc.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Cómo registrar tu línea Movistar</h2>
            <ol className="mt-4 space-y-4">
              {steps.map((step) => (
                <li key={step.position} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-mexico-green text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {step.position}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{step.name}</p>
                    <p className="text-sm text-gray-600">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">¿Puedo registrar varias líneas Movistar?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Sí. Una persona física puede registrar hasta <strong>10 líneas móviles</strong> a su
              nombre en total (incluyendo todas las operadoras). Si necesitas más, deberás
              justificar el uso y en algunos casos registrarte como persona moral.
            </p>

            <div className="mt-10 p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
              <p className="text-lg font-semibold text-gray-900">¿Listo para registrar tu línea Movistar?</p>
              <p className="mt-2 text-sm text-gray-600">Accede directamente al portal oficial de Movistar.</p>
              <a
                href="https://registro-telefonica-movistar.hubox.com/registro"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-mexico-green text-white font-medium rounded-lg hover:bg-emerald-800 focus-ring transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Ir al portal oficial de Movistar
              </a>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Páginas relacionadas</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/#/empresas" className="text-sm text-mexico-green hover:underline">
                <FileText className="w-4 h-4 inline mr-1" />
                Registro para empresas
              </Link>
              <Link to="/#/documentos-requeridos" className="text-sm text-mexico-green hover:underline">
                Documentos requeridos
              </Link>
              <Link to="/#/faq" className="text-sm text-mexico-green hover:underline">
                Preguntas frecuentes
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    </SEOHead>
  )
}

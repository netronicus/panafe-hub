import { Globe, CheckCircle, AlertTriangle, ArrowLeft, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEOHead } from '../seo/SEOHead'
import { PageLayout } from '../seo/PageLayout'
import { SchemaHowTo } from '../seo/SchemaHowTo'
import { SchemaBreadcrumb } from '../seo/SchemaBreadcrumb'

const steps = [
  {
    position: 1,
    name: 'Verificar que tu operadora acepta pasaporte',
    text: 'AT&T, Bait y Flash Mobile aceptan pasaporte. Telcel, Movistar y Virgin Mobile requieren CURP o INE.',
    url: '/extranjeros',
  },
  {
    position: 2,
    name: 'Acceder al portal oficial',
    text: 'Ingresa al portal de registro de tu compañía. Selecciona la opción para extranjeros si está disponible.',
    url: '/extranjeros',
  },
  {
    position: 3,
    name: 'Ingresar número de línea',
    text: 'Captura tu número de celular de 10 dígitos.',
    url: '/extranjeros',
  },
  {
    position: 4,
    name: 'Capturar datos del pasaporte',
    text: 'Ingresa tu número de pasaporte, nombre completo y nacionalidad exactamente como aparecen en el documento.',
    url: '/extranjeros',
  },
  {
    position: 5,
    name: 'Confirmar y guardar',
    text: 'Revisa los datos, confirma el registro y guarda el comprobante.',
    url: '/extranjeros',
  },
]

const breadcrumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Registro para Extranjeros', path: '/extranjeros' },
]

export function ExtranjerosPage(): JSX.Element {
  return (
    <SEOHead
      title="Registro Celular Extranjero México 2026 | Turistas y Residentes | PANAFE Hub"
      description="Guía para extranjeros y turistas que necesitan registrar su celular en México. Documentos necesarios (pasaporte), operadoras que aceptan extranjeros y pasos detallados."
      canonicalPath="/#/extranjeros"
    >
      <PageLayout>
        <SchemaHowTo
          name="Cómo registrar tu celular en México si eres extranjero"
          description="Guía paso a paso para turistas y residentes extranjeros que necesitan registrar su línea móvil en México antes del 30 de junio de 2026."
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
              Registro de Celular para Extranjeros en México 2026
            </h1>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Si eres <strong>extranjero residente o turista</strong> en México y tienes una línea
              móvil, también debes registrarla en el{' '}
              <strong>Registro de Usuarios de Telefonía Móvil</strong> antes del 30 de junio de 2026.
              No necesitas CURP ni INE: con tu <strong>pasaporte vigente</strong> es suficiente.
            </p>

            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900">
                <strong>Fecha límite:</strong> 30 de junio de 2026. Todas las líneas, sin excepción,
                deben estar registradas.
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Documento necesario</h2>
            <div className="mt-4 p-5 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Pasaporte vigente</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Debe estar vigente al momento del registro. No necesitas visa, CURP, RFC ni
                    ningún otro documento mexicano.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Operadoras que aceptan pasaporte</h2>
            <ul className="mt-4 space-y-3">
              {[
                { name: 'AT&T', desc: 'Acepta CURP, INE o pasaporte.' },
                { name: 'Bait', desc: 'Acepta CURP, INE o pasaporte.' },
                { name: 'Flash Mobile', desc: 'Acepta CURP, INE o pasaporte.' },
              ].map((op) => (
                <li key={op.name} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-mexico-green shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">{op.name}</p>
                    <p className="text-sm text-gray-600">{op.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Pasos para registrar tu celular como extranjero</h2>
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

            <h2 className="mt-10 text-2xl font-bold text-gray-900">¿Puedo comprar un chip nuevo siendo turista?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Sí. Puedes comprar un chip y activarlo con tu pasaporte. Sin embargo, ten en cuenta que
              la línea debe estar registrada antes del 30 de junio de 2026. Si tu estadía es
              temporal, considera si vale la pena el registro o si prefieres usar roaming con tu
              operadora de origen.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Páginas relacionadas</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/#/documentos-requeridos" className="text-sm text-mexico-green hover:underline">
                <FileText className="w-4 h-4 inline mr-1" />
                Documentos requeridos
              </Link>
              <Link to="/#/registro-att" className="text-sm text-mexico-green hover:underline">
                Registro AT&T
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

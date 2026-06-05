import { Building2, CheckCircle, AlertTriangle, ArrowLeft, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEOHead } from '../seo/SEOHead'
import { PageLayout } from '../seo/PageLayout'
import { SchemaHowTo } from '../seo/SchemaHowTo'
import { SchemaBreadcrumb } from '../seo/SchemaBreadcrumb'

const steps = [
  {
    position: 1,
    name: 'Reunir documentos de la empresa',
    text: 'RFC, Acta Constitutiva e identificación oficial del representante legal.',
    url: '/empresas',
  },
  {
    position: 2,
    name: 'Contactar a la operadora',
    text: 'Las líneas corporativas suelen requerir atención directa con el departamento de empresas de tu operadora.',
    url: '/empresas',
  },
  {
    position: 3,
    name: 'Presentar documentación',
    text: 'Envía o presenta los documentos requeridos según las instrucciones de tu operadora.',
    url: '/empresas',
  },
  {
    position: 4,
    name: 'Registrar cada línea',
    text: 'Vincula cada número de línea corporativa a la identidad de la empresa o del usuario asignado.',
    url: '/empresas',
  },
  {
    position: 5,
    name: 'Confirmar y guardar comprobantes',
    text: 'Asegúrate de recibir comprobante de registro para cada línea.',
    url: '/empresas',
  },
]

const breadcrumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Registro para Empresas', path: '/empresas' },
]

export function EmpresasPage(): JSX.Element {
  return (
    <SEOHead
      title="Registro Líneas Empresa México 2026 | RFC, Acta Constitutiva | PANAFE Hub"
      description="Guía para empresas que necesitan registrar líneas móviles corporativas en México. Documentos requeridos: RFC, Acta Constitutiva. Límite de 10 líneas por persona física."
      canonicalPath="/#/empresas"
    >
      <PageLayout>
        <SchemaHowTo
          name="Cómo registrar líneas móviles corporativas en México"
          description="Guía para empresas y personas morales sobre el registro de líneas móviles en el Registro de Usuarios de Telefonía Móvil antes del 30 de junio de 2026."
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
              Registro de Líneas Móviles para Empresas en México 2026
            </h1>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Si tu empresa tiene <strong>líneas móviles corporativas</strong>, también deben
              registrarse en el <strong>Registro de Usuarios de Telefonía Móvil</strong> antes del
              30 de junio de 2026. El proceso para empresas es diferente al de personas físicas y
              requiere documentación adicional.
            </p>

            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900">
                <strong>Fecha límite:</strong> 30 de junio de 2026. Las líneas corporativas no
                registradas también serán suspendidas.
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Documentos para empresas</h2>
            <div className="mt-4 p-5 bg-amber-50 border border-amber-200 rounded-xl">
              <div className="flex items-start gap-3 mb-3">
                <Building2 className="w-6 h-6 text-amber-600 shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">Persona moral</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'RFC de la empresa',
                  'Acta Constitutiva',
                  'Identificación oficial del representante legal (CURP o INE)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Límite de líneas por empresa</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Una <strong>persona física</strong> puede registrar hasta <strong>10 líneas</strong>{' '}
              a su nombre en total (incluyendo todas las operadoras). Si tu empresa necesita más
              líneas, deberás:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                'Registrar la empresa como persona moral',
                'Justificar el uso de múltiples líneas',
                'Trabajar directamente con el departamento de empresas de tu operadora',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-4 h-4 text-mexico-green shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Pasos para registrar líneas corporativas</h2>
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

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Recomendación para empresas</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Si tu empresa tiene muchas líneas, contacta a tu ejecutivo de cuenta o al departamento
              de empresas de tu operadora lo antes posible. El proceso de registro corporativo puede
              tomar más tiempo que el de una línea individual.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Páginas relacionadas</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/#/documentos-requeridos" className="text-sm text-mexico-green hover:underline">
                <FileText className="w-4 h-4 inline mr-1" />
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

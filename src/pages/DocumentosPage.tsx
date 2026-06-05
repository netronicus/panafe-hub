import { FileText, CheckCircle, AlertTriangle, ArrowLeft, User, Globe, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEOHead } from '../seo/SEOHead'
import { PageLayout } from '../seo/PageLayout'
import { SchemaFAQ } from '../seo/SchemaFAQ'
import { SchemaBreadcrumb } from '../seo/SchemaBreadcrumb'

const faqItems = [
  {
    question: '¿Qué documentos necesito para registrar mi celular en México?',
    answer:
      'Necesitas tu CURP (Clave Única de Registro de Población) o tu INE (Credencial para Votar). Si eres extranjero, puedes usar tu pasaporte vigente.',
  },
  {
    question: '¿Puedo registrar mi línea solo con CURP?',
    answer:
      'Sí. La mayoría de las operadoras aceptan CURP como único documento. Algunas también permiten INE o pasaporte.',
  },
  {
    question: '¿Necesito RFC para registrar mi celular?',
    answer:
      'No. El RFC no es necesario para personas físicas. Solo se requiere para empresas o personas morales que registren líneas corporativas.',
  },
]

const breadcrumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Documentos Requeridos', path: '/documentos-requeridos' },
]

export function DocumentosPage(): JSX.Element {
  return (
    <SEOHead
      title="Documentos para Registrar Celular México 2026 | CURP, INE, Pasaporte | PANAFE Hub"
      description="Lista completa de documentos necesarios para registrar tu línea móvil en México. CURP, INE, pasaporte para extranjeros. Todo lo que necesitas saber antes del 30 de junio."
      canonicalPath="/#/documentos-requeridos"
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
              Documentos para Registrar tu Celular en México 2026
            </h1>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              El <strong>Registro de Usuarios de Telefonía Móvil</strong> requiere que presentes
              documentos oficiales para vincular tu identidad a tu línea. A continuación te
              explicamos exactamente qué necesitas según tu situación.
            </p>

            <div className="mt-10 space-y-6">
              <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <User className="w-6 h-6 text-mexico-green" />
                  <h2 className="text-xl font-bold text-gray-900">Personas físicas (mexicanos)</h2>
                </div>
                <ul className="space-y-2">
                  {[
                    'CURP (Clave Única de Registro de Población)',
                    'INE (Credencial para Votar vigente)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-mexico-green shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  Basta con presentar <strong>uno solo</strong> de estos documentos. No necesitas
                  ambos.
                </p>
              </div>

              <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-900">Extranjeros residentes o turistas</h2>
                </div>
                <ul className="space-y-2">
                  {['Pasaporte vigente'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  No necesitas CURP ni INE. Tu pasaporte es suficiente para registrar tu línea en
                  cualquier operadora que acepte extranjeros.
                </p>
              </div>

              <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-6 h-6 text-amber-600" />
                  <h2 className="text-xl font-bold text-gray-900">Empresas y personas morales</h2>
                </div>
                <ul className="space-y-2">
                  {[
                    'RFC de la empresa',
                    'Acta Constitutiva',
                    'Identificación oficial del representante legal',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900">
                <strong>Importante:</strong> El registro es gratuito. Nadie debe cobrarte por este
                trámite. Si te piden dinero, es una estafa.
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Tabla comparativa por tipo de usuario</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Tipo de usuario</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Documentos necesarios</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Mexicano (persona física)</td>
                    <td className="px-4 py-3 text-gray-700">CURP o INE</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Extranjero</td>
                    <td className="px-4 py-3 text-gray-700">Pasaporte vigente</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Empresa</td>
                    <td className="px-4 py-3 text-gray-700">RFC, Acta Constitutiva, ID del representante</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Páginas relacionadas</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/#/extranjeros" className="text-sm text-mexico-green hover:underline">
                <FileText className="w-4 h-4 inline mr-1" />
                Guía para extranjeros
              </Link>
              <Link to="/#/empresas" className="text-sm text-mexico-green hover:underline">
                Registro para empresas
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

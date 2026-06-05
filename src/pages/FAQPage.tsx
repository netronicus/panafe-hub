import { ChevronDown, ArrowLeft, FileText } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SEOHead } from '../seo/SEOHead'
import { PageLayout } from '../seo/PageLayout'
import { SchemaFAQ } from '../seo/SchemaFAQ'
import { SchemaBreadcrumb } from '../seo/SchemaBreadcrumb'

const faqItems = [
  {
    question: '¿Qué pasa si no registro mi celular antes del 30 de junio de 2026?',
    answer:
      'Tu línea será suspendida el 1 de julio de 2026. No podrás hacer ni recibir llamadas, enviar mensajes ni usar datos móviles. Para reactivarla, tendrás que completar el registro posteriormente.',
  },
  {
    question: '¿Cuántas líneas puedo registrar a mi nombre?',
    answer:
      'Una persona física puede registrar hasta 10 líneas móviles a su nombre en total (todas las operadoras incluidas). Si necesitas más, deberás justificar el uso o registrarte como persona moral.',
  },
  {
    question: '¿El registro de líneas tiene costo?',
    answer:
      'No. El registro en el Registro de Usuarios de Telefonía Móvil es completamente gratuito. Ninguna operadora ni el IFT te cobrará por este trámite.',
  },
  {
    question: '¿Puedo registrar mi línea si soy extranjero?',
    answer:
      'Sí. Si eres extranjero, puedes registrar tu línea con tu pasaporte vigente. No necesitas CURP ni INE. Algunas operadoras como AT&T, Bait y Flash Mobile aceptan pasaporte.',
  },
  {
    question: '¿Qué documentos necesito para registrar mi celular?',
    answer:
      'Mexicanos: CURP o INE. Extranjeros: pasaporte vigente. Empresas: RFC, Acta Constitutiva e identificación del representante legal.',
  },
  {
    question: '¿Cómo sé si mi línea ya está registrada?',
    answer:
      'Consulta el portal oficial de tu operadora. Algunas operadoras permiten verificar el estado de registro ingresando tu número de línea.',
  },
]

const breadcrumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Preguntas Frecuentes', path: '/faq' },
]

export function FAQPage(): JSX.Element {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number): void => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <SEOHead
      title="Preguntas Frecuentes Registro Celular México 2026 | PANAFE Hub"
      description="¿Qué pasa si no registro mi celular? ¿Cuántas líneas puedo tener? ¿Necesito CURP? Respuestas oficiales sobre el registro obligatorio de celulares en México."
      canonicalPath="/#/faq"
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
              Preguntas Frecuentes: Registro de Celular México 2026
            </h1>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Respuestas claras y oficiales sobre el{' '}
              <strong>Registro de Usuarios de Telefonía Móvil</strong> en México. Si no encuentras
              tu respuesta aquí, consulta directamente en el portal del IFT.
            </p>

            <div className="mt-8 space-y-3">
              {faqItems.map((item, idx) => {
                const isOpen = openId === idx
                return (
                  <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-gray-50 transition-colors focus-ring"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-semibold text-gray-900">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Páginas relacionadas</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/#/documentos-requeridos" className="text-sm text-mexico-green hover:underline">
                <FileText className="w-4 h-4 inline mr-1" />
                Documentos requeridos
              </Link>
              <Link to="/#/estafas" className="text-sm text-mexico-green hover:underline">
                Alertas de estafas
              </Link>
              <Link to="/#/extranjeros" className="text-sm text-mexico-green hover:underline">
                Guía para extranjeros
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    </SEOHead>
  )
}

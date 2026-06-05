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
    text: 'Prepara tu CURP, INE o pasaporte vigente. AT&T acepta los tres documentos para el registro.',
    url: '/registro-att',
  },
  {
    position: 2,
    name: 'Acceder al portal oficial',
    text: 'Ingresa al portal oficial de AT&T para el registro de usuarios de telefonía móvil.',
    url: '/registro-att',
  },
  {
    position: 3,
    name: 'Ingresar número de línea',
    text: 'Captura tu número de celular AT&T de 10 dígitos.',
    url: '/registro-att',
  },
  {
    position: 4,
    name: 'Seleccionar tipo de identificación',
    text: 'Elige si vas a registrar con CURP, INE o pasaporte (ideal para extranjeros residentes).',
    url: '/registro-att',
  },
  {
    position: 5,
    name: 'Capturar datos y confirmar',
    text: 'Ingresa los datos de tu identificación, revisa que sean correctos y guarda el comprobante.',
    url: '/registro-att',
  },
]

const breadcrumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Registro AT&T 2026', path: '/registro-att' },
]

export function RegistroATTPage(): JSX.Element {
  return (
    <SEOHead
      title="Registro AT&T México 2026 | Cómo Registrar tu Línea | PANAFE Hub"
      description="Guía completa para registrar tu línea AT&T en el Registro de Usuarios de Telefonía Móvil. Documentos necesarios, pasos detallados y enlace oficial. Incluye opción para extranjeros."
      canonicalPath="/#/registro-att"
    >
      <PageLayout>
        <SchemaHowTo
          name="Cómo registrar tu línea AT&T en el Registro de Usuarios de Telefonía Móvil"
          description="Guía paso a paso para vincular tu línea AT&T a tu identidad antes del 30 de junio de 2026."
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
              Registro AT&T México 2026: Guía Paso a Paso
            </h1>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Todas las líneas AT&T en México deben registrarse en el{' '}
              <strong>Registro de Usuarios de Telefonía Móvil</strong> antes del{' '}
              <strong>30 de junio de 2026</strong>. AT&T ofrece una de las plataformas más
              completas, permitiendo registrar con CURP, INE o pasaporte. Aprende aquí cómo hacerlo
              rápidamente.
            </p>

            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900">
                <strong>Fecha límite:</strong> 30 de junio de 2026. Registra tu línea AT&T lo antes
                posible.
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Documentos aceptados por AT&T</h2>
            <ul className="mt-4 space-y-3">
              {[
                { label: 'CURP', desc: 'Clave Única de Registro de Población.' },
                { label: 'INE', desc: 'Credencial para votar vigente.' },
                { label: 'Pasaporte', desc: 'Ideal para extranjeros residentes en México.' },
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

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Pasos para registrar tu línea AT&T</h2>
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

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Registro para extranjeros en AT&T</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Si eres extranjero residente en México y tienes una línea AT&T, puedes registrarla con
              tu <strong>pasaporte vigente</strong>. No necesitas CURP ni INE. Selecciona la opción
              de pasaporte en el portal oficial de AT&T y sigue las instrucciones.
            </p>

            <div className="mt-10 p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
              <p className="text-lg font-semibold text-gray-900">¿Listo para registrar tu línea AT&T?</p>
              <p className="mt-2 text-sm text-gray-600">Accede directamente al portal oficial de AT&T.</p>
              <a
                href="https://www.att.com.mx/vinculatulinearegistro/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-mexico-green text-white font-medium rounded-lg hover:bg-emerald-800 focus-ring transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Ir al portal oficial de AT&T
              </a>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">Páginas relacionadas</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/#/extranjeros" className="text-sm text-mexico-green hover:underline">
                <FileText className="w-4 h-4 inline mr-1" />
                Guía para extranjeros
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

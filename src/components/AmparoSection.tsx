import { Scale, Clock, FileText, ExternalLink, AlertCircle } from 'lucide-react'

export function AmparoSection(): JSX.Element {
  return (
    <section id="amparo" className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            ¿Quieres ampararte ante este proceso?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            La Ley de Amparo te protege si consideras que el registro obligatorio vulnera tus derechos.
          </p>
        </div>

        <div className="space-y-6">
          <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-4">
            <Scale className="w-6 h-6 text-mexico-green shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-gray-900">¿Cubre la ley este caso?</p>
              <p className="mt-1 text-sm text-gray-700">
                Sí. La Ley de Amparo permite impugnar actos y decisiones del{' '}
                <strong>Instituto Federal de Telecomunicaciones (IFT)</strong>, que es la autoridad
                que regula el registro PANAFE. Si crees que la obligación de vincular tu línea a tu
                identidad violenta tu derecho a la privacidad, protección de datos personales o
                cualquier otro derecho reconocido en la Constitución, puedes solicitar amparo.
              </p>
            </div>
          </div>

          <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-4">
            <Clock className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-gray-900">Plazo para presentar tu demanda</p>
              <p className="mt-1 text-sm text-gray-700">
                Tienes <strong>15 días hábiles</strong> (de lunes a viernes, excluyendo días
                festivos oficiales) contados a partir del día siguiente en que tuviste conocimiento
                del acto o de su ejecución. Si dejas pasar este tiempo, pierdes el derecho.
              </p>
            </div>
          </div>

          <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-4">
            <FileText className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-gray-900">¿Qué necesitas para iniciarlo?</p>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span>Tu nombre completo y domicilio actual.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span>Identificar la autoridad responsable (en este caso, el IFT).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span>Describir con claridad el acto que te afecta y los derechos que consideras vulnerados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span>Acudir ante un juez de distrito o presentar tu demanda por medios electrónicos autorizados.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-gray-500 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-gray-900">Recomendación importante</p>
              <p className="mt-1 text-sm text-gray-700">
                El juicio de amparo es un proceso jurídico formal. Si decides seguir esta vía, te
                sugerimos buscar asesoría de un abogado o una organización de derechos humanos para
                que te acompañen en la elaboración de la demanda y representación ante el juez.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <a
              href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LAmp.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-mexico-green text-white text-sm font-medium rounded-lg hover:bg-emerald-800 focus-ring transition-colors"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Descargar la Ley de Amparo (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

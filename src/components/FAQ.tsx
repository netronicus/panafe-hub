import { useState } from 'react'
import { ChevronDown, ExternalLink, BookOpen } from 'lucide-react'
import { faqItems } from '../data/faq'

export function FAQ(): JSX.Element {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string): void => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Respuestas claras sobre el registro de líneas móviles en México.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            const panelId = `faq-panel-${item.id}`
            return (
              <div
                key={item.id}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-gray-50 transition-colors focus-ring"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-sm sm:text-base font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div id={panelId} className="px-5 pb-5" role="region">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-mexico-green" aria-hidden="true" />
            Fuentes oficiales
          </h3>
          <ul className="space-y-3">
            {[
              {
                label: 'Instituto Federal de Telecomunicaciones (IFT)',
                url: 'https://www.ift.org.mx',
              },
              {
                label: 'Gobierno de México - Registro de líneas',
                url: 'https://www.gob.mx',
              },
              {
                label: 'Telcel - Portal oficial',
                url: 'https://www.telcel.com',
              },
              {
                label: 'AT&T México',
                url: 'https://www.att.com.mx',
              },
              {
                label: 'Movistar México',
                url: 'https://www.movistar.com.mx',
              },
            ].map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-mexico-green hover:text-emerald-800 hover:underline focus-ring rounded"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

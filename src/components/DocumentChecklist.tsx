import { useState, useCallback } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Check, Users, Briefcase, Globe, FileCheck } from 'lucide-react'

export type FilterType = 'all' | 'national' | 'foreigner' | 'company'

type CheckItem = {
  id: string
  label: string
  filters: FilterType[]
}

const allItems: CheckItem[] = [
  { id: 'curp', label: 'CURP (Clave Única de Registro de Población)', filters: ['all', 'national'] },
  { id: 'ine', label: 'INE (Credencial para votar vigente)', filters: ['all', 'national'] },
  { id: 'passport-national', label: 'Pasaporte vigente (alternativa a INE)', filters: ['all', 'national'] },
  { id: 'cedula', label: 'Cédula Profesional (alternativa a INE)', filters: ['all', 'national'] },
  { id: 'passport-foreign', label: 'Pasaporte vigente (extranjeros)', filters: ['all', 'foreigner'] },
  { id: 'rfc', label: 'RFC de la empresa', filters: ['all', 'company'] },
  { id: 'constitutive', label: 'Acta constitutiva de la empresa', filters: ['all', 'company'] },
  { id: 'ine-rep', label: 'INE del representante legal', filters: ['all', 'company'] },
]

const filterConfig: { key: FilterType; label: string; icon: React.ReactNode }[] = [
  { key: 'all', label: 'Todos', icon: <Users className="w-4 h-4" aria-hidden="true" /> },
  { key: 'national', label: 'Mexicano', icon: <FileCheck className="w-4 h-4" aria-hidden="true" /> },
  { key: 'foreigner', label: 'Extranjero', icon: <Globe className="w-4 h-4" aria-hidden="true" /> },
  { key: 'company', label: 'Empresa', icon: <Briefcase className="w-4 h-4" aria-hidden="true" /> },
]

export function DocumentChecklist(): JSX.Element {
  const [checkedArray, setCheckedArray] = useLocalStorage<string[]>('panafe-checklist', [])
  const [filter, setFilter] = useState<FilterType>('all')

  const checked = new Set(checkedArray)

  const toggle = useCallback((id: string) => {
    setCheckedArray((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return Array.from(next)
    })
  }, [setCheckedArray])

  const visibleItems = allItems.filter((item) => item.filters.includes(filter))
  const checkedCount = visibleItems.filter((item) => checked.has(item.id)).length
  const progress = visibleItems.length > 0 ? Math.round((checkedCount / visibleItems.length) * 100) : 0

  return (
    <section id="documentos" className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Checklist de Documentos</h2>
          <p className="mt-4 text-lg text-gray-600">
            Marca los documentos que ya tienes listos para tu registro.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filterConfig.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors focus-ring ${
                filter === f.key
                  ? 'bg-mexico-green text-white border-mexico-green'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              {f.icon}
              {f.label}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
            <span>Progreso</span>
            <span>
              {checkedCount} de {visibleItems.length}
            </span>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-mexico-green transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progreso del checklist"
            />
          </div>
        </div>

        <div className="space-y-3">
          {visibleItems.map((item) => {
            const isChecked = checked.has(item.id)
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggle(item.id)}
                className={`w-full text-left flex items-start gap-4 p-4 rounded-xl border transition-all focus-ring ${
                  isChecked
                    ? 'bg-emerald-50 border-emerald-200'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
                aria-pressed={isChecked}
              >
                <div
                  className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isChecked
                      ? 'bg-mexico-green border-mexico-green'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  {isChecked && <Check className="w-4 h-4 text-white" aria-hidden="true" />}
                </div>
                <span
                  className={`text-sm sm:text-base ${
                    isChecked ? 'text-emerald-900 line-through' : 'text-gray-900'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

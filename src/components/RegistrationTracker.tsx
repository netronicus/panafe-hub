import { useState } from 'react'
import { useTracker } from '../context/TrackerContext'
import { carriers } from '../data/carriers'
import { getDaysLeft } from '../data/deadline'
import type { LineStatus } from '../types'
import {
  Plus,
  Trash2,
  FileJson,
  FileSpreadsheet,
  Smartphone,
  CheckCircle2,
  Clock,
  AlertOctagon,
  ShieldCheck,
} from 'lucide-react'

function maskPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  if (digits.length < 4) return digits
  if (digits.length <= 6) return `${digits.slice(0, 2)}**${digits.slice(-2)}`
  return `${digits.slice(0, 3)} **** ${digits.slice(-4)}`
}

function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '').replace(/^52/, '').slice(0, 10)
}

function isValidMexicanPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '').replace(/^52/, '')
  return digits.length === 10
}

function StatusBadge({ status }: { status: LineStatus }): JSX.Element {
  const config: Record<
    LineStatus,
    { label: string; icon: React.ReactNode; classes: string }
  > = {
    registered: {
      label: 'Registrada',
      icon: <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />,
      classes: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    pending: {
      label: 'Pendiente',
      icon: <Clock className="w-3.5 h-3.5" aria-hidden="true" />,
      classes: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    suspended: {
      label: 'Suspendida',
      icon: <AlertOctagon className="w-3.5 h-3.5" aria-hidden="true" />,
      classes: 'bg-red-50 text-red-700 border-red-200',
    },
  }
  const c = config[status]
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border ${c.classes}`}
    >
      {c.icon}
      {c.label}
    </span>
  )
}

export function RegistrationTracker(): JSX.Element {
  const { entries, addEntry, updateEntry, deleteEntry, getSummary, exportToJson, exportToCsv } =
    useTracker()
  const [isAdding, setIsAdding] = useState<boolean>(false)
  const [phone, setPhone] = useState<string>('')
  const [carrierId, setCarrierId] = useState<string>('')
  const [status, setStatus] = useState<LineStatus>('pending')
  const [date, setDate] = useState<string>('')
  const [notes, setNotes] = useState<string>('')
  const [formError, setFormError] = useState<string | null>(null)

  const summary = getSummary()
  const daysLeft = getDaysLeft()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setFormError(null)

    const trimmedPhone = phone.trim()
    if (!trimmedPhone || !carrierId) return

    if (!isValidMexicanPhone(trimmedPhone)) {
      setFormError('Ingresa un número de 10 dígitos válido en México.')
      return
    }

    if (date && new Date(date) > new Date()) {
      setFormError('La fecha de registro no puede ser futura.')
      return
    }

    addEntry({
      phoneNumber: normalizePhone(trimmedPhone),
      carrierId,
      status,
      registrationDate: date || undefined,
      notes: notes.trim() || undefined,
    })
    setPhone('')
    setCarrierId('')
    setStatus('pending')
    setDate('')
    setNotes('')
    setFormError(null)
    setIsAdding(false)
  }

  const handleDownload = (content: string, filename: string, type: string): void => {
    const blob = new Blob([content], { type })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section id="seguimiento" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Seguimiento Personal
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Registra tus líneas de forma privada. Tus datos se guardan únicamente en tu navegador.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>Sin conexión a servidores. Solo localStorage.</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Smartphone className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{summary.total}</p>
              <p className="text-sm text-gray-500">Líneas totales</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{summary.registered}</p>
              <p className="text-sm text-gray-500">Registradas</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{summary.pending}</p>
              <p className="text-sm text-gray-500">Pendientes</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
              <AlertOctagon className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{daysLeft}</p>
              <p className="text-sm text-gray-500">Días restantes</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Mis líneas</h3>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setIsAdding((prev) => !prev)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-mexico-green text-white text-sm font-medium rounded-lg hover:bg-emerald-800 focus-ring transition-colors"
              >
                <Plus className="w-4 h-4" aria-hidden="true" />
                {isAdding ? 'Cancelar' : 'Agregar línea'}
              </button>
              <button
                type="button"
                onClick={() => handleDownload(exportToJson(), 'panafe-lines.json', 'application/json')}
                className="inline-flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 focus-ring transition-colors"
              >
                <FileJson className="w-4 h-4" aria-hidden="true" />
                JSON
              </button>
              <button
                type="button"
                onClick={() => handleDownload(exportToCsv(), 'panafe-lines.csv', 'text/csv')}
                className="inline-flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 focus-ring transition-colors"
              >
                <FileSpreadsheet className="w-4 h-4" aria-hidden="true" />
                CSV
              </button>
            </div>
          </div>

          {isAdding && (
            <form onSubmit={handleSubmit} className="p-4 sm:p-6 border-b border-gray-200 bg-gray-50">
              {formError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                  {formError}
                </div>
              )}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="sm:col-span-2 lg:col-span-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Número
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="55 1234 5678"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mexico-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="carrier" className="block text-sm font-medium text-gray-700 mb-1">
                    Compañía
                  </label>
                  <select
                    id="carrier"
                    value={carrierId}
                    onChange={(e) => setCarrierId(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mexico-green focus:border-transparent bg-white"
                  >
                    <option value="">Selecciona...</option>
                    {carriers.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    Estado
                  </label>
                  <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as LineStatus)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mexico-green focus:border-transparent bg-white"
                  >
                    <option value="pending">Pendiente</option>
                    <option value="registered">Registrada</option>
                    <option value="suspended">Suspendida</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha de registro
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mexico-green focus:border-transparent"
                  />
                </div>
                <div className="sm:col-span-2 lg:col-span-4">
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Notas
                  </label>
                  <input
                    id="notes"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ej. Línea de mi mamá, registrada en tienda..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mexico-green focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-mexico-green text-white text-sm font-medium rounded-lg hover:bg-emerald-800 focus-ring transition-colors"
                >
                  <Plus className="w-4 h-4" aria-hidden="true" />
                  Guardar línea
                </button>
              </div>
            </form>
          )}

          <div className="divide-y divide-gray-100">
            {entries.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <Smartphone className="w-10 h-10 mx-auto mb-3 text-gray-300" aria-hidden="true" />
                <p className="text-base font-medium">No tienes líneas registradas</p>
                <p className="text-sm mt-1">Agrega tu primera línea para comenzar el seguimiento.</p>
              </div>
            ) : (
              entries.map((entry) => (
                <div
                  key={entry.id}
                  className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-base font-semibold text-gray-900">
                        {maskPhone(entry.phoneNumber)}
                      </span>
                      <StatusBadge status={entry.status} />
                    </div>
                    <p className="text-sm text-gray-500">
                      {carriers.find((c) => c.id === entry.carrierId)?.name ?? entry.carrierId}
                      {entry.registrationDate && (
                        <span className="ml-2">· Registrada el {entry.registrationDate}</span>
                      )}
                    </p>
                    {entry.notes && (
                      <p className="text-sm text-gray-600 mt-1">{entry.notes}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      value={entry.status}
                      onChange={(e) =>
                        updateEntry(entry.id, { status: e.target.value as LineStatus })
                      }
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-mexico-green bg-white"
                      aria-label="Cambiar estado"
                    >
                      <option value="pending">Pendiente</option>
                      <option value="registered">Registrada</option>
                      <option value="suspended">Suspendida</option>
                    </select>
                    <button
                      type="button"
                      onClick={() => deleteEntry(entry.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg focus-ring transition-colors"
                      aria-label="Eliminar línea"
                    >
                      <Trash2 className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

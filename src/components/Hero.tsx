import { useCountdown } from '../hooks/useCountdown'
import { REGISTRO_DEADLINE, REGISTRO_DEADLINE_LABEL } from '../data/deadline'
import { AlertTriangle, Clock, Calendar } from 'lucide-react'

function CountdownUnit({ value, label }: { value: number; label: string }): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center">
        <span className="text-2xl sm:text-3xl font-bold text-mexico-green">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="mt-2 text-xs sm:text-sm font-medium text-white uppercase tracking-wide">
        {label}
      </span>
    </div>
  )
}

export function Hero(): JSX.Element {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(REGISTRO_DEADLINE)

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-mexico-green to-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Fecha límite: {REGISTRO_DEADLINE_LABEL}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Registra tu línea antes del{' '}
              <span className="text-yellow-300">{REGISTRO_DEADLINE_LABEL}</span>
            </h1>
            <p className="text-lg sm:text-xl text-emerald-50 max-w-xl">
              Todas las líneas móviles en México deben estar vinculadas a tu CURP. Si eres
              extranjero, usa tu pasaporte. Las líneas no registradas serán{' '}
              <strong className="text-white">suspendidas el 1 de julio</strong>.
            </p>
            <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
              <AlertTriangle className="w-6 h-6 text-yellow-300 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm sm:text-base text-emerald-50">
                No esperes al último día. Los portales de las operadoras pueden saturarse cerca de la
                fecha límite.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <div className="bg-emerald-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 w-full max-w-md">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-yellow-300" aria-hidden="true" />
                <span className="text-lg font-semibold">Tiempo restante</span>
              </div>
              {isExpired ? (
                <div className="text-center py-8">
                  <p className="text-2xl font-bold text-yellow-300">El plazo ha vencido</p>
                  <p className="mt-2 text-emerald-100">
                    Si tu línea fue suspendida, regístrala lo antes posible para reactivarla.
                  </p>
                </div>
              ) : (
                <div className="flex justify-center gap-3 sm:gap-4">
                  <CountdownUnit value={days} label="Días" />
                  <CountdownUnit value={hours} label="Horas" />
                  <CountdownUnit value={minutes} label="Min" />
                  <CountdownUnit value={seconds} label="Seg" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

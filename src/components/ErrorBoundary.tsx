import { Component, type ReactNode } from 'react'
import { AlertTriangle, RotateCcw } from 'lucide-react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  errorMessage?: string
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // En producción podrías enviar esto a un servicio de logging
    // eslint-disable-next-line no-console
    console.error('Error capturado en el límite de error:', error, errorInfo)
  }

  handleReload = (): void => {
    window.location.reload()
  }

  handleClearStorage = (): void => {
    try {
      window.localStorage.clear()
    } catch {
      // Si el Almacenamiento Local no está disponible, simplemente recarga
    }
    window.location.reload()
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white rounded-xl border border-red-200 shadow-sm p-8 text-center">
            <div className="w-14 h-14 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-7 h-7" aria-hidden="true" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 mb-2">
              Algo salió mal
            </h1>
            <p className="text-sm text-gray-600 mb-2">
              Ocurrió un error inesperado. Esto puede deberse a que los datos guardados en tu
              navegador están dañados o incompletos.
            </p>
            {this.state.errorMessage && (
              <p className="text-xs text-gray-400 mb-6 font-mono bg-gray-50 rounded p-2">
                {this.state.errorMessage}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={this.handleReload}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-mexico-green text-white text-sm font-medium rounded-lg hover:bg-emerald-800 focus-ring transition-colors"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                Intentar de nuevo
              </button>
              <button
                type="button"
                onClick={this.handleClearStorage}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 focus-ring transition-colors"
              >
                Borrar datos y recargar
              </button>
            </div>
            <p className="mt-4 text-xs text-gray-400">
              Tus datos se guardan únicamente en tu navegador. No se envían a ningún servidor.
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

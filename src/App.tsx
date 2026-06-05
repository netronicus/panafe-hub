import { Helmet } from 'react-helmet-async'
import { TrackerProvider } from './context/TrackerContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CarrierDirectory } from './components/CarrierDirectory'
import { RegistrationTracker } from './components/RegistrationTracker'
import { DocumentChecklist } from './components/DocumentChecklist'
import { ScamAlert } from './components/ScamAlert'
import { AmparoSection } from './components/AmparoSection'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

export default function App(): JSX.Element {
  return (
    <TrackerProvider>
      <Helmet>
        <title>PANAFE Hub - Registro de Líneas Móviles México 2026</title>
        <meta
          name="description"
          content="Herramienta informativa para registrar tu línea móvil en el PANAFE antes del 30 de junio de 2026. Enlaces oficiales, checklist de documentos y seguimiento de registro."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <CarrierDirectory />
          <RegistrationTracker />
          <DocumentChecklist />
          <ScamAlert />
          <AmparoSection />
          <FAQ />
        </main>
        <Footer />
      </div>
    </TrackerProvider>
  )
}

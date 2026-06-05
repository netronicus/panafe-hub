import { TrackerProvider } from './context/TrackerContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CarrierDirectory } from './components/CarrierDirectory'
import { RegistrationTracker } from './components/RegistrationTracker'
import { DocumentChecklist } from './components/DocumentChecklist'
import { NamingClarification } from './components/NamingClarification'
import { ScamAlert } from './components/ScamAlert'
import { AmparoSection } from './components/AmparoSection'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

export default function App(): JSX.Element {
  return (
    <TrackerProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <NamingClarification />
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

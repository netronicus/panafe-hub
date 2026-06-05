import { HashRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import {
  HomePage,
  RegistroTelcelPage,
  RegistroATTPage,
  RegistroMovistarPage,
  DocumentosPage,
  ExtranjerosPage,
  EmpresasPage,
  EstafasPage,
  FAQPage,
} from './pages'

export default function App(): JSX.Element {
  return (
    <HelmetProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registro-telcel" element={<RegistroTelcelPage />} />
          <Route path="/registro-att" element={<RegistroATTPage />} />
          <Route path="/registro-movistar" element={<RegistroMovistarPage />} />
          <Route path="/documentos-requeridos" element={<DocumentosPage />} />
          <Route path="/extranjeros" element={<ExtranjerosPage />} />
          <Route path="/empresas" element={<EmpresasPage />} />
          <Route path="/estafas" element={<EstafasPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </HashRouter>
    </HelmetProvider>
  )
}

import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import TermsAndConditionsPage from './pages/TermsAndConditions'
import PrivacyPage from './pages/Privacy'
import NotFoundPage from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/como-funciona" element={<HowItWorks />} />
      <Route path="/terminos-y-condiciones" element={<TermsAndConditionsPage />} />
      <Route path="/politica-de-privacidad" element={<PrivacyPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
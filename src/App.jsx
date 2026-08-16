import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import TermsAndConditionsPage from './pages/TermsAnsConditions'
import PrivacyPage from './pages/Privacy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/como-funciona" element={<HowItWorks />} />
      <Route path="/terminos-y-condiciones" element={<TermsAndConditionsPage />} />
      <Route path="/politica-de-privacidad" element={<PrivacyPage />} />
    </Routes>
  )
}

export default App
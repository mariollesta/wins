import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import TermsAndConditions from './pages/TermsAnsConditions'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/como-funciona" element={<HowItWorks />} />
      <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
    </Routes>
  )
}

export default App
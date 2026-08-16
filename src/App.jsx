import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import HowItWorks from './pages/HowItWorks'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/como-funciona" element={<HowItWorks />} />
    </Routes>
  )
}

export default App
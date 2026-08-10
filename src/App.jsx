import { useState } from 'react'

function App() {
  const [wins, setWins] = useState(0)

  return (
    <div>
      <h1>Wins</h1>
      <pre>{JSON.stringify(wins, null, 2)}</pre>
    </div>
  )
}

export default App
